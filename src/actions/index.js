import people from '../apis/people';
import { fetchImage } from './unsplashActions' 
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_PEOPLE,
  FETCH_PERSON,
  FETCH_SPECIES,
  FETCH_FILM,
  FETCH_STARSHIP,
  SEARCH_PEOPLE,
  SEARCH
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchPeople = () => {
  return (dispatch) => {
    return people.get('people').then(async response => {
        console.log("response fetchPeople", response);
        if(response.data && response.data.results)
        {
          
            const mappedPeople = response.data.results.map(async (obj, index)=>{
              const imageUrl = await fetchImage(obj.name, index);
              console.log("imageUrl", imageUrl);
              obj.image = imageUrl;
            });
            dispatch({ type: FETCH_PEOPLE, payload: mappedPeople });
            console.log("mappedPeople", mappedPeople)
         return mappedPeople;
        }
    }
    ).catch(err=>console.log(err.message))
  }
};

//export const fetchPeople = () => async dispatch => {
//  const response = await people.get('people');
//  dispatch({ type: FETCH_PEOPLE, payload: response.data.results });
//};

export const searchPeople = (term) => async dispatch => {
  dispatch({type: SEARCH_PEOPLE, payload: term })
};

export const fetchPerson = id => async dispatch => {
  const response = await people.get(`people/${id}`);
  dispatch({ type: FETCH_PERSON, payload: response.data });
};

export const fetchSpecies = (userUrl, speciesUrls) => async dispatch => {
  const entityIds = speciesUrls.map(url => getEntityId(url));
  const speciesPromises = entityIds.map(entityId => people.get(`species/${entityId}`));
  Promise.all(speciesPromises).then(response => {
    dispatch({ type: FETCH_SPECIES, payload: { personUrl: userUrl, speciesWithDetails: response.map(({ data }) => data) } });
  });
};

export const fetchFilms = (userUrl, filmUrls) => async dispatch => {
  const entityIds = filmUrls.map(url => getEntityId(url));
  const filmPromises = entityIds.map(entityId => people.get(`films/${entityId}`));
  Promise.all(filmPromises).then(response => {
    dispatch({ type: FETCH_FILM, payload: { personUrl: userUrl, filmsWithDetails: response.map(({ data }) => data) } });
  });
};

export const fetchStarships = (userUrl, starshipUrls) => async dispatch => {
  const entityIds = starshipUrls.map(url => getEntityId(url));
  const starshipPromises = entityIds.map(entityId => people.get(`starships/${entityId}`));
  Promise.all(starshipPromises).then(response => {
    dispatch({ type: FETCH_STARSHIP, payload: { personUrl: userUrl, starshipsWithDetails: response.map(({ data }) => data) } });
  });
};

export const fetchFilm = id => async dispatch => {
  const entityId = getEntityId(id);
  const response = await people.get(`films/${entityId}`);
  dispatch({ type: FETCH_FILM, payload: { personUrl: id, filmDetails: response.data } });
};

export const fetchStarship = id => async dispatch => {
  const response = await people.get(`starships/${id}`);
  dispatch({ type: FETCH_STARSHIP, payload: response.data });
};

const getEntityId = url =>  url.split('/').filter(segment => segment).pop();

