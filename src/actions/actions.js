import axios from 'axios';

export const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/api/random_greeting');
    const randomGreeting = response.data;
    console.log(randomGreeting);
    dispatch({ type: 'FETCH_RANDOM_GREETING_SUCCESS', payload: randomGreeting });
  } catch (error) {
    dispatch({ type: 'FETCH_RANDOM_GREETING_FAILURE', payload: error.message });
  }
};

export const fetchGreetingRequest = () => ({
  type: 'FETCH_GREETING_REQUEST',
});

export const fetchGreetingSuccess = (greeting) => ({
  type: 'FETCH_GREETING_SUCCESS',
  payload: greeting,
});

export const fetchGreetingFailure = (error) => ({
  type: 'FETCH_GREETING_FAILURE',
  payload: error,
});
