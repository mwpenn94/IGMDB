import people from '../../apis/people';
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_PEOPLE,
  FETCH_SPECIES,
  FETCH_FILM,
  FETCH_STARSHIP,
  SEARCH_PEOPLE,
  UPDATE_PEOPLE,
} from './types';
import { fetchImage } from './unsplashActions';

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

export const fetchPeople = () => async dispatch => {
  const response = await people.get('people');
  const usersToSet = response.data.results.map(user => ({
    ...user,
    id: user.url.split('/').filter(seg => seg).pop()
  })).sort((a, b) => (a.name > b.name ? 1 : -1));
  dispatch(fetchImage(usersToSet));
  dispatch({ type: FETCH_PEOPLE, payload: usersToSet });
};

export const updatePeople = (newArr) => dispatch => {
  console.log("updatePeople", newArr);
  dispatch({type: UPDATE_PEOPLE, payload: newArr});
}

export const searchPeople = (term) => async dispatch => {
  dispatch({ type: SEARCH_PEOPLE, payload: term })
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

const getEntityId = url => url.split('/').filter(segment => segment).pop();

