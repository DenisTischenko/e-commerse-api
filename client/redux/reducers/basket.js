const ADD_TO_BASKET = 'ADD_TO_BASKET'

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
    default:
      return state
  }
}

export function addToBasket(item) {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_BASKET,
      item
    })
  }
}
