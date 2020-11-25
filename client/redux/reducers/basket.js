const ADD_TO_BASKET = 'ADD_TO_BASKET'
const UPDATE_COUNT = 'UPDATE_COUNT'


const initialState = {
  basket: [],
  totalPrice: 0,
  count: 0
}

const setCount = (products) => {
  if (typeof products !== 'undefined') {
    const count = products.count + 1
    return count
  }
  return 1
}

const sumOfItems = (basket) => {
  if (typeof basket !== 'undefined') {
    return Object.keys(basket).reduce((acc, rec) => acc + basket[rec].count, 0)
  }
  return 0
}

const globalPriceCount = (basket) => {
  const count = Object.keys(basket).reduce((acc, rec) => acc + basket[rec].count, 0)
  const totalPrice = Object.keys(basket).reduce((acc, rec) => acc + basket[rec].price * basket[rec].count, 0)
  return { count, totalPrice }
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      return {
        ...state,
        basket: {
          ...state.basket,
          [action.item.id]: {
            ...action.item,
            count: setCount(state.basket[action.item.id])
          }
        },
        totalPrice: state.totalPrice + action.item.price,
        count: sumOfItems(state.basket) + 1

      }
    }
    case UPDATE_COUNT: {
      const newAmount = state.basket[action.id].count + action.payload
      const updatedBasket = Object.keys(state.basket).reduce((acc, rec) => {
        if (rec !== action.id) {
          return { ...acc, [rec]: state.basket[rec] }
        }
        return { ...acc }
      }, {})
      if (newAmount <= 0) {
        return {
          ...state,
          basket: updatedBasket,
          ...globalPriceCount(updatedBasket)
        }
      }

      const updatedState = {
        ...state,
        basket: {
          ...state.basket,
          [action.id]: {
            ...state.basket[action.id],
            count: newAmount
          }
        }
      }
       return {
         ...updatedState,
         ...globalPriceCount(updatedState.basket)
       }
    }
    default:
      return state
  }
}

export function addToBasket(item) {
  return { type: ADD_TO_BASKET, item }
}

export function updateCount(id, change) {
  let payload = 0
  if (change === '+') {
    payload = 1
  }
  if (change === '-') {
    payload = -1
  }
  return ({
    type: UPDATE_COUNT,
    id,
    payload
  })
}
