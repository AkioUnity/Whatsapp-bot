import {REPORT, USER_REPORT, FETCH_ATTEMPT, ActionOnlineStatus, ActionPauseTime} from "../actions/user";
import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESSFULLY,LOGIN_RESET_CONTROL_VARS, LOGIN_LOGOUT } from "../global/action-names";

const initialState = {
  request_cn: 0,
  user_id:0,
  isLoading:false,
  lastError: undefined,
  userData: {},
  isLogged : false,
  hasError: false,
  resetNavigation: undefined,
  onlineStatus:true,
  pauseTime:undefined
};

export default function (state:any = initialState, action){
  switch (action.type) {
    case LOGIN_SUCCESSFULLY:
      return {
        ...state,
        userData : action.userData,
        isLogged : true
      };

    case LOGIN_FAILED:
      return {
        ...state,
        lastError : action.lastError,
        hasError : action.hasError,
        isLogged : false
      };


    case LOGIN_ATTEMPT:
      return {
        ...state,
        isLoading: action.isLoading,
        isLogged : false
      };

    case LOGIN_RESET_CONTROL_VARS:
      return {
        ...state,
        hasError: false,
        resetNavigation: undefined
      };

    case LOGIN_LOGOUT:
      return {
        ...state,
        hasError: false,
        isLogged: false,
        resetNavigation: action.resetNavigation
      };
    case REPORT:
      return {
        ...state,
        request_cn: action.response.count,
      };
    case ActionOnlineStatus:
      return {
        ...state,
        onlineStatus: action.payload,
      };
    case ActionPauseTime:
      return {
        ...state,
        pauseTime: action.payload,
      };
    case USER_REPORT:
      return {
        ...state,
        user_id: action.response.user_id,
      };
    case FETCH_ATTEMPT:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}
