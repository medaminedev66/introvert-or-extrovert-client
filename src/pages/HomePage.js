import React, { useEffect, useState } from 'react';
import Questions from '../components/Questions';

const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/questions')
      .then((respond) => respond.json())
      .then((data) => setQuestions(() => data));
  }, [setQuestions]);

  return (
    <div className="flx-clm home">
      <h1>Introvert/Extrovert test</h1>
      <Questions questions={questions} handleState={setQuestions} />
    </div>
  );
};

export default HomePage;
