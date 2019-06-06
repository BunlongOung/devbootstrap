import { combineReducers } from 'redux'
import authentication from './authentication'
import music from './music'

export default combineReducers({
  auth: authentication,
  music
})
