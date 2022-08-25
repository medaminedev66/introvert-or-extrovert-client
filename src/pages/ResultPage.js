import React from 'react';
import { useParams } from 'react-router-dom';

const ResultPage = () => {
  let params = useParams();
  let result = ""
  if (params.result === "0") {
    result = '50% Extrovert 50% Introvert';
  } else if (params.result === "1") {
    result = 'Extrovert';
  } else {
    result = 'Introvert';
  }

  return ( <h1>You are: {result}</h1> );
}

export default ResultPage;