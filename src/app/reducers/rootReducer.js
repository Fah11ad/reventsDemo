import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/eventReducer";

//section 7 4th => add the reducer to the root reducer
const rootReducer = combineReducers({
    test: testReducer,
    events: eventReducer
})
export default rootReducer