import React from 'react';
import '../assets/Button.css';

const Button = ({ type, handleClick, color, text, status }) => {
  const style = {
    backgroundColor: `var(--${color})`,
  };
  
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${status} default-btn`}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
