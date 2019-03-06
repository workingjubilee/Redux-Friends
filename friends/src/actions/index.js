export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchFriends = () => dispatch => {
  // Standard Promise-based "start, then finish in one of two states."
  dispatch( {type: FETCHING_FRIENDS} );
  fetch('http://localhost.com:5000/friends')
    .then(result => {
      dispatch( {type: FETCH_SUCCESS, payload: result} )
    })
    .catch(error => {
      dispatch( {type: FETCH_ERROR, payload: error} )
    });
};
