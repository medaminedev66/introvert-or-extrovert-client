import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Question = (props) => {
  return (
    <div className="flx-row question">
      <h2>
        {props.text}{' '}
        <FontAwesomeIcon className="fa-pen" icon={faPenToSquare} size="xs" />
      </h2>
    </div>
  );
};

export default Question;
