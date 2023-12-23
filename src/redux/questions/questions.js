const END_POINT = 'https://extrovert-or-introvert.onrender.com/';
const API_ROUTE = '/api/v1/';
const REMOVE_QUESTION = 'questions/REMOVE_QUESTION';
const ADD_QUESTION = 'questions/ADD_QUESTION';
const UPDATE_QUESTION = 'questions/UPDATE_QUESTION';
export const ADD_ANSWER = 'questions/ADD_ANSWER';
export const REMOVE_ANSWER = 'questions/REMOVE_ANSWER';

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export const fetchQuestionsRequest = () => ({
  type: 'FETCH_QUESTIONS_REQUEST',
});

export const fetchQuestionsSuccess = (questions) => ({
  type: 'FETCH_QUESTIONS_SUCCESS',
  payload: questions,
});

export const fetchQuestionsFailure = (error) => ({
  type: 'FETCH_QUESTIONS_FAILURE',
  payload: error,
});

export const fetchQuestions = () => async (dispatch) => {
  dispatch(fetchQuestionsRequest);
  try {
    const res = await fetch(`${END_POINT}${API_ROUTE}questions`);
    if (res) {
      const data = await res.json();
      dispatch(fetchQuestionsSuccess(data));
    }
  } catch (error) {
    dispatch(fetchQuestionsFailure(error.message));
  }
};

export const addQuestion = (question) => async (dispatch) => {
  const response = await fetch(`${END_POINT}${API_ROUTE}questions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      question: {
        text: question,
      },
    }),
  });
  if (response.ok) {
    dispatch({
      type: ADD_QUESTION,
      payload: question,
    });
  } else {
    throw new Error(`API error! status: ${response.status}`);
  }
};

export const removeQuestion = (id) => (dispatch) => {
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
    case 'FETCH_QUESTIONS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_QUESTIONS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'FETCH_QUESTIONS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_QUESTION:
      return state;
    case REMOVE_QUESTION:
      return {
        ...state,
        data: state.data.filter((question) => question.id !== action.payload),
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        data: state.data.map((question) => {
          if (question.id === action.payload.id) {
            question.question = action.payload.updatedQuestion;
          }
          return question;
        }),
      };
    case ADD_ANSWER:
      return {
        ...state,
        data: state.data.map((question) => {
          if (question.id === action.payload.question_id) {
            question.answers = [
              ...question.answers,
              {
                text: action.payload.answer,
                question_id: action.payload.question_id,
                correct: false,
              },
            ];
          }
          return question;
        }),
      };
    case REMOVE_ANSWER:
      return {
        state,
        data: state.data.map((question) => {
          if (question.id === action.payload.question_id) {
            question.answers = question.answers.filter(
              (answer) => answer.id !== action.payload.answer_id,
            );
          }
          return question;
        }),
      };
    default:
      return state;
  }
};
