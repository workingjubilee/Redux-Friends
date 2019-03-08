import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const BEFRIENDING = 'BEFRIENDING';

const testToken = 'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

const creds = {
  loggedIn: true,
  token: testToken
};

const signin = {
  username: 'Lambda School',
  password: 'i<3Lambd4',
};

function iAmTheSenate(){
  return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${testToken}`,
        }
})
};

export const fetchFriends = () => dispatch => {
  // Standard Promise-based "start, then finish in one of two states."
  dispatch( {type: FETCHING_FRIENDS} );
  iAmTheSenate().get('http://localhost:5000/api/friends/')
    .then(result => {
      dispatch( {type: FETCH_SUCCESS, payload: result.data} )
    })
    .catch(error => {
      dispatch( {type: FETCH_ERROR, payload: error.response.data} )
    });
};

export const beFriend = () => dispatch => {
  dispatch( {type: BEFRIENDING} );
  axios.post('http://localhost:5000/api/friends/')
    .then(result => {
      dispatch({})
    }).catch(error => {
      dispatch({})
    });
};

export const logIn = () => dispatch => {
  dispatch( {type: LOGGING_IN} );
};

// (username === 'Lambda School' && password === 'i<3Lambd4')

// "config":
//{"transformRequest":{},
// "transformResponse":{},
// "timeout":0,
// "xsrfCookieName":"XSRF-TOKEN",
// "xsrfHeaderName":"X-XSRF-TOKEN",
// "maxContentLength":-1,
// "headers": {"Accept":"application/json, text/plain, */*"},
// "method":"get",
// "url":"http://localhost.com:5000"},
// "request":{}}}
