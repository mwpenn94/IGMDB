import axios from 'axios';

export default axios.create({   //create preconfig Axios instance
    baseURL: 'https://vbvt6aw43d.execute-api.us-east-1.amazonaws.com/staging'
    //    baseURL: 'https://swapi.dev/api/'
})