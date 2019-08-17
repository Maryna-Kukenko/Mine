export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_ELEMENT_TO_STORE': {
      return [
        ...state,
        action.payload
      ]
    }
    default: {
      return state
    }
  }
}