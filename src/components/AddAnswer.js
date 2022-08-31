import React, { useState } from 'react';

const AddAnswer = (props) => {
  const [answer, setAnswer] = useState('');
  const getAnswer = (e) => {
    setAnswer(e.target.value);
  };

  console.log(props.question_id);
  const handleSubmit = async () => {
    const res = await fetch('http://localhost:3000/api/v1/answers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answer: {
          text: answer,
          question_id: props.question_id,
        },
      }),
    });
    if (res.ok) {
      props.setOpened(false);
      props.handleState(
        props.questions.map((question) => {
          if (question.id === props.question_id) {
            question.answers = [
              ...question.answers,
              {
                text: answer,
                question_id: props.question_id,
                correct: false,
              },
            ];
          }
          return question;
        }),
      );
    } else {
      throw new Error(`API error! status: ${res.status}`);
    }
  };

  return (
    <div
      className={props.status ? 'answer-modal-container active' : 'inactive'}
    >
      <div className="flx-row answer-modal">
        <input type="text" onChange={(e) => getAnswer(e)} />
        <button onClick={handleSubmit}>Add the answer</button>
      </div>
    </div>
  );
};

export default AddAnswer;
