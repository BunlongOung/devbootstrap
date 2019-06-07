const initailState = {
  data: [],
  loading: false,
  success: false,
  error: false
}

export default (state = initailState, action) => {
  switch(action.type) {
    case 'BREWERY_REQUEST':
      return { ...state, loading: true }
    case 'BREWERY_SUCCESS':
      return { ...state, loading: false, success: true, data: action.data }
    case 'BREWERY_FAIL': 
      return { ...state, loading: false }

    default:
      return state
  }
}