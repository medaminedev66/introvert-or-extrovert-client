import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeAnswer } from '../../redux/answers/answers';

const Answer = ({ answer, question, getAnswer }) => {
  const dispatch = useDispatch();
  const onRemoveAnswer = () => dispatch(removeAnswer(answer.id, question.id));
  const onChangeAnswer = (e) => getAnswer(e, question.id);
  return (
    <div className="flx-row answer">
      <input
        type="radio"
        name={question.id}
        value={answer.correct}
        onChange={onChangeAnswer}
      />
      <label>{answer.text}</label>
      <FontAwesomeIcon className="fa-pen" icon={faPenToSquare} size="xs" />
      <FontAwesomeIcon
        className="fa-trash"
        icon={faTrashCan}
        size="xs"
        onClick={onRemoveAnswer}
      />
    </div>
  );
};

export default Answer;
