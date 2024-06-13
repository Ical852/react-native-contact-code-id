import {takeLatest, call, put} from 'redux-saga/effects';
import {ReduxActionParams} from '../../types';
import {
  GET_ALL_CONTACT,
  GET_CONTACT_BY_ID,
  SAVE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from './constants';
import {contactApi} from './apis';
import {
  getAllContactSuccess,
  getAllContactFailed,
  getContactByIdSuccess,
  getContactByIdFailed,
  saveContactSuccess,
  saveContactFailed,
  updateContactSuccess,
  updateContactFailed,
  deleteContactSuccess,
  deleteContactFailed,
} from './actions';

function* getAllContact(): Generator {
  try {
    const response = yield call(contactApi.getAllContact);
    yield put(getAllContactSuccess(response));
  } catch (error) {
    yield put(getAllContactFailed(error));
  }
}

function* getContactById(action: ReduxActionParams): Generator {
  try {
    const response = yield call(contactApi.getContactById, action.payload);
    yield put(getContactByIdSuccess(response));
  } catch (error) {
    yield put(getContactByIdFailed(error));
  }
}

function* saveContact(action: ReduxActionParams): Generator {
  try {
    const response = yield call(contactApi.saveContact, action.payload);
    yield put(saveContactSuccess(response));
  } catch (error: any) {
    yield put(saveContactFailed(error.message));
  }
}

function* updateContact(action: ReduxActionParams): Generator {
  try {
    const response = yield call(contactApi.updateContact, action.payload);
    yield put(updateContactSuccess(response));
  } catch (error: any) {
    console.log(error);
    yield put(updateContactFailed(error.message));
  }
}

function* deleteContact(action: ReduxActionParams): Generator {
  try {
    const response = yield call(contactApi.deleteContact, action.payload);
    yield put(deleteContactSuccess(response));
  } catch (error: any) {
    yield put(deleteContactFailed(error.message));
  }
}

export function* contactSaga() {
  yield takeLatest(GET_ALL_CONTACT, getAllContact);
  yield takeLatest(GET_CONTACT_BY_ID, getContactById);
  yield takeLatest(SAVE_CONTACT, saveContact);
  yield takeLatest(UPDATE_CONTACT, updateContact);
  yield takeLatest(DELETE_CONTACT, deleteContact);
}
