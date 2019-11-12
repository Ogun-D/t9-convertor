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
    <div className="container container-app">
      <input className="input" type="text" value={input} />
      <div className="container container-buttons">
        <button className="control-button" onClick={handleClearInput}>
          Clear
        </button>
        <button className="control-button" onClick={handleConvertInput}>
          Convert
        </button>
      </div>
      <div className="container container-phone">{renderButtons()}</div>
      <div className="output">{conversion}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    conversion: state.conversion,
    input: state.input
  };
};

const mapDispatchToProps = {
  convertInput,
  clearInput,
  updateInput,
  resetConversion
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
