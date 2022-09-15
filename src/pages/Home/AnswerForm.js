import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { addAnswer } from '../../redux/answers/answers';


const AddAnswer = (props) => {
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();
  const getAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addAnswer(answer, props.question_id));
    props.setOpened(false);
  };

  return (
    <div
      className={props.status ? 'answer-modal-container active' : 'inactive'}
    >
      <div className="flx-row answer-modal">
        <input type="text" onChange={(e) => getAnswer(e)} />
        <Button type="button" text="Add the answer" handleClick={handleSubmit} color="strong-blue"/>
      </div>
    </div>
  );
};

export default AddAnswer;
