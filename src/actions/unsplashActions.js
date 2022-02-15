import unsplash from '../apis/unsplash';

import {
  FETCH_IMAGE
} from './types';

//export const fetchImage = (term) => async dispatch => {
//  const response = await unsplash.get('search/photos', {
//      params: { query: term}
//  });
//  console.log(response.data.results)
//  dispatch({ type: FETCH_IMAGE, payload: response.data.results });
//};

export const fetchImage = (term, index) =>{
    console.log({term, index})
    return unsplash.get('search/photos', {
        params: { query: term}
    }).then(response=> {
      if(index < response.data && response.data.results.length)
        {
            console.log("fetchImage", response.data.results[index].urls.full);
            return response.data.results[index].urls.full
        }
      }
    )
    .catch(err=>console.log(err.message));
  };