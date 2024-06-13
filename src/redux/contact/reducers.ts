import * as CONST from './constants';
import * as STATE from './initialStates';
import {ReduxActionParams} from '../../types';

const contactInitialStates = {
  ...STATE.contactInitialStates,
  action: '',
};

export const contactReducers = (
  state = contactInitialStates,
  action: ReduxActionParams,
) => {
  const {payload, type} = action;
  const actions: any = {
    // GET_ALL_CONTACT
    [CONST.GET_ALL_CONTACT]: () => ({
      ...state,
      getAllContactLoading: true,
      getAllContactError: false,
      getAllContactResponse: {},
      action: type,
    }),
    [CONST.GET_ALL_CONTACT_SUCCESS]: () => ({
      ...state,
      getAllContactLoading: false,
      getAllContactError: false,
      getAllContactResponse: payload,
      action: type,
    }),
    [CONST.GET_ALL_CONTACT_FAILED]: () => ({
      ...state,
      getAllContactLoading: false,
      getAllContactError: true,
      getAllContactResponse: payload,
      action: type,
    }),
    [CONST.GET_ALL_CONTACT_RESET]: () => ({
      ...state,
      getAllContactLoading: false,
      getAllContactError: false,
      getAllContactResponse: {},
      action: type,
    }),
    // GET_ALL_CONTACT

    // GET_CONTACT_BY_ID
    [CONST.GET_CONTACT_BY_ID]: () => ({
      ...state,
      getContactByIdLoading: true,
      getContactByIdError: false,
      getContactByIdSuccess: false,
      getContactByIdResponse: {},
      action: type,
    }),
    [CONST.GET_CONTACT_BY_ID_SUCCESS]: () => ({
      ...state,
      getContactByIdLoading: false,
      getContactByIdError: false,
      getContactByIdSuccess: true,
      getContactByIdResponse: payload,
      action: type,
    }),
    [CONST.GET_CONTACT_BY_ID_FAILED]: () => ({
      ...state,
      getContactByIdLoading: false,
      getContactByIdError: true,
      getContactByIdSuccess: false,
      getContactByIdResponse: payload,
      action: type,
    }),
    [CONST.GET_CONTACT_BY_ID_RESET]: () => ({
      ...state,
      getContactByIdLoading: false,
      getContactByIdError: false,
      getContactByIdSuccess: false,
      getContactByIdResponse: {},
      action: type,
    }),
    // GET_CONTACT_BY_ID

    // SAVE_CONTACT
    [CONST.SAVE_CONTACT]: () => ({
      ...state,
      saveContactLoading: true,
      saveContactError: false,
      saveContactSuccess: false,
      saveContactResponse: {},
      action: type,
    }),
    [CONST.SAVE_CONTACT_SUCCESS]: () => ({
      ...state,
      saveContactLoading: false,
      saveContactError: false,
      saveContactSuccess: true,
      saveContactResponse: payload,
      action: type,
    }),
    [CONST.SAVE_CONTACT_FAILED]: () => ({
      ...state,
      saveContactLoading: false,
      saveContactError: true,
      saveContactSuccess: false,
      saveContactResponse: payload,
      action: type,
    }),
    [CONST.SAVE_CONTACT_RESET]: () => ({
      ...state,
      saveContactLoading: false,
      saveContactError: false,
      saveContactSuccess: false,
      saveContactResponse: {},
      action: type,
    }),
    // SAVE_CONTACT

    // UPDATE_CONTACT
    [CONST.UPDATE_CONTACT]: () => ({
      ...state,
      updateContactLoading: true,
      updateContactError: false,
      updateContactSuccess: false,
      updateContactResponse: {},
      action: type,
    }),
    [CONST.UPDATE_CONTACT_SUCCESS]: () => ({
      ...state,
      updateContactLoading: false,
      updateContactError: false,
      updateContactSuccess: true,
      updateContactResponse: payload,
      action: type,
    }),
    [CONST.UPDATE_CONTACT_FAILED]: () => ({
      ...state,
      updateContactLoading: false,
      updateContactError: true,
      updateContactSuccess: false,
      updateContactResponse: payload,
      action: type,
    }),
    [CONST.UPDATE_CONTACT_RESET]: () => ({
      ...state,
      updateContactLoading: false,
      updateContactError: false,
      updateContactSuccess: false,
      updateContactResponse: {},
      action: type,
    }),
    // UPDATE_CONTACT

    // DELETE_CONTACT
    [CONST.DELETE_CONTACT]: () => ({
      ...state,
      deleteContactLoading: true,
      deleteContactError: false,
      deleteContactSuccess: false,
      deleteContactResponse: {},
      action: type,
    }),
    [CONST.DELETE_CONTACT_SUCCESS]: () => ({
      ...state,
      deleteContactLoading: false,
      deleteContactError: false,
      deleteContactSuccess: true,
      deleteContactResponse: payload,
      action: type,
    }),
    [CONST.DELETE_CONTACT_FAILED]: () => ({
      ...state,
      deleteContactLoading: false,
      deleteContactError: true,
      deleteContactSuccess: false,
      deleteContactResponse: payload,
      action: type,
    }),
    [CONST.DELETE_CONTACT_RESET]: () => ({
      ...state,
      deleteContactLoading: false,
      deleteContactError: false,
      deleteContactSuccess: false,
      deleteContactResponse: {},
      action: type,
    }),
    // DELETE_CONTACT

    DEFAULT: () => state,
  };

  return (actions[type] || actions.DEFAULT)();
};
