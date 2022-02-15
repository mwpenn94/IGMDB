import _ from 'lodash';
import {
  FETCH_PEOPLE,
  FETCH_PERSON,
  FETCH_SPECIES,
  FETCH_FILM,
  FETCH_STARSHIP,
  SEARCH_PEOPLE
} from '../actions/types';

const initialstate = { people: [] }

export default (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      console.log("StreamReducer Line14", state.payload)
      return { ...state, people: action.payload, filteredPeople: action.payload };
    case FETCH_PERSON:
      return { ...state, [action.payload.id]: action.payload };  
    case FETCH_SPECIES:
      const peopleToSet1 = state.people.map(person => {
        if (person.url === action.payload.personUrl) {
          return { ...person, speciesWithDetails: action.payload.speciesWithDetails };
        } else {
          return { ...person };
        }
      });
      return { ...state, people: peopleToSet1 };
    case FETCH_FILM:
      const peopleToSet2 = state.people.map(person => {
        if (person.url === action.payload.personUrl) {
          return { ...person, filmsWithDetails: action.payload.filmsWithDetails };
        } else {
          return { ...person };
        }
      });
      return { ...state, people: peopleToSet2 };  
    case FETCH_STARSHIP:
      const peopleToSet3 = state.people.map(person => {
        if (person.url === action.payload.personUrl) {
          return { ...person, starshipsWithDetails: action.payload.starshipsWithDetails };
        } else {
          return { ...person };
        }
      });
      return { ...state, people: peopleToSet3 };
    case SEARCH_PEOPLE: 
      return { ...state, term: action.payload };      
    default:
      return state;
  }
};