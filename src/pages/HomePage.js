import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Questions from '../components/Questions';

const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/questions')
      .then((respond) => respond.json())
      .then((data) => setQuestions(() => data));
  }, [setQuestions]);

  const handleClick = () => {
    navigate('add_question');
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Add question
      </button>
      <Questions questions={questions} />
    </>
  );
};

export default HomePage;
