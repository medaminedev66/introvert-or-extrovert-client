import React, { useState } from 'react';

function AddQuestion() {
  const [question, setQuestion] = useState('');
  const getQuestion = (e) => {
    setQuestion(e.target.value);
  };

  console.log(question);

  const handleSubmit = async () => {
    const response =  await fetch('http://localhost:3000/api/v1/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: {
          text: question,
        },
      }),
    })
    if (!response.ok) {
      throw new Error(`API error! status: ${response.status}`);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>The question:</label>
        <input type="text" onChange={getQuestion} />
      </div>
      <button type="submit">Add question</button>
    </form>
  );
}

export default AddQuestion;
