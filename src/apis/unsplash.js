import axios from 'axios';

export default axios.create({
  baseURL: 'https://9n7vkspz14.execute-api.us-east-1.amazonaws.com/staging',
//  baseURL: 'https://api.unsplash.com',
//  headers: {
//    Authorization:
//      'Client-ID 9ByZzJOgsSfEZ4J2k1y1CRE8MPcsnS4ehfIACHT9Xts'
//  }
});