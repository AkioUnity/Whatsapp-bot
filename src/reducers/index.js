import { reducer as formReducer } from "redux-form";
import user from "./user";
import loginReducer from "../container/LoginContainer/reducer";
import moreReducer from "../container/HomeContainer/reducer";

import AppReducer from './AppReducer';
import ListContactsReducer from './ListContactsReducer';
import ListConversation from './ListConversation';
import ListChatsReducer from './ListChatsReducer';

export default ({
  form: formReducer,
  user,
  moreReducer,
  loginReducer,
  AppReducer,
  ListContactsReducer,
  ListConversation,
  ListChatsReducer
});
