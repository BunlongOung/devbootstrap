const initialState = {
  data: {},
  success: false,
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'RECIPE_REQUEST':
      return { ...state, loading: true }

    case 'RECIPE_SUCCESS':
      return { ...state, loading: false, success: true, data: action.data }

    case 'RECIPE_FAIL':
      return { ...state, loading: false, error: true, success: false }

    default:
      return state
  }
}