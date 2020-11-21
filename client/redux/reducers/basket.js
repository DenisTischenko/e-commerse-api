const ADD_TO_BASKET = 'ADD_TO_BASKET'

const initialState = {
  basket: [],
  totalPrice: 0,
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      return {
        ...state,
        basket: [...state.basket, action.item],
        totalPrice: state.totalPrice + action.item.price,
        count: state.basket.length + 1
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