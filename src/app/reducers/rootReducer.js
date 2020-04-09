import { combineReducers } from "redux";
import { reducer as FormReducer } from 'redux-form'
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/eventReducer";

//section 7 4th => add the reducer to the root reducer
const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer
})
export default rootReducer