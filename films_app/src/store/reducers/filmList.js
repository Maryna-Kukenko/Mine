export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_ELEMENT_TO_STORE': {
      console.log( 'ADD ELEM');
      return [
        action.payload,
        ...state
      ]
    }
    default: {
      return [...state]
    }
  }
}
