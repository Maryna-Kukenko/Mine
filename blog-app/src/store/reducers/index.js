import { combineReducers } from 'redux'
import Posts from './posts'
import Comments from './comments'

export default combineReducers({
  list: Posts,
  comments: Comments
})
