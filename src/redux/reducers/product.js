const initialState = {
  data: [],
  success: false,
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'PRODUCT_REQUEST':
      return { ...state, loading: true }

    case 'PRODUCT_SUCCESS':
      return { ...state, loading: false, success: true, error: false, data: action.data }

    case 'PRODUCT_FAIL':
      return { ...state, loading: false, error: true, success: false }

    default:
      return state
  }
}




