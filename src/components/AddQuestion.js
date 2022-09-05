import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addQuestion } from '../redux/questions/questions';
import './addQuestion.css';

function AddQuestion() {
  const [question, setQuestion] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addQuestion(question));
    navigate('/');
  };

  return (
    <form className="flx-clm add-question-form" onSubmit={handleSubmit}>
      <div className="flx-row">
        <label>The question:</label>
        <input type="text" onChange={getQuestion} />
      </div>
      <button type="submit">Add question</button>
    </form>
  );
}

export default AddQuestion;
