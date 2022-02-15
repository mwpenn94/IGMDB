import axios from 'axios';

export default axios.create({   //create preconfig Axios instance
    baseURL: 'https://swapi.dev/api/'
})