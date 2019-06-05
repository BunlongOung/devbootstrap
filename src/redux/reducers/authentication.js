const initialState = {
  data: null,
  success: false,
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  if (action.type === 'LOGIN_REQUEST')
    return { ...state, loading: true }

  if (action.type === 'LOGIN_SUCCESS')
    return { ...state, loading: false, success: true }

  if (action.type === 'LOGIN_FAIL')
    return { ...state, loading: false, error: true }

  return state
}


// export default (state = initialState, action) => {
//   switch (action.type) {
//     case AGENCY_TYPES.AGENCIES_REQUESTING:
//       return state.set('error', '').set('loading', true)

//     case AGENCY_TYPES.AGENCIES_SUCCESS:
//       return state.set('data', action.data).set('loading', false)

//     case AGENCY_TYPES.AGENCIES_FAILED:
//       return state.set('error', action.error).set('loading', false)

//     default:
//       return state
//   }
// }
