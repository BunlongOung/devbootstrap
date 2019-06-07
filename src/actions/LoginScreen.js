import axios from 'axios'

const loginRequest = () => ({
  type: 'LOGIN_REQUEST'
})

const loginSuccess = data => ({
  type: 'LOGIN_SUCCESS',
  data: data
})

const loginFail = () => ({
  type: 'LOGIN_FAIL'
})

export const login = credentail => {
  return dispatch => {
    dispatch(loginRequest())
    const endpoint = 'http://demo.oscarhq-test.com/api/v1/auth/sign_in'

    axios.post(endpoint, credentail)
    .then(response => {
      alert('success')
      dispatch(loginSuccess(response.data.data))
    })
    .catch(error => {
      alert("Invalid credentail")
      dispatch(loginFail())
    })
  }
}