
import base64 from 'base-64';
import _ from 'lodash';

import {
    ADD_CONTACT,
    ADD_NEW_CONTACT_ERROR,
    ADD_NEW_CONTACT_SUCCESS,
    CONTACTS_LIST,
    CHANGE_MESSAGE,
} from '../resources/types';
import Config from "../global/config";
import {Load_Messages} from "../global/action-names";
import {fetchIsLoading} from "./user";

/* added to redux */
export const addContact = (email) => {
    return {
        type: ADD_CONTACT,
        payload: email
    }
}

export const registerNewContact = (email) => {
    return dispatch => {
    }
}

export const fetchContacts = (emailLoggedIn) => {
    return (dispatch) => {
    }
}

export const sendMessage = (message, sender_id, receiver_id,messages) => {
    // console.log("send message"+message+" "+sender_id+" "+receiver_id);
    return dispatch => {
        fetch(Config.Api_URL + 'users/sendMessage', {
            method: "post",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: message,
                sender_id: sender_id,
                receiver_id: receiver_id
            })
        }).then(response => {
            response.json().then(data => {
                // console.log(data);
                messages.push({text:message,time:new Date(),sender_id:sender_id});
                dispatch({
                    type: Load_Messages,
                    messages: messages,
                });
            });
        })
          .catch(error => {
              console.log(error);
          });
    }
}

export const fetchMessages = (user1, user2) => {
    return dispatch => {
        let url = Config.Api_URL + 'phone/messages/' + user1 + '/' + user2;
        console.log(url);
        fetch(url)
          .then(response => {
              response.json().then(data => {
                  dispatch({
                      type: Load_Messages,
                      messages: data,
                  });
              });
          })
          .catch(error => {
              console.error(error);
              dispatch(fetchIsLoading(false));
          });
    }
}

const registerNewContactError = (error, dispatch) => {
    dispatch({
        type: ADD_NEW_CONTACT_ERROR,
        payload: error.message
    })
}

const registerNewContactSuccess = dispatch => (
  dispatch({
      type: ADD_NEW_CONTACT_SUCCESS,
      payload: true
  })
);

export const enableInclusionContact = () => (
  {
      type: ADD_NEW_CONTACT_SUCCESS,
      payload: false
  }
)

/* Chat component message */
export const changeMessage = text => {
    return ({
        type: CHANGE_MESSAGE,
        payload: text
    })
};
