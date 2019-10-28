import React from 'react';

const Button = props => {
  const { disabled, title, subtitle, updateInput, value } = props;

  const handleClick = () => {
    disabled || updateInput(value);
  };

  return (
    <div className="dial-button" onClick={handleClick}>
      <div className="dial-button-title">{title}</div>
      <div className="dial-button-subtitle">{subtitle}</div>
    </div>
  );
};

export default Button;
