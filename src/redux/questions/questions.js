const END_POINT = 'http://localhost:3000/';
const API_ROUTE = '/api/v1/';
const FETCH_DATA = 'questions/FETCH_DATA';
const REMOVE_QUESTION = 'questions/REMOVE_QUESTION';
const ADD_QUESTION = 'questions/ADD_QUESTION';
const UPDATE_QUESTION = 'questions/UPDATE_QUESTION';
const initialState = [];

export const fetchQuestions = () => async (dispatch) => {
  const res = await fetch(`${END_POINT}${API_ROUTE}questions`);
  const data = await res.json();
  dispatch({
    type: FETCH_DATA,
    payload: data,
  });
};

export const removeQuestion = (id) => async (dispatch) => {
  fetch(`${END_POINT}${API_ROUTE}questions/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res) {
      dispatch({
        type: REMOVE_QUESTION,
        payload: id,
      });
    }
  });
};

export const updateQuestion = (id, updatedQuestion) => async (dispatch) => {
  fetch(`${END_POINT}${API_ROUTE}questions/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      question: {
        text: updatedQuestion,
      },
    }),
  }).then((res) => {
    if (res.ok) {
      dispatch({
        type: UPDATE_QUESTION,
        payload: {
          updatedQuestion,
          id,
        },
      });
    } else {
      throw new Error(`API error! status: ${res.status}`);
    }
  });
};

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case REMOVE_QUESTION:
      return state.filter((question) => question.id != action.payload);
    case UPDATE_QUESTION:
      return state.map((question) => {
        if (question.id === action.payload.id) {
          question.question = action.payload.updatedQuestion;
        }
        return question;
      });
    default:
      return state;
  }
};
