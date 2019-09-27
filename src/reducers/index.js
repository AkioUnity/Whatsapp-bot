import { reducer as formReducer } from "redux-form";
import drawer from "./drawer";
import user from "./user";
import loginReducer from "../container/LoginContainer/reducer";
import moreReducer from "../container/HomeContainer/reducer";

export default ({
  form: formReducer,
  drawer,
  user,
  moreReducer,
  loginReducer
});
