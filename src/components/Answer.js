import React from 'react';

const Answer = (props) => {
  return (
    <div>
      <input
        type="radio"
        name={props.question.id}
        value={props.answer.corret}
        onChange={(e) => {
          props.getAnswer(e, props.question.id);
        }}
      />
      <label>{props.answer.text}</label>
    </div>
  );
};

export default Answer;
