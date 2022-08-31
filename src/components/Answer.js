import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Answer = (props) => {
  return (
    <div className="flx-row answer">
      <input
        type="radio"
        name={props.question.id}
        value={props.answer.correct}
        onChange={(e) => {
          props.getAnswer(e, props.question.id);
        }}
      />
      <label>{props.answer.text}</label>
      <FontAwesomeIcon className="fa-pen" icon={faPenToSquare} size="xs" />
      <FontAwesomeIcon className="fa-trash" icon={faTrashCan} size="xs" />
    </div>
  );
};

export default Answer;
