import axios from 'axios'

const GET_DATA = 'GET_DATA'
const SET_CURRENCY = 'SET_CURRENCY'
const SORT_DATA_BY = 'SORT_DATA_BY'

const initialState = {
  listOfData: [],
  rates: {
    USD: 1
  },
  currency: 'USD',
  sortType: ''
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

    case SORT_DATA_BY: {
      const sortedData = [...state.listOfData].sort((a, b) => {
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
          listOfData: sortedData.reverse()
        }
      }
      return {
        ...state,
        listOfData: sortedData
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
  return (dispatch) => {
    axios('https://api.exchangeratesapi.io/latest?base=USD').then(({ data }) => {
      dispatch({
        type: SET_CURRENCY,
        data: currency.toUpperCase(),
        rates: data.rates
      })
    })
  }
}

export function sortBy(name, sortType) {
  return {
    type: SORT_DATA_BY,
    sortType,
    name
  }
}
