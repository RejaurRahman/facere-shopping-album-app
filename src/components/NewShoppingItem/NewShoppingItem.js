import React, { useState } from 'react'
import AddShoppingForm from '../Form/AddShoppingForm/AddShoppingForm'
import Button from '../UI/Button/Button'
import ShoppingFilter from '../Shopping/ShoppingFilter/ShoppingFilter'
import { ReactComponent as AddIcon } from '../../assets/icons/add-plus.svg'
import firebase from '../../firebase'
import './NewShoppingItem.scss'

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
    <div className="new-expense">
      {
        !isAdding && (
          <Button
            className="button--rounded button__add"
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
    </div>
  )
}

export default NewShoppingItem
