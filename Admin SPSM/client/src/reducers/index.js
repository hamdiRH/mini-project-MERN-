import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import studentReducer from './studentReducer'

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  student: studentReducer
});
