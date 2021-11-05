import { combineReducers } from "redux";
import categoryReducer from "./category";
import userReducer from "./user";
import restoMenuReducer from "./resto-menu";
import restoShopReducer from "./restoshop";

const rootReducer = combineReducers({
  categoryState: categoryReducer,
  userState: userReducer,
  restoMenuState: restoMenuReducer,
  restoShopState: restoShopReducer,
});

export default rootReducer;
