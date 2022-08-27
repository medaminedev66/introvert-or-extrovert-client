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
    if (index === props.questions.length - 1) {
      return;
    } else {
      setIndex((index) => index + 1);
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
  
  console.log(answers)
  const analyzeResult = (correctAnswers, wrongAnswers) => {
    let result = 0
    if(correctAnswers === wrongAnswers){
      result = 0
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

  return (
    <div className="card">
      {props.questions.map((question, idx) => {
        return (
          <div
            key={question.id}
            className={index === idx ? 'active' : 'inactive'}
          >
            <Question text={question.question} />
            {question.answers.map((answer) => (
              <Answer
                key={answer.id}
                answer={answer}
                question={question}
                getAnswer={handleAnswer}
              />
            ))}
          </div>
        );
      })}
      <Iterator
        next={next}
        prev={prev}
        index={index}
        length={props.questions.length - 1}
      />
      <button
        className={index === props.questions.length - 1 ? 'active' : 'inactive'}
        onClick={getResult}
      >
        Check
      </button>
    </div>
  );
}

export default Questions;
