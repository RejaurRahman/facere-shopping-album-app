import React, { useState } from 'react'

import AddShoppingForm from '../Form/AddShoppingForm/AddShoppingForm'
import Button, { BUTTON_TYPE_CLASSES } from '../UI/Button/Button'
import ShoppingFilter from '../Shopping/ShoppingFilter/ShoppingFilter'

import { ReactComponent as AddIcon } from '../../assets/icons/add-plus.svg'

import firebase from '../../firebase'

import { NewExpense } from './NewShoppingItem.styles'

const NewShoppingItem = (props) => {
  const [isAdding, setIsAdding] = useState(false)
  const [filteredCategory, setFilteredCategory] = useState('All')

  const filterChangeHandler = async (selectedCategory) => {
    await setFilteredCategory(selectedCategory)
    props.onFilterValueChange(selectedCategory)
  }

  const addItemToFirestore = async (shoppingData) => {
    try {
      const itemsCollectionRef = firebase.firestore().collection('items')
      const newItemRef = await itemsCollectionRef.add(shoppingData)
      const storeShoppingData = {
        id: newItemRef.id,
        title: shoppingData.title,
        category: shoppingData.category,
        isCompleted: false,
      }

      props.onAddShopping(storeShoppingData)
      setIsAdding(false)
    } catch (error) {
      // eslint-disable-next-line
      console.error('Error adding item: ', error)
    }
  }

  const saveShoppingDataHandler = (enteredShoppingData) => {
    const shoppingData = {
      title: enteredShoppingData.title,
      category: enteredShoppingData.category,
      isCompleted: false,
    }

    addItemToFirestore(shoppingData)
  }

  const startAddingHandler = () => {
    setIsAdding(true)
  }

  const stopAddingHandler = () => {
    setIsAdding(false)
  }

  return (
    <NewExpense>
      {
        !isAdding && (
          <Button
            buttonType={BUTTON_TYPE_CLASSES.add}
            onClick={startAddingHandler}
            type="button"
          >
            <AddIcon />
          </Button>
        )
      }

      {
        isAdding && (
          <AddShoppingForm
            onCancel={stopAddingHandler}
            onSaveShoppingData={saveShoppingDataHandler}
          />
        )
      }

      <ShoppingFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredCategory}
        uniqueCategories={props.uniqueCategories}
      />
    </NewExpense>
  )
}

export default NewShoppingItem
