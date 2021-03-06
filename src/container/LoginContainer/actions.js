import Config from '../../global/config';
import {
    LOGIN_ATTEMPT,
    LOGIN_FAILED,
    LOGIN_SUCCESSFULLY,
    LOGIN_RESET_CONTROL_VARS,
    LOGIN_LOGOUT,
} from '../../global/action-names';
import {_INITIAL_STATE_} from '../../reducers/user';
import {setUser} from '../../actions/user';

export function loginIsLoading(bool: boolean) {
    return {
        type: LOGIN_ATTEMPT,
        isLoading: bool,
        lastError: null,
    };
}

export function loginSuccess(userData: Object) {
    return {
        type: LOGIN_SUCCESSFULLY,
        userData,
        lastError: null,
    };
}

export function loginFailed(lastError: Object) {
    return {
        type: LOGIN_FAILED,
        lastError,
        hasError: lastError !== undefined,
    };
}

export function resetLoginControlVars() {
    return dispatch => {
        dispatch({
            type: LOGIN_RESET_CONTROL_VARS,
            hasError: false,
        });
    };
}


export function logout(resetNavigation: Function) {
    console.log('action-logout');
    return dispatch => {
        dispatch({
            type: LOGIN_LOGOUT,
            ..._INITIAL_STATE_,
            resetNavigation,
        });
    };
}

export function doLogin(userValues: Object) {
    return dispatch => {
        //Dispatch loading to show Spinner on screen
        dispatch(loginIsLoading(true));
        // userValues.userName='akioUnity@gmail.com';
        // userValues.password='godjwth10';
        console.log('login:', userValues.userName, userValues.password);
        let formdata = new FormData();
        formdata.append('action', 'login_api');
        formdata.append('username', userValues.userName);
        formdata.append('password', userValues.password);
        fetch(Config.AJAX_URL, {
            method: 'post',
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: Config.Authorization,
            },
            body: formdata,
        }).then(response => {
            dispatch(loginIsLoading(false));
            if (response.status >= 200 && response.status <= 304) {
                response.json().then(data => {
                    console.log(data);
                    if (data.length === 0) {
                        dispatch(loginFailed(new Error('No found')));
                    } else {
                        // data=JSON.parse(data);
                        if (!data.error) {
                            data.data.id=data.data.ID;
                            const userData = data.data;
                            // userData.id=104;
                            console.log('userData: ', userData);
                            dispatch(setUser(userData));
                            dispatch(loginSuccess(userData));
                        } else {
                            dispatch(loginFailed(new Error(data.error)));
                        }
                    }
                });
            } else {
                console.log(response);
            }
        })
          .catch(error => {
              dispatch(loginIsLoading(false));
              dispatch(loginFailed(error));
          });
    };
}
