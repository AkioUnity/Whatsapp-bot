import {Load_Messages,Fetch_ChatList} from '../global/action-names';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case Fetch_ChatList:
      return {
        ...state,
        chatList : action.chatList,
      };
    case Load_Messages:
      return {
        ...state,
        messages : action.messages,
      };
    default:
      return state;
  }
}
