import axios from 'axios'

const productRequest = () => ({
  type: 'PRODUCT_REQUEST'
})

const productSuccess = (data) => ({
  type: 'PRODUCT_SUCCESS',
  data
})

const productFail = () => ({
  type: 'PRODUCT_FAIL'
})

export const product = () => {
  return dispatch => {
    dispatch(productRequest())
    const endpoit= 'https://rallycoding.herokuapp.com/api/music_albums'

    axios.get(endpoit)
      .then(response => {
        // alert('show product')
        // console.log(response.data)
        dispatch(productSuccess(response.data))
      })
      .catch(error => {
        alert('cannot show product')
        dispatch(productFail())
      })
  }
}