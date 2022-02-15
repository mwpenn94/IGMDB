import _ from 'lodash';
import {
  FETCH_IMAGE
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_IMAGE:
      const imageToSet = state.people.map(person => {
        if (person.index === action.payload.index) {
          return { ...person, image: action.payload.index.urls.full };
        } else {
          return { ...person };
        }
      });
      return { ...state, people: imageToSet };  
    default:
      return state;
  }
};