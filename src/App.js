import React, {
  useEffect,
  useState
} from 'react'

import NewShoppingItem from './components/NewShoppingItem/NewShoppingItem'
import ShoppingBoard from './components/Shopping/ShoppingBoard/ShoppingBoard'
import Background from './components/UI/Background/Background'
import EditShoppingForm from './components/Form/EditShoppingForm/EditShoppingForm'
import ShoppingCounter from './components/Shopping/ShoppingCounter/ShoppingCounter'

import firebase from './firebase'

import {
  AppContainer,
  AppRoute
} from './App.styles'

const App = () => {
  const [expenses, setExpenses] = useState([])
  const [filteredCategory, setFilteredCategory] = useState('All')
  const [isExpenseAdded, setIsExpenseAdded] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editItemId, setEditItemId] = useState()
  const [filterCategories, setFilterCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const itemsCollectionRef = firebase.firestore().collection('items')

  async function getItems() {
    try {
      // eslint-disable-next-line no-undef
      const uniqueCategories = new Set()
      const items = []
      const querySnapshot = await itemsCollectionRef.get()
      const promises = querySnapshot.docs.map(async (itemDoc) => {
        const itemData = itemDoc.data()
        uniqueCategories.add(itemData.category)

        const combinedData = {
          id: itemDoc.id,
          title: itemData.title,
          category: itemData.category,
          isCompleted: itemData.isCompleted,
        }

        items.push(combinedData)
      })

      // eslint-disable-next-line no-undef
      await Promise.all(promises)
      setExpenses(items)
      setLoading(false)
      setFilterCategories(Array.from(uniqueCategories))
    } catch (error) {
      // eslint-disable-next-line
      console.error('Error fetching data: ', error)
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getItems()
    }

    fetchData()
  }, [])

  const addShoppingHandler = (expense) => {
    setExpenses(
      (prevExpenses) => {
        return [expense, ...prevExpenses]
      },
      [expenses]
    )

    // eslint-disable-next-line no-undef
    const tempSet = new Set()
    tempSet.add(expense.category)

    expenses.map((e) => {
      tempSet.add(e.category)
    })

    setFilterCategories(Array.from(tempSet))
    setIsExpenseAdded(true)
  }

  const filterItems = (currentCategory) => {
    setFilteredCategory(currentCategory)
  }

  const deleteShoppingHandler = async (id) => {
    const itemRef = itemsCollectionRef.doc(id)
    await itemRef.delete()

    const shoppingList = expenses.filter((item) => {
      return item.id !== id
    })

    if (shoppingList.length === 0) {
      setIsExpenseAdded(false)
    }

    setExpenses(shoppingList)

    if (shoppingList.length > 0) {
      // eslint-disable-next-line no-undef
      let tempCategory = new Set()

      shoppingList.map((item) => {
        tempCategory.add(item.category)
      })

      setFilterCategories(Array.from(tempCategory))
    }
  }

  const completeShoppingHandler = async (id) => {
    const newExpenseList = [...expenses]
    const itemRef = itemsCollectionRef.doc(id)
    const itemDoc = await itemRef.get()
    const currentIsCompleted = itemDoc.data().isCompleted

    await itemRef.update({ isCompleted: !currentIsCompleted })

    newExpenseList.map((item) => {
      if (item.id === id) {
        item['isCompleted'] = !item['isCompleted']

        return item
      }

      return item
    })

    setExpenses(newExpenseList)
  }

  const editShoppingHandler = (id) => {
    setIsEditing(!isEditing)
    setEditItemId(id)
  }

  const updateItem = async (itemId, newTitle, newCategory) => {
    try {
      const itemRef = itemsCollectionRef.doc(itemId)

      await itemRef.update({
        title: newTitle,
        category: newCategory,
      })
    } catch (error) {
      // eslint-disable-next-line
      console.error('Error updating title and category: ', error)

      throw error
    }
  }

  const onCompleteEdit = async (editedItem) => {
    if (editedItem['title'] === '' || editedItem['category'] === '') {
      setIsEditing(false)
      setEditItemId('')
      return
    }

    const newExpenseList = [...expenses]
    await updateItem(editItemId, editedItem['title'], editedItem['category'])

    newExpenseList.map((item) => {
      if (item.id === editItemId) {
        item['title'] = editedItem['title']
        item['category'] = editedItem['category']
        return item
      }

      return item
    })

    // eslint-disable-next-line no-undef
    const tempSet = new Set()

    newExpenseList.map((c) => {
      tempSet.add(c.category)
    })

    setFilterCategories(Array.from(tempSet))
    setExpenses(newExpenseList)
    setIsEditing(false)
    setEditItemId('')
  }

  const onCancelEdit = () => {
    setIsEditing(false)
    setEditItemId('')
  }

  return (
    <>
      <Background />

      <AppRoute>
        <AppContainer>
          <NewShoppingItem
            isExpenseAdded={isExpenseAdded}
            onAddShopping={addShoppingHandler}
            onFilterValueChange={filterItems}
            uniqueCategories={filterCategories}
          />

          {
            isEditing ? (
              <EditShoppingForm
                id={editItemId}
                onCancelEdit={onCancelEdit}
                onCompleteEdit={onCompleteEdit}
              />
            ) : (
              ''
            )
          }

          <ShoppingBoard
            currentCategory={filteredCategory}
            isLoading={loading}
            items={expenses}
            onCompleteShopping={completeShoppingHandler}
            onDeleteShopping={deleteShoppingHandler}
            onEditHandler={editShoppingHandler}
          />

          <ShoppingCounter
            items={
              filteredCategory === 'All'
                ? expenses
                : expenses.filter((item) => item.category === filteredCategory)
            }
          />
        </AppContainer>
      </AppRoute>
    </>
  )
}

export default App
