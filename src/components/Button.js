import React from 'react';
import './Button.css';

const Button = (props) => {
  const { type, handleClick, color, text, status } = props;
  const style = {
    color: {
      backgroundColor: `var(--${color})`,
    },
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${status} default-btn`}
      style={style.color}
    >
      {text}
    </button>
  );
};

export default Button;
