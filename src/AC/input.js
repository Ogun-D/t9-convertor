import { UPDATE_INPUT } from '../const/redux';

export const updateInput = value => {
  return {
    type: UPDATE_INPUT,
    payload: {
      value
    }
  };
};
