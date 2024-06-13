import * as CONST from './constants';

// GET_ALL_CONTACT
export const getAllContact = () => {
  return {
    type: CONST.GET_ALL_CONTACT,
  };
};
export const getAllContactSuccess = (payload: any) => {
  return {
    type: CONST.GET_ALL_CONTACT_SUCCESS,
    payload,
  };
};
export const getAllContactFailed = (payload: any) => {
  return {
    type: CONST.GET_ALL_CONTACT_FAILED,
    payload,
  };
};
export const getAllContactReset = () => {
  return {
    type: CONST.GET_ALL_CONTACT_RESET,
  };
};
// GET_ALL_CONTACT

// GET_CONTACT_BY_ID
export const getContactById = (payload: any) => {
  return {
    type: CONST.GET_CONTACT_BY_ID,
    payload,
  };
};
export const getContactByIdSuccess = (payload: any) => {
  return {
    type: CONST.GET_CONTACT_BY_ID_SUCCESS,
    payload,
  };
};
export const getContactByIdFailed = (payload: any) => {
  return {
    type: CONST.GET_CONTACT_BY_ID_FAILED,
    payload,
  };
};
export const getContactByIdReset = () => {
  return {
    type: CONST.GET_CONTACT_BY_ID_RESET,
  };
};
// GET_CONTACT_BY_ID

// SAVE_CONTACT
export const saveContact = (payload: any) => {
  return {
    type: CONST.SAVE_CONTACT,
    payload,
  };
};
export const saveContactSuccess = (payload: any) => {
  return {
    type: CONST.SAVE_CONTACT_SUCCESS,
    payload,
  };
};
export const saveContactFailed = (payload: any) => {
  return {
    type: CONST.SAVE_CONTACT_FAILED,
    payload,
  };
};
export const saveContactReset = () => {
  return {
    type: CONST.SAVE_CONTACT_RESET,
  };
};
// SAVE_CONTACT

// UPDATE_CONTACT
export const updateContact = (payload: any) => {
  return {
    type: CONST.UPDATE_CONTACT,
    payload,
  };
};
export const updateContactSuccess = (payload: any) => {
  return {
    type: CONST.UPDATE_CONTACT_SUCCESS,
    payload,
  };
};
export const updateContactFailed = (payload: any) => {
  return {
    type: CONST.UPDATE_CONTACT_FAILED,
    payload,
  };
};
export const updateContactReset = () => {
  return {
    type: CONST.UPDATE_CONTACT_RESET,
  };
};
// UPDATE_CONTACT

// DELETE_CONTACT
export const deleteContact = (payload: any) => {
  return {
    type: CONST.DELETE_CONTACT,
    payload,
  };
};
export const deleteContactSuccess = (payload: any) => {
  return {
    type: CONST.DELETE_CONTACT_SUCCESS,
    payload,
  };
};
export const deleteContactFailed = (payload: any) => {
  return {
    type: CONST.DELETE_CONTACT_FAILED,
    payload,
  };
};
export const deleteContactReset = () => {
  return {
    type: CONST.DELETE_CONTACT_RESET,
  };
};
// DELETE_CONTACT
