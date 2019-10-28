import React from 'react';
import { connect } from 'react-redux';
import { clearInput, updateInput } from '../AC/input';
import { convertInput, resetConversion } from '../AC/conversion';
import Button from './Button';
import { PHONE_BUTTONS } from '../const/phoneButtons';

const App = props => {
  const {
    clearInput,
    convertInput,
    conversion,
    input,
    updateInput,
    resetConversion
  } = props;

  const handleClearInput = e => {
    e.preventDefault();
    clearInput();
    resetConversion();
  };

  const handleConvertInput = e => {
    e.preventDefault();
    convertInput(input);
  };

  const renderButtons = () => {
    return PHONE_BUTTONS.map(button => (
      <Button
        key={button.value}
        disabled={button.disabled}
        title={button.title}
        subtitle={button.subtitle}
        updateInput={updateInput}
        value={button.value}
      />
    ));
  };

  return (
    <div>
      <form>
        <input type="text" value={input} />
        <button onClick={handleClearInput}>Clear</button>
        <button onClick={handleConvertInput}>Convert</button>
      </form>
      <div>{conversion}</div>
      <div>{renderButtons()}</div>
    </div>
  );
};

export default connect(
  ({ input, conversion }) => ({
    conversion,
    input
  }),
  { convertInput, clearInput, updateInput, resetConversion }
)(App);
