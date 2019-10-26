import React from 'react';

const Button = props => {
  const { disabled, title, subtitle, updateInput, value } = props;

  const handleClick = () => {
    disabled || updateInput(value);
  };

  return (
    <div onClick={handleClick}>
      <div>{title}</div>
      <div>{subtitle}</div>
    </div>
  );
};

export default Button;
