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
} from "./actionsTypes";
import Axios from "axios";
require("dotenv").config();

export const getProjects = () => async dispatch => {
  try {
    const { data } = await Axios.get(
      process.env.REACT_APP_DB_HOST + "/projects/projs"
    );
    dispatch({
      type: GET_PROJECTS,
      payload: data
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const getUsers = () => async dispatch => {
  try {
    const token = localStorage.getItem("Token");
    if (token) {
      const { data } = await Axios.get(
        process.env.REACT_APP_DB_HOST + "/developers/devs",
        {
          headers: {
            "auth-token": `${token}`
          }
        }
      );
      dispatch({
        type: GET_USERS,
        payload: data
      });
    }
    return console.log("NO TOKEN");
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const addUser = obj => async dispatch => {
  try {
    await Axios.post(
      process.env.REACT_APP_DB_HOST + "/developers/developerAdd",
      obj
    );
    dispatch({
      type: ADD_USER,
      payload: obj
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const registerUser = obj => async dispatch => {
  try {
    await Axios.post(
      process.env.REACT_APP_DB_HOST + "/developers/register",
      obj
    );
    dispatch({
      type: REG_USER,
      payload: obj
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const loginUser = obj => async dispatch => {
  try {
    const { data } = await Axios.post(
      process.env.REACT_APP_DB_HOST + "/developers/login",
      obj
    );
    localStorage.setItem("Token", data);
    dispatch({
      type: LOGIN_USER,
      payload: obj
    });
  } catch (err) {
    console.log("Error: " + err);
  }
};

export const addProject = obj => async dispatch => {
  try {
    await Axios.post(
      process.env.REACT_APP_DB_HOST + "/projects/projectAdd",
      obj
    );
    dispatch({
      type: ADD_PROJECT,
      payload: obj
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const updateProject = (id, updatedProject) => async dispatch => {
  try {
    await Axios.put(
      process.env.REACT_APP_DB_HOST + "/projects/update/" + id,
      updatedProject
    );
    dispatch({
      type: UPDATE_PROJECT,
      payload: updatedProject
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const updateUser = (id, updatedUser) => async dispatch => {
  try {
    await Axios.put(
      process.env.REACT_APP_DB_HOST + "/developers/update/" + id,
      updatedUser
    );
    dispatch({
      type: UPDATE_USER,
      payload: updatedUser
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

export const deleteProject = (id, obj) => async dispatch => {
  try {
    await Axios.delete(
      process.env.REACT_APP_DB_HOST + "/projects/delete/" + id
    );
    dispatch({
      type: DELETE_PROJECT,
      payload: obj
    });
  } catch (err) {
    console.log("Error: " + err);
  }
};

export const deleteUser = (id, obj) => async dispatch => {
  try {
    await Axios.delete(
      process.env.REACT_APP_DB_HOST + "/developers/delete/" + id
    );
    dispatch({
      type: DELETE_USER,
      payload: obj
    });
  } catch (err) {
    console.log("Error: " + err);
  }
};
