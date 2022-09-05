import React, { useDebugValue } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeAnswer } from '../redux/answers/answers';

const Answer = (props) => {
  const dispatch = useDispatch();
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
      <FontAwesomeIcon
        className="fa-trash"
        icon={faTrashCan}
        size="xs"
        onClick={() =>
          dispatch(removeAnswer(props.answer.id, props.question.id))
        }
      />
    </div>
  );
};

export default Answer;
