import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

const credentials = {};

export const fetchFriends = () => dispatch => {
  // Standard Promise-based "start, then finish in one of two states."
  dispatch( {type: FETCHING_FRIENDS} );
  console.log("Also triggered.");
  axios.get('http://localhost:5000/api/friends/')
    .then(result => {
      dispatch( {type: FETCH_SUCCESS, payload: result.friends} )
    })
    .catch(error => {
      dispatch( {type: FETCH_ERROR, payload: JSON.stringify(error.response.data)} )
    });
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
