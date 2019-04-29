import axios from 'axios';

const GETTING_MESSAGES = 'GETTING_MESSAGES';
const GOT_MESSAGES = 'GOT_MESSAGES';
const GETTING_MESSAGE = 'GETTING_MESSAGE';
const GOT_MESSAGE = 'GOT_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';

const gettingMessages = () => ({
  type: GETTING_MESSAGES,
});

const gotMessages = messages => ({
  type: GOT_MESSAGES,
  messages,
});

const gettingMessage = () => ({
  type: GETTING_MESSAGE,
});

const gotMessage = message => ({
  type: GOT_MESSAGE,
  message,
});

let nextId = 0;
const addMessage = data => ({
  type: ADD_MESSAGE,
  data,
  id: nextId++,
});

export const fetchMessages = () => {
  return async dispatch => {
    try {
      dispatch(gettingMessages());
      const messages = await axios.get('/api/teacherMessages');
      dispatch(gotMessages(messages));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchMessage = id => {
  return async dispatch => {
    try {
      dispatch(gettingMessage());
      const message = await axios.get(`/api/teacherMessages/${id}`);
      dispatch(gotMessage(message));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchAddMessage = message => {
  return async dispatch => {
    try {
      const { data } = await axios.post('/api/teacherMessages', message);
      dispatch(addMessage(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {
  all: [],
  selectedMessage: {},
  messageLoading: true,
  messagesLoading: true,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_MESSAGES:
      return { ...state, messagesLoading: true };
    case GOT_MESSAGES:
      return {
        ...state,
        messagesLoading: false,
        all: [...state, ...action.messages.data],
      };
    case GETTING_MESSAGE:
      return { ...state, messageLoading: true };
    case GOT_MESSAGE:
      return {
        ...state,
        messageLoading: false,
        selectedMessage: { ...action.message.data },
      };
    case ADD_MESSAGE:
      const newMessage = {
        id: action.id,
        greeting: action.firstName,
        agenda: action.lastName,
        teacherId: 1,
      };
      return { ...state, all: [...state.all, newMessage] };
    default:
      return state;
  }
};

export default messageReducer;
