import { ADD_ANSWER, REMOVE_ANSWER } from '../questions/questions';
const END_POINT = 'http://localhost:3000/';
const API_ROUTE = '/api/v1/';
const UPDATE_ANSWER = 'answers/UPDATE_ANSWER';
const initialState = [];

export const addAnswer = (answer, question_id) => async (dispatch) => {
  const res = await fetch(`${END_POINT}${API_ROUTE}answers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      answer: {
        text: answer,
        question_id: question_id,
      },
    }),
  });
  if (res.ok) {
    dispatch({
      type: ADD_ANSWER,
      payload: {
        answer,
        question_id,
      },
    });
  } else {
    throw new Error(`API error! status: ${res.status}`);
  }
};

export const removeAnswer = (answer_id, question_id) => (dispatch) => {
  fetch(`${END_POINT}${API_ROUTE}answers/${answer_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res) {
      dispatch({
        type: REMOVE_ANSWER,
        payload: {
          answer_id,
          question_id,
        },
      });
    }
  });
};

// export const updateANSWER = (id, updatedANSWER) => async (dispatch) => {
//   fetch(`${END_POINT}${API_ROUTE}answers/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       ANSWER: {
//         text: updatedANSWER,
//       },
//     }),
//   }).then((res) => {
//     if (res.ok) {
//       dispatch({
//         type: UPDATE_ANSWER,
//         payload: {
//           updatedANSWER,
//           id,
//         },
//       });
//     } else {
//       throw new Error(`API error! status: ${res.status}`);
//     }
//   });
// };

export const answersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
