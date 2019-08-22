export function addComment(data) {
  return dispatch => dispatch({ type: 'ADD_COMMENT_TO_STORE', payload: data })
}
