import axios from 'axios';

const GETTING_STUDENTS = 'GETTING_STUDENTS';
const GOT_STUDENTS = 'GOT_STUDENTS';
const GETTING_STUDENT = 'GETTING_STUDENT';
const GOT_STUDENT = 'GOT_STUDENT';

const initialState = {
  all: [],
  loading: false,
  selected: {},
  studentAnswers: {},
};

const gettingStudents = () => ({ type: GETTING_STUDENTS });
const gotStudents = students => ({ type: GOT_STUDENTS, students });
const gettingStudent = () => ({ type: GETTING_STUDENT });
const gotStudent = student => ({ type: GOT_STUDENT, student });

export const fetchStudents = () => {
  return async dispatch => {
    try {
      dispatch(gettingStudents());
      const { data } = await axios.get('/api/students');
      dispatch(gotStudents(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchStudent = id => {
  return async dispatch => {
    try {
      dispatch(gettingStudent());
      const { data } = await axios.get(`/api/students/${id}`);
      dispatch(gotStudent(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GETTING_STUDENTS:
      return { ...state, loading: true };
    case GOT_STUDENTS:
      return { ...state, all: action.students, loading: false };
    case GETTING_STUDENT:
      return { ...state, loading: true };
    case GOT_STUDENT:
      return {
        ...state,
        selected: { ...action.student },
        loading: false,
        studentAnswers: { ...action.studentAnswers },
      };
    default:
      return state;
  }
}
