import Config from "../../global/config";
import {
  LOGIN_ATTEMPT,
  LOGIN_FAILED,
  LOGIN_SUCCESSFULLY,
  LOGIN_RESET_CONTROL_VARS,
  LOGIN_LOGOUT
} from "../../global/action-names";
import {_INITIAL_STATE_} from "./reducer";

const URL = `${Config.BASE_URL}${Config.ROUTE_LOGIN}`;
// const URL = 'https://www.google.com/';

export function loginIsLoading(bool: boolean) {
  return {
    type: LOGIN_ATTEMPT,
    isLoading: bool,
    lastError: null
  };
}

export function loginSuccess(userData: Object) {
  return {
    type: LOGIN_SUCCESSFULLY,
    userData,
    lastError: null
  };
}

export function loginFailed(lastError: Object) {
  return {
    type: LOGIN_FAILED,
    lastError,
    hasError: lastError !== undefined
  };
}

export function resetLoginControlVars() {
  return dispatch => {
    dispatch({
      type: LOGIN_RESET_CONTROL_VARS,
      hasError: false
    });
  };
}


export function logout(resetNavigation: Function) {
  console.log('action-logout');
  return dispatch => {
    dispatch({
      type: LOGIN_LOGOUT,
      ..._INITIAL_STATE_,
      resetNavigation
    });
  };
}

export function doLogin(userValues: Object) {
  return dispatch => {
    console.log('login');
    dispatch(loginSuccess(userValues));
  };
}
