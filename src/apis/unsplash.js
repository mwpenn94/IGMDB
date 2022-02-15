import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 9ByZzJOgsSfEZ4J2k1y1CRE8MPcsnS4ehfIACHT9Xts'
  }
});