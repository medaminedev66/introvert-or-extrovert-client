import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Answer from './Answer';
import Question from './Question';
import Iterator from './Iterator';
import { useDispatch, useSelector } from 'react-redux';
import { removeQuestion } from '../redux/questions/questions';

function Questions(props) {
  const questions = useSelector((state) => state.questionsReducer);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const next = () => {
    if (questions) {
      if (index === questions.length - 1) {
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

  return (
    <div className="card">
      <button type="button" className="add-btn" onClick={handleClick}>
        Add question
      </button>
      {questions.map((question, idx) => {
        return (
          <div
            key={question.id}
            className={index === idx ? 'active' : 'inactive'}
          >
            <div className="flx-row">
              <button
                type="button"
                className="remove-btn"
                onClick={() => dispatch(removeQuestion(question.id))}
              >
                Remove the question
              </button>
              <p
                className="add-answer-btn"
                onClick={() => props.openModal(question.id)}
              >
                Add a potential answer for this question
              </p>
            </div>
            <Question
              text={question.question}
              id={question.id}
            />
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
        length={questions.length - 1}
      />
    </div>
  );
}

export default Questions;
