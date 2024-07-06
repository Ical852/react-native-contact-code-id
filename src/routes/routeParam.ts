import {AddScreenProps, Contact, EditScreenProps, HomeScreenProps, SplashScreenProps} from '../types';
import { DetailScreenProps } from '../types/modules/contacts';

export type RootStackParamList = {
  HomeContact: React.FC<HomeScreenProps>;
  DetailContact: React.FC<DetailScreenProps>;
  AddContact: React.FC<AddScreenProps>;
  EditContact: React.FC<EditScreenProps>;
  Splash: React.FC<SplashScreenProps>
};
