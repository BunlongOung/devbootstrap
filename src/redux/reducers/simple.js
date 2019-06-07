const initailState = {
  //data={},
  loading: false,
  success: false,
  error: false
}

export default (state = initailState, action) => {
  switch(action.type) {
    case 'LOADING':
      return { ...state, loading: true }

    default:
      return state
  }
}