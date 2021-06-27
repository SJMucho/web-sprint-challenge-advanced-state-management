import axios from "axios";
// import { initialState } from "../reducers/index";
export const FETCH_SMURF_LOADING = "FETCH_SMURF_LOADING";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

export const ADD_SMURF = "ADD_SMURF";
export const SMURF_ERROR = "SMURF_ERROR";
export const TOGGLE_SMURF = "TOGGLE_SMURF";

export const fetchSmurfs = (smurf) => (dispatch) => {
  dispatch({ type: FETCH_SMURF_LOADING });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })

    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_SMURF_FAILURE, payload: err });
    });
};

export function addNewSmurf(newSmurf) {
  return {
    type: ADD_SMURF,
    payload: newSmurf,
  };
}

export function toggleSmurf(index) {
  return {
    type: TOGGLE_SMURF,
    payload: index,
  };
}

export function smurfError(error) {
  return {
    type: SMURF_ERROR,
    payload: error,
  };
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
