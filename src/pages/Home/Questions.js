import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Answer from './Answer';
import Question from './Question';
import Iterator from '../../components/Iterator';
import { useDispatch, useSelector } from 'react-redux';
import { removeQuestion } from '../../redux/questions/questions';
import Button from '../../components/Button';

function Questions(props) {
  const { data, loading, error } = useSelector(
    (state) => state.questionsReducer,
  );
  // const questions = useSelector((state) => state.questionsReducer);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const next = () => {
    if (data) {
      if (index === data.length - 1) {
        return;
      } else {
        setIndex((index) => index + 1);
      }
    } else {
      return;
    }
  };

  const prev = () => {
    if (index === 0) {
      return;
    } else {
      setIndex((index) => index - 1);
    }
  };

  const handleAnswer = (e, id) => {
    setAnswers((answers) => ({ ...answers, [id]: e.target.value }));
  };

  console.log(answers);
  const analyzeResult = (correctAnswers, wrongAnswers) => {
    let result = 0;
    if (correctAnswers === wrongAnswers) {
      result = 0;
    } else if (correctAnswers > wrongAnswers) {
      result = -1;
    } else {
      result = 1;
    }
    navigate(`/result_page/${result}`);
  };

  const getResult = () => {
    let countCorrectAnswers = 0;
    let countWrongAnswers = 0;
    Object.values(answers).forEach((val) => {
      if (val === 'true') {
        countCorrectAnswers++;
      } else {
        countWrongAnswers++;
      }
    });

    console.log(
      `Correct Answers: ${countCorrectAnswers}`,
      `Wrong Answers: ${countWrongAnswers}`,
    );

    analyzeResult(countCorrectAnswers, countWrongAnswers);
  };

  const handleClick = () => {
    navigate('add_question');
  };

  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Loading</p>;
  }

  return (
    <div className="card">
      <Button
        type="button"
        handleClick={handleClick}
        color="Strong-Cyan"
        text="Add question"
        status="add-btn"
      />
      {data.map((question, idx) => {
        return (
          <div
            key={question.id}
            className={index === idx ? 'active' : 'inactive'}
          >
            <div className="flx-row">
              <Button
                type="button"
                color="Light-Red"
                text="Remove the question"
                handleClick={() => dispatch(removeQuestion(question.id))}
              />
              <p
                className="add-answer-btn"
                onClick={() => props.openModal(question.id)}
              >
                Add a potential answer for this question
              </p>
            </div>
            <Question text={question.question} id={question.id} />
            <div className="flx-clm answers">
              {question.answers.map((answer) => (
                <Answer
                  key={answer.id}
                  answer={answer}
                  question={question}
                  getAnswer={handleAnswer}
                />
              ))}
            </div>
          </div>
        );
      })}
      <Iterator
        next={next}
        prev={prev}
        check={getResult}
        index={index}
        length={data.length - 1}
      />
    </div>
  );
}

export default Questions;