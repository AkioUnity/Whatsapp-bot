import Config from "../global/config";

export const REPORT = 'REPORT';
export const USER_REPORT = 'USER_REPORT';
export const FETCH_ATTEMPT= 'FETCH_ATTEMPT';

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

export function reportData(report: Object) {
  return dispatch => {
    fetch(Config.BASE_URL+'/users/report', {
      method: "post",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        what_text: report.what_text,
        where_text: report.where_text,
        other_text: report.other_text,
      })
    }).then(response => {
      response.json().then(data => {
        console.log(data);
        dispatch(reportSuccess(data));
        dispatch(fetchIsLoading(false));
      });
    })
      .catch(error => {
        dispatch(fetchIsLoading(false));
      });
  };
}

export function reportUser(user: Object) {
  console.log(user);
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
        dispatch(fetchIsLoading(false));
      });
  };
}
