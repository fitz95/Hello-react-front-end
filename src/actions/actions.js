import axios from 'axios';

export const fetchRandomGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/greetings/random');
      const randomGreeting = response.data;
      console.log(randomGreeting);
      dispatch({ type: 'FETCH_RANDOM_GREETING_SUCCESS', payload: randomGreeting });
    } catch (error) {
      dispatch({ type: 'FETCH_RANDOM_GREETING_FAILURE', payload: error.message });
    }
  };
};

export const fetchGreetingRequest = () => {
    return {
      type: 'FETCH_GREETING_REQUEST',
    };
  };
  
  export const fetchGreetingSuccess = (greeting) => {
    return {
      type: 'FETCH_GREETING_SUCCESS',
      payload: greeting,
    };
  };
  
  export const fetchGreetingFailure = (error) => {
    return {
      type: 'FETCH_GREETING_FAILURE',
      payload: error,
    };
  };