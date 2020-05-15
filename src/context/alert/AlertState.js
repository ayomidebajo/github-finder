import React, { useReducer } from "react";
import AlertReducer from '../alert/alertReducer';
import AlertContext from '../alert/alertContext';

import {
 SET_ALERT,
 REMOVE_ALERT
} from "../types";



const AlertState = (props) => {
  const initialState = {
    alert: null
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Set alert
  const setAlert = (msg, type) => {
    dispatch({type: SET_ALERT, payload: {msg, type}})
    setTimeout(() => dispatch({ type: REMOVE_ALERT}), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
