import { combineReducers } from "redux";

import userReducer from "./slices/user.slice";
import authReducer from "./slices/auth.slice";

const rootReducer = (asyncReducers) => (state, action) => {
  const customCombinedReducers = combineReducers({
    user: userReducer,
    auth: authReducer,
    ...asyncReducers,
  });

  return customCombinedReducers(state, action);
};

export default rootReducer;
