import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Answer from './Answer';
import Question from './Question';
import Iterator from './Iterator';


function Questions() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      question:
        'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
      answers: [
        {
          id: 1,
          text: 'Don’t dare to interrupt them',
          corret: false,
        },
        {
          id: 2,
          text: 'Think it’s more important to give them some of your time; work can wait',
          corret: true,
        },
        {
          id: 5,
          text: 'Hello this is an answer',
          corret: false,
        },
        {
          id: 7,
          text: 'Hello this is an answer',
          corret: false,
        },
      ],
    },
    {
      id: 2,
      question: 'Second question',
      answers: [
        {
          id: 6,
          text: 'First answer',
          corret: false,
        },
      ],
    },
    {
      id: 3,
      question: 'Thirs question',
      answers: [
        {
          id: 9,
          text: 'First Answer',
          corret: true,
        },
      ],
    },
    {
      id: 4,
      question: 'Forth question',
      answers: [
        {
          id: 3,
          text: 'Don’t dare to interrupt them',
          corret: false,
        },
        {
          id: 4,
          text: 'Think it’s more important to give them some of your time; work can wait',
          corret: true,
        },
      ],
    },
  ];

  const next = () => {
    if (index === questions.length - 1) {
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

  const analyzeResults = (correctAnswers, wrongAnswers) => {
    let result = 0
    if(correctAnswers === wrongAnswers){
      result = 0
    } else if (correctAnswers > wrongAnswers) {
      result = 1;
    } else {
      result = -1;
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

    analyzeResults(countCorrectAnswers, countWrongAnswers);
  };

  return (
    <div className="card">
      {questions.map((question, idx) => {
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
        length={questions.length - 1}
      />
      <button
        className={index === questions.length - 1 ? 'active' : 'inactive'}
        onClick={getResult}
      >
        Check
      </button>
    </div>
  );
}

export default Questions;
