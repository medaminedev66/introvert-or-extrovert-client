import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

const Question = (props) => {
  const [update, setUpdate] = useState(false);
  const [updatedQuestion, setUpdatedQuestion] = useState(props.text);

  const handleChange = (e) => {
    setUpdatedQuestion(() => e.target.value);
  };

  console.log(updatedQuestion);
  return (
    <div className="flx-row question">
      <h2 className={!update ? 'active' : 'inactive'}>
        {props.text}
        <FontAwesomeIcon
          className="fa-pen"
          onClick={() => setUpdate(true)}
          icon={faPenToSquare}
          size="xs"
        />
      </h2>
      <div className={update ? 'flx-row active question-update' : 'inactive'}>
        <input
          className="question-input"
          type="text"
          value={updatedQuestion}
          onChange={(e) => handleChange(e)}
        />

        <FontAwesomeIcon
          className="fa-pen"
          onClick={() => {
            setUpdate(false);
            props.updateQuestion(props.id, updatedQuestion);
          }}
          icon={faCircleCheck}
          size="xs"
        />
      </div>
    </div>
  );
};

export default Question;
