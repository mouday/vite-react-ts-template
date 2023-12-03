import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
