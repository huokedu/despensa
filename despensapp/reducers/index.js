import { combineReducers } from "redux";
import { navReducer } from "../Navigation/AppNavigation";
import auth from "./auth_reducer";
import discover_screen from "./discover_screen_reducer";
import discover_categories_screen from "./discover_categories_reducer";
import discover_category_screen from "./discover_category_reducer";
import search_screen from "./search_reducer";
import favorites_screen from "./favorites_reducer";

export default combineReducers({
  navReducer,
  auth,
  discover_screen,
  discover_categories_screen,
  discover_category_screen,
  search_screen,
  favorites_screen
});
