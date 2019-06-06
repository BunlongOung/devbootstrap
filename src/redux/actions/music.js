import axios from 'axios'

const fetchMusicRequest = () => ({
  type: 'FETCH_MUSIC_REQUEST'
})

const fetchMusicSuccess = data => ({
  type: 'FETCH_MUSIC_SUCCESS',
  data: data
})

const fetchMusicFail = () => ({
  type: 'FETCH_MUSIC_FAIL'
})

export const musicData = () => {
  return dispatch => {
    dispatch(fetchMusicRequest())
    const endpoint = 'https://rallycoding.herokuapp.com/api/music_albums'

    axios.get(endpoint)
    .then(response => {
      alert('success')
      // console.log(response)
      dispatch(fetchMusicSuccess(response.data))
    })
    .catch(error => {
      alert("Not Found")
      dispatch(fetchMusicFail())
    })
  }
}