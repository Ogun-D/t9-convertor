import { CLEAR_INPUT, UPDATE_INPUT } from '../const/redux';

export const clearInput = () => {
  return {
    type: CLEAR_INPUT
  };
};

export const updateInput = value => {
  return {
    type: UPDATE_INPUT,
    payload: {
      value
    }
  };
};
