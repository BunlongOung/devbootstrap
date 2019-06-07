const initialState = {
  data:[],
  success: false,
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_MUSIC_REQUEST':
      return { ...state, loading: true }

    case 'FETCH_MUSIC_SUCCESS':
      return { ...state, loading: false, success: true, error: false, data: action.data }

    case 'FETCH_MUSIC_FAIL':
      return { ...state, loading: false, error: true, success: false }

    default:
      return state
  }
}
