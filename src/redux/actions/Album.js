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

export const musicAlbum = () => {
  return dispatch => {
    dispatch(musicRequest())
    const endpoint = 'https://rallycoding.herokuapp.com/api/music_albums'

    axios.get(endpoint)
      .then(response => {
        dispatch(musicSuccess(response.data))
      })
      .catch(error => {
        alert("Invalid credentail")
        dispatch(musicFail())
      })
  }
}