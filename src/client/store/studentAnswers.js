import axios from 'axios';

const GETTING_ANSWERS = 'GETTING_ANSWERS';
const GOT_ANSWERS = 'GOT_ANSWERS';
const GETTING_ANSWER = 'GETTING_ANSWER';
const GOT_ANSWER = 'GOT_ANSWER';
const ADD_ANSWER = 'ADD_ANSWER';

const gettingAnswers = () => ({
  type: GETTING_ANSWERS,
});

const gotAnswers = answers => ({
  type: GOT_ANSWERS,
  answers,
});

const gettingAnswer = () => ({
  type: GETTING_ANSWER,
});

const gotAnswer = answer => ({
  type: GOT_ANSWER,
  answer,
});

let nextId = 0;
const addAnswer = data => ({
  type: ADD_ANSWER,
  data,
  id: nextId++,
});

export const fetchAnswers = () => {
  return async dispatch => {
    try {
      dispatch(gettingAnswers());
      const answers = await axios.get('/api/studentAnswers');
      dispatch(gotAnswers(answers));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchAnswer = id => {
  return async dispatch => {
    try {
      dispatch(gettingAnswer());
      const answer = await axios.get(`/api/studentAnswers/${id}`);
      dispatch(gotAnswer(answer));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchAddAnswer = answer => {
  return async dispatch => {
    try {
      const { data } = await axios.post('/api/studentAnswer', answer);
      dispatch(addAnswer(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {
  all: [],
  selectedAnswer: {},
  answerLoading: true,
  answersLoading: true,
};

const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_ANSWERS:
      return { ...state, answersLoading: true };
    case GOT_ANSWERS:
      return {
        ...state,
        answersLoading: false,
        all: [...state, ...action.answers.data],
      };
    case GETTING_ANSWER:
      return { ...state, answerLoading: true };
    case GOT_ANSWER:
      return {
        ...state,
        answerLoading: false,
        selectedAnswer: { ...action.answer.data },
      };
    case ADD_ANSWER:
      const newAnswer = {
        id: action.id,
        mood: action.mood,
        comment: action.comment,
        studentId: 1,
      };
      return { ...state, all: [...state.all, newAnswer] };
    default:
      return state;
  }
};

export default answerReducer;
