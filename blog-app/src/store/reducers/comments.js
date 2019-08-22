export default function(state = [], action) {
  if (action.type === 'ADD_COMMENT_TO_STORE') {
    return [...state, action.payload]
  }
  return state
}
