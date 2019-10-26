import { UPDATE_INPUT } from '../const/redux';

export default (input = '', action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_INPUT: {
      return input + payload.value;
    }

    default: {
      return input;
    }
  }
};
