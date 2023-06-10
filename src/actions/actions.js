import axios from 'axios';

export const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('/greetings/random');
    const randomGreeting = response.data;
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
