import React from 'react';
import { connect } from 'react-redux';
import { updateInput } from '../AC/input';
import Button from './Button';
import { phoneButtons } from '../const/phoneButtons';

const App = props => {
  const renderButtons = () => {
    return phoneButtons.map(button => (
      <Button
        key={button.value}
        disabled={button.disabled}
        title={button.title}
        subtitle={button.subtitle}
        updateInput={props.updateInput}
        value={button.value}
      />
    ));
  };

  return (
    <div>
      <form>
        <input type="text" value={props.input} />
        <input type="submit" value="Find words!" />
      </form>
      <div>Output</div>
      <div>{renderButtons()}</div>
    </div>
  );
};

export default connect(
  ({ input }) => ({ input }),
  { updateInput }
)(App);
