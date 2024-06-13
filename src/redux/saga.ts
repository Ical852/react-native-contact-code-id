import {all} from 'redux-saga/effects';
import {contactSaga} from './contact/sagas';

export default function* rootSaga() {
  yield all([contactSaga()]);
}
