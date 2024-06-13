import axios from 'axios';
import {BASE_RUL} from '../constants';
import {
  DeleteContactPayload,
  GetByIdPayload,
  SaveContactPayload,
  UpdateContactPayload,
} from '../../types';

export const contactApi = {
  getAllContact: async () => {
    const response = await axios.get(BASE_RUL + '/contact');
    return response.data;
  },
  getContactById: async (payload: GetByIdPayload) => {
    const response = await axios.get(BASE_RUL + `/contact/${payload?.id}`);
    return response.data;
  },
  saveContact: async (payload: SaveContactPayload) => {
    const response = await axios.post(BASE_RUL + '/contact', payload);
    return response.data;
  },
  updateContact: async (payload: UpdateContactPayload) => {
    console.log(payload);
    const response = await axios.put(
      BASE_RUL + `/contact/${payload?.id}`,
      payload,
    );
    return response.data;
  },
  deleteContact: async (payload: DeleteContactPayload) => {
    const response = await axios.delete(BASE_RUL + `/contact/${payload?.id}`);
    return response.data;
  },
};
