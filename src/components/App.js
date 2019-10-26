import React from 'react';
import Button from './Button';

class App extends React.Component {
  renderButtons = () => {
    const phoneButtons = [
      [1],
      [2, 'abc'],
      [3, 'def'],
      [4, 'ghi'],
      [5, 'jkl'],
      [6, 'mno'],
      [7, 'pqrs'],
      [8, 'tuv'],
      [9, 'wxyz'],
      '*',
      0,
      '#'
    ];

    return phoneButtons.map(button => (
      <Button title={button[0]} subtitle={button[1]} />
    ));
  };

  render() {
    return <div>{this.renderButtons()}</div>;
  }
}

export default App;
