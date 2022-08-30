import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Answer from './Answer';
import Question from './Question';
import Iterator from './Iterator';

function Questions(props) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const next = () => {
    if (!props.question) {
      if (index === props.questions.length - 1) {
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

  const removeQuestion = (id) => {
    fetch(`http://localhost:3000/api/v1/questions/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res) {
        props.handleState(() =>
          props.questions.filter((question) => question.id !== id),
        );
        prev();
      }
    });
  };

  const handleClick = () => {
    navigate('add_question');
  };

  return (
    <div className="card">
      <button type="button" className="add-btn" onClick={handleClick}>
        Add question
      </button>
      {props.questions.map((question, idx) => {
        return (
          <div
            key={question.id}
            className={index === idx ? 'active' : 'inactive'}
          >
            <button
              type="button"
              className="remove-btn"
              onClick={() => removeQuestion(question.id)}
            >
              Remove the question
            </button>
            <a className='add-answer-btn'>Add a potential answer for this question</a>
            <Question text={question.question} />
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
        length={props.questions.length - 1}
      />
    </div>
  );
}

export default Questions;
