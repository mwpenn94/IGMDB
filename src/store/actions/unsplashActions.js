import unsplash from '../../apis/unsplash';

import {
    FETCH_PEOPLE
} from './types';

// export const fetchImage = (array) => async dispatch => {
//     const imagePromises = array.map(person => unsplash.get('search/photos', {
//         params: { query: person.name }
//     }));
//     const imageResponses = await Promise.all(imagePromises);
//     const images = imageResponses.map(imageResponse => imageResponse.data.results.length > 0 ? imageResponse.data.results[0].urls.small : null);
//     const updatedArray = array.map((person, index) => ({ ...person, image: images[index] }));
//     dispatch({ type: FETCH_PEOPLE_IMAGE, payload: updatedArray });
// };
export const fetchImage = (array) => async dispatch => {
    const imagePromises = array.map(person => unsplash.get('search/photos', {
        params: { query: person.name }
    }));
    const imageResponses = await Promise.all(imagePromises);
    const images = imageResponses.map(imageResponse => imageResponse.data.results.length > 0 ? imageResponse.data.results[0].urls.small : null);
    const updatedArray = array.map((person, index) => ({ ...person, image: images[index] }));
    dispatch({ type: FETCH_PEOPLE, payload: updatedArray });
};

