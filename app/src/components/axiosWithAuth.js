import axios from 'axios';

// assuming localStorage is used to hold our token
export default (token = localStorage.getItem('token')) => axios.create({
  baseURL: 'https://spotify-ss-backend.herokuapp.com/api/',
  headers: { 
    Authorization: token,
    'Content-Type': 'application/json'
  }
});
