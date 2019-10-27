const defaultConversion = 'Please enter a number and press convert';

export default (conversion = defaultConversion, action) => {
  const { type, payload } = action;

  switch (type) {
    default: {
      return conversion;
    }
  }
};
