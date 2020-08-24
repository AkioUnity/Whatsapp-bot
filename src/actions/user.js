import Config from "../global/config";
import _ from "lodash";
import {Load_Messages,Fetch_ChatList} from '../global/action-names';

export const REPORT = 'REPORT';
export const ActionOnlineStatus = 'OnlineStatus';
export const ActionPauseTime = 'PauseTime';
export const USER_REPORT = 'USER_REPORT';
export const FETCH_ATTEMPT= 'FETCH_ATTEMPT';

export const SET_USER = 'SET_USER';

export function setUser(user:string):Action {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function fetchIsLoading(bool: boolean) {
  return {
    type: FETCH_ATTEMPT,
    isLoading: bool,
    // lastError: null
  };
}

export function reportSuccess(response: Object) {
  return {
    type: REPORT,
    response
  };
}

export function reportUserSuccess(response: Object) {
  return {
    type: USER_REPORT,
    response
  };
}

export function cockpit_request(report: Object) {
  return dispatch => {
    let formdata = new FormData();
    formdata.append('action', 'cockpit_request');
    fetch(Config.AJAX_URL, {
      method: "post",
      headers: {
        Authorization: Config.Authorization,
      },
      body: formdata
    }).then(response => {
      response.json().then(data => {
        console.log(data);
        dispatch(reportSuccess(data));
        dispatch(fetchIsLoading(false));
      });
    })
      .catch(error => {
        // dispatch(fetchIsLoading(false));
      });
  };
}

export function change_online_status(status) {
  return {
      type: ActionOnlineStatus,
      payload:status
    };
}

export function put_pause_time(time) {
  return {
      type: ActionPauseTime,
      payload:time
  };
}


export function reportUser(user: Object) {
  return dispatch => {
    fetch(Config.BASE_URL+'/users/report_user', {
      method: "post",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user.username,
        email: user.email,
        phone1: user.phone,
        report_id: user.report_id,
      })
    }).then(response => {
      response.json().then(data => {
        dispatch(reportUserSuccess(data));
        dispatch(fetchIsLoading(false));
      });
    })
      .catch(error => {
        // dispatch(fetchIsLoading(false));
      });
  };
}

export const fetchAllChats = user_id=> {
  return dispatch => {
    // user_id=104;
    let url=Config.Api_URL+'phone/chats/'+user_id;
    // console.log(url);
    fetch(url)
    .then(response => {
      response.json().then(data => {
        // console.log(data);
        dispatch({
          type: Fetch_ChatList,
          chatList:data,
        });
      });
    })
      .catch(error => {
        console.error(error);
        dispatch(fetchIsLoading(false));
      });
  }
}

