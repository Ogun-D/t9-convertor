import axios from 'axios';

import {
  CONVERT_INPUT,
  CONVERT_INPUT_SUCCESS,
  CONVERT_INPUT_FAILURE,
  CONVERT_RESET
} from '../const/redux';

export const convertInput = value => {
  return dispatch => {
    dispatch({
      type: CONVERT_INPUT
    });

    const api = 'http://localhost:8000/convertor';
    const config = {
      params: {
        value
      }
    };

    axios
      .get(api, config)
      .then(response => {
        dispatch({
          type: CONVERT_INPUT_SUCCESS,
          payload: {
            words: response.data
          }
        });
      })
      .catch(() => {
        dispatch({
          type: CONVERT_INPUT_FAILURE
        });
      });
  };
};

export const resetConversion = () => {
  return {
    type: CONVERT_RESET
  };
};
