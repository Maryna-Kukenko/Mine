// import {ADD_ELEMENT_TO_STORE} from './types'

export const addElement = (data) => {
  // console.log(data.name + data.id)
  return {
    type: 'ADD_ELEMENT_TO_STORE',
    payload: data
  }
};
