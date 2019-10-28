import {
  CONVERT_INPUT,
  CONVERT_INPUT_FAILURE,
  CONVERT_INPUT_SUCCESS,
  CONVERT_RESET
} from '../const/redux';

const defaultConversion = 'Please enter a number and press convert';

export default (conversion = defaultConversion, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONVERT_INPUT: {
      return 'Loading...';
    }

    case CONVERT_INPUT_FAILURE: {
      return 'Conversion failed, there was a problem connecting to the server.';
    }

    case CONVERT_INPUT_SUCCESS: {
      return payload.words;
    }

    case CONVERT_RESET: {
      return defaultConversion;
    }

    default: {
      return conversion;
    }
  }
};
