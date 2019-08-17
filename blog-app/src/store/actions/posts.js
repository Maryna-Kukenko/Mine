export function addElement(data) {
  return dispatch => dispatch({ type: "ADD_ELEMENT_TO_STORE", payload: data });
}
