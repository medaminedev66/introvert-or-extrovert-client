import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addQuestion } from '../../redux/questions/questions';
import '../../assets/QuestionForm.css';
import Button from '../../components/Button';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getQuestion = (event) => {
    setQuestion(event.target.value);
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
      <Button type="submit" text="Add question" color="strong-blue"/>
    </form>
  );
}

export default QuestionForm;
