import axios from 'axios'

const GET_DATA = 'GET_DATA'
const SET_CURRENCY = 'SET_CURRENCY'

const initialState = {
  listOfData: [],
  rates: {
    USD: 1
  },
  currency: 'USD'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        listOfData: action.data
      }
    }
    case SET_CURRENCY: {
      return {
        ...state,
        currency: action.data,
        rates: action.rates
      }
    }
    default:
      return state
  }
}

export function getData() {
  return (dispatch) => {
    axios('/api/v1/data').then(({ data }) => {
      dispatch({ type: GET_DATA, data })
    })
  }
}

export function setCurrency(currency) {
  return (dispatch, getState) => {
    const stateCurrency = getState()
    console.log(stateCurrency)
    axios('https://api.exchangeratesapi.io/latest?base=USD')
    .then(({ data }) => {
      dispatch({
        type: SET_CURRENCY,
        data: currency.toUpperCase(),
        rates: data.rates
      })
    })
  }
}
