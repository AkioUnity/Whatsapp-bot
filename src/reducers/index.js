import { reducer as formReducer } from "redux-form";
import user from "./user";

import AppReducer from './AppReducer';
import ListContactsReducer from './ListContactsReducer';
import ListConversation from './ListConversation';
import chatsReducer from './chatsReducer';

export default ({
  form: formReducer,
  user,
  AppReducer,
  ListContactsReducer,
  ListConversation,
  chatsReducer
});
