import { combineReducers } from "redux";
import categoryReducer from "./category";
import userReducer from "./user";
import restoMenuReducer from "./resto-menu";

const rootReducer = combineReducers({
  categoryState: categoryReducer,
  userState: userReducer,
  restoMenuState: restoMenuReducer,
});

export default rootReducer;
