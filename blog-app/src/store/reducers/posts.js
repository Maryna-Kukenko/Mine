export default function(state = [], action) {
  if (action.type === 'ADD_ELEMENT_TO_STORE') {
    return [...state, action.payload]
  }
  return state
}
