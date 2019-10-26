import React from 'react';

const Button = props => {
  const { title, subtitle } = props;

  return (
    <div>
      <div>{title}</div>
      <div>{subtitle}</div>
    </div>
  );
};

export default Button;
