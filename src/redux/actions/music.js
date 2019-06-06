import axios from 'axios'

const musicRequest = () => ({
  type: 'FETCH_MUSIC_REQUEST'
})

const musicSuccess = data => ({
  type: 'FETCH_MUSIC_SUCCESS',
  data: data
})

const musicFail = () => ({
  type: 'FETCH_MUSIC_FAIL'
})

export const music = () => {
  return dispatch => {
    dispatch(musicRequest())
    const endpoint = 'http://rallycoding.herokuapp.com/api/music_albums'

    axios.get(endpoint)
    .then(response => {
      //console.log(response)
      // alert('success')
      dispatch(musicSuccess(response.data))
    })
    .catch(error => {
      alert("Invalid credentail")
      dispatch(musicFail())
    })
  }
}