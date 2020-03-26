import firebase from 'firebase';
import base64 from 'base-64';
import _ from 'lodash';

import {
    ADD_CONTACT,
    ADD_NEW_CONTACT_ERROR,
    ADD_NEW_CONTACT_SUCCESS,
    CONTACTS_LIST,
    CHANGE_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    LIST_CONVERSATION_USER,
} from '../resources/types';
import Config from "../global/config";
import {Load_Messages} from "../global/action-names";
import {fetchIsLoading, reportUserSuccess} from "./user";

/* added to redux */
export const addContact = (email) => {
    return {
        type: ADD_CONTACT,
        payload: email
    }
}

export const registerNewContact = (email) => {
    return dispatch => {
        let emailContactB64 = base64.encode(email);

        firebase.database().ref(`/users/${emailContactB64}`)
          .once('value').then(snapshot => {
            if (snapshot.val()) {
                /* Guest email for new contact */
                const userData = _.first(_.values(snapshot.val()));
                /* Currently authenticated user */
                const {currentUser} = firebase.auth();
                let currentEmailB64 = base64.encode(currentUser.email);

                firebase.database().ref(`/users_of_contacts/${currentEmailB64}`)
                  .push({email, name: userData.name})
                  .then(() => registerNewContactSuccess(dispatch))
                  .catch(error => registerNewContactError(error, dispatch))
            } else {
                dispatch({type: ADD_NEW_CONTACT_ERROR, payload: '[App] The user does not exist!'})
            }
        })
    }
}

export const fetchContacts = (emailLoggedIn) => {
    /* A solução sera ao carregar a aplicação, atualizar o emailLoggedIn  no AppReducer para que aplicação não quebre
    devido ao componentWillMount tentar passar um valor inexistente, fazer um função que que buscar o currentUser e
    da dispatch atualizando na store e deixar o email = ''... assim qunado tiver retorno atualizar os contatos
    */
    return (dispatch) => {
        firebase.database().ref(`/users_of_contacts/${emailLoggedIn}`)
          .on("value", snapshot => {
              dispatch({
                  type: CONTACTS_LIST,
                  payload: snapshot.val()
              })
          })
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

    return dispatch => {
        firebase.database().ref(`/messages/${user_email_encode}/${contact_email_encode}`)
          .on('value', snapshot => {
              dispatch({
                  type: LIST_CONVERSATION_USER,
                  payload: snapshot.val()
              })
          })
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
