import { combineReducers } from 'redux';
import shortStoryReducer from './shortStoryReducer';


export default combineReducers({
  shortStory: shortStoryReducer
});