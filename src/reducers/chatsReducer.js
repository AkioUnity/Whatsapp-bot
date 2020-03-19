import {FETCH_ALL_CHATS} from "../global/action-names";

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_ALL_CHATS:
      return {
        ...state,
        chatList : action.chatList,
      };
    default:
      return state;
  }
}
