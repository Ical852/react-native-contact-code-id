import {combineReducers} from 'redux';
import {contactReducers} from './contact/reducers';

const reducers = combineReducers({
  contact: contactReducers,
});

export default reducers;
