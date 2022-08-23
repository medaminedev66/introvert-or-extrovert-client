import React, { useState } from 'react';
import Answer from './Answer';
import Question from './Question';
import Iterator from './Iterator';

function Questions() {
  const [index, setIndex] = useState(0);
  const questions = [
    {
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
          corret: true,
        },
        {
          id: 7,
          text: 'Hello this is an answer',
          corret: true,
        },
      ],
    },
    {
      question: 'Second question',
      answers: [
        {
          id: 6,
          text: 'First answer',
          corret: true,
        },
      ],
    },
    {
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
    if (index == questions.length - 1) {
      return;
    } else {
      setIndex((index) => index + 1);
    }
  };

  const prev = () => {
    setIndex((index) => index - 1);
  };

  return (
    <div className="card">
      {questions.map((question, idx) => {
        return (
          <div className={index == idx ? 'active' : 'inactive'}>
            <Question text={question.question} />;
            {question.answers.map((answer) => (
              <Answer text={answer.text} />
            ))}
          </div>
        );
      })}
      <Iterator next={next} prev={prev} />
    </div>
  );
}

export default Questions;
