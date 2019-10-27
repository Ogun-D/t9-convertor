import { UPDATE_INPUT, CLEAR_INPUT } from '../const/redux';

const inputDefault = '';

export default (input = inputDefault, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_INPUT: {
      return input + payload.value;
    }

    case CLEAR_INPUT: {
      return inputDefault;
    }

    default: {
      return input;
    }
  }
};
