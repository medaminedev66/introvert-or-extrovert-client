import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AddAnswer from '../components/AddAnswer';
import Questions from '../components/Questions';
import { fetchQuestions } from '../redux/questions/questions';


const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const [opened, setOpened] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch('http://localhost:3000/api/v1/questions')
    //   .then((respond) => respond.json())
    //   .then((data) => setQuestions(() => data));
    dispatch(fetchQuestions())
  }, [dispatch]);

  return (
    <div className="flx-clm home">
      <h1>Introvert/Extrovert test</h1>
      <Questions
        questions={questions}
        handleState={setQuestions}
        openModal={(id) => {
          setOpened(true);
          setCurrentId(() => id);
        }}
      />
      <AddAnswer
        status={opened}
        question_id={currentId}
        setOpened={setOpened}
        questions={questions}
        handleState={setQuestions}
      />
    </div>
  );
};

export default HomePage;
