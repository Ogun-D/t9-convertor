import { UPDATE_INPUT } from '../const/redux';
import { CLEAR_INPUT } from '../const/redux';

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
