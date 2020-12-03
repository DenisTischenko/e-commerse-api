import axios from 'axios'

const ADD_TO_BASKET = 'ADD_TO_BASKET'
const UPDATE_COUNT = 'UPDATE_COUNT'
const SORT_DATA_BY = 'SORT_DATA_BY'

const initialState = {
  basket: [],
  totalPrice: 0,
  totalAmount: 0
}

const sumOfItems = (basket) => {
  if (typeof basket !== 'undefined') {
    return basket.reduce((acc, rec) => acc + rec.count, 0)
  }
  return 0
}

const globalPriceCount = (basket) => {
  const totalAmount = basket.reduce((acc, rec) => acc + rec.count, 0)
  const totalPrice = basket.reduce((acc, rec) => acc + rec.price * rec.count, 0)
  return { totalAmount, totalPrice }
}

const setCount = (products, amount) => {
  if (typeof products !== 'undefined') {
    const count = products.count + amount
    return count
  }
  return 1
}

const updateBasket = (basket, item, payload = 1) => {
  const itemInBasket = basket.find((basketItem) => basketItem.id === item.id)
  const newItem = {
    ...(typeof itemInBasket !== 'undefined' ? itemInBasket : item),
    count: setCount(itemInBasket, payload)
  }
  const upBasket = typeof itemInBasket !== 'undefined' ? [...basket] : [...basket, newItem]
  const newBasket = upBasket.map((basketItem) => (basketItem.id === item.id ? newItem : basketItem))
  return newBasket.filter((basketItem) => basketItem.count !== 0)
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      return {
        ...state,
        basket: updateBasket(state.basket, action.item),
        totalPrice: state.totalPrice + action.item.price,
        totalAmount: sumOfItems(state.basket) + 1
      }
    }
    case UPDATE_COUNT: {
      const newBasket = updateBasket(state.basket, action.item, action.payload)
      const updatedState = {
        ...state,
        basket: [...newBasket]
      }
      return {
        ...updatedState,
        ...globalPriceCount(updatedState.basket)
      }
    }
    case SORT_DATA_BY: {
      const sortedData = [...state.basket].sort((a, b) => {
        if (action.name !== 'by_name') {
          if (a.price < b.price) {
            return -1
          }
          if (a.price > b.price) {
            return 1
          }
          if (a.title < b.title) {
            return -1
          }
          if (a.title > b.title) {
            return 1
          }
        }
        return 0
      })
      if (action.sortType === false) {
        return {
          ...state,
          basket: sortedData.reverse()
        }
      }
      return {
        ...state,
        basket: sortedData
      }
    }
    default:
      return state
  }
}
export function addToBasket(item) {
  axios({
    method: 'post',
    url: '/api/v1/logs',
    data: {
      time: +new Date(),
      action: `add ${item.title} to the backet`
    }
  })
  return { type: ADD_TO_BASKET, item }
}

export function updateCount(item, change) {
  let payload = 1
  if (change === '-') {
    payload = -1
    axios({
      method: 'post',
      url: '/api/v1/logs',
      data: {
        time: +new Date(),
        action: `remove ${item.title} from the backet`
      }
    })
  }
  return {
    type: UPDATE_COUNT,
    item,
    payload
  }
}

export function sortBy(name, sortType) {
  axios({
    method: 'post',
    url: '/api/v1/logs',
    data: {
      time: +new Date(),
      action: `sort by ${name}`
    }
  })
  return {
    type: SORT_DATA_BY,
    sortType,
    name
  }
}
