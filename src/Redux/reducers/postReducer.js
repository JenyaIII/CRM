import {
  ADD_USER,
  REG_USER,
  LOGIN_USER,
  ADD_PROJECT,
  GET_PROJECTS,
  GET_USERS,
  UPDATE_PROJECT,
  UPDATE_USER,
  DELETE_PROJECT,
  DELETE_USER
} from "../actions/actionsTypes";

const initialState = {
  users: [],
  login: [],
  projects: [],
  isUserLoged: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case REG_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case LOGIN_USER:
      return {
        ...state,
        login: [...state.login, action.payload],
        isUserLoged: true
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: [
          ...state.projects.filter(item => item.id !== action.payload.id),
          action.payload
        ]
      };
    case UPDATE_USER:
      return {
        ...state,
        users: [
          ...state.users.filter(item => item.id !== action.payload.id),
          action.payload
        ]
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: [
          ...state.projects.filter(item => item.id !== action.payload.id)
        ]
      };
    case DELETE_USER:
      return {
        ...state,
        users: [...state.users.filter(item => item.id !== action.payload.id)]
      };
    default:
      return state;
  }
}
