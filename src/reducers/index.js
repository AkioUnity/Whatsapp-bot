import { reducer as formReducer } from "redux-form";
import drawer from "./drawer";
import user from "./user";
import loginReducer from "../container/LoginContainer/reducer";
import moreReducer from "../container/HomeContainer/reducer";

import AuthReducer from './AuthReducer';
import AppReducer from './AppReducer';
import ListContactsReducer from './ListContactsReducer';
import ListConversation from './ListConversation';
import ListChatsReducer from './ListChatsReducer';

export default ({
  form: formReducer,
  drawer,
  user,
  moreReducer,
  loginReducer,
  AuthReducer,
  AppReducer,
  ListContactsReducer,
  ListConversation,
  ListChatsReducer
});
