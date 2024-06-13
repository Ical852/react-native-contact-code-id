import {Contact, HomeScreenProps} from '../types';

export type RootStackParamList = {
  HomeContact: React.FC<HomeScreenProps>;
  DetailContact: {contact: Contact};
  AddContact: undefined;
  EditContact: {contact: Contact};
};
