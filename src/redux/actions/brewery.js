import axios from 'axios'

const breweryRequest = () => ({
  type: 'BREWERY_REQUEST'
})

const brewerySuccess = data => ({
  type: 'BREWERY_SUCCESS',
  data: data
})

const breweryFail = () => ({
  type: 'BREWERY_FAIL'
})

export const breweryData = () => {
  return dispatch => {
    dispatch(breweryRequest())
    const endpoint = 'https://api.openbrewerydb.org/breweries'

    axios.get(endpoint)
    .then(response => {
      // console.log(response.data)
      dispatch(brewerySuccess(response.data)) 
    })
    .catch(error => {
      alert("Not Found Breweries")
      dispatch(breweryFail())
    })
  }
}