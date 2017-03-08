import { combineReducers } from "redux";
import UsersReducer from './users.reducer';
import UserReducer from './user.reducer';

const allReducers = combineReducers({
    users: UsersReducer,
    active: UserReducer
})

export default allReducers;