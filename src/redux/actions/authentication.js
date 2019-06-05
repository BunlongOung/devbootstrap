import axios from 'axios'

export const login = credentail => {
  return dispatch => {
    const endpoint = 'http://demo.oscarhq-test.com/api/v1/auth/sign_in'

    axios.post(endpoint, credentail)
    .then(response => {
      // this.props.navigation.navigate('Home')
      alert('success')
    })
    .catch(error => {
      alert("Invalid credentail");
    })
  }
}