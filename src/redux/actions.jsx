// actions.js
import axios from 'axios'; // You might use any HTTP library

export const increment = () => ({
    type: "INCREMENT",
});

export const decrement = () => ({
    type: "DECREMENT",
});

export const updateaa = (payload) => ({
    type: "UPDATEAA",
    payload
});



export const fetchData = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'FETCH_DATA_START' });

    // Perform an asynchronous operation (e.g., an API request)
    axios.get('https://api.example.com/data')
      .then((response) => {
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_DATA_FAILURE', error: error.message });
      });
  };
};
