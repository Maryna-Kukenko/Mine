// import {ADD_ELEMENT_TO_STORE} from '../actions/types'

export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_ELEMENT_TO_STORE': {
      console.log( 'ADD ELEM');
      return [
        ...state,
        action.payload
      ]
    }
    default: {
      console.log( 'DEFAULT');
      return [...state]
    }
  }
}