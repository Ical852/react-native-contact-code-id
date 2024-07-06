import {
  AddScreenProps,
  EditScreenProps,
  HomeScreenProps,
  SplashScreenProps,
  DetailScreenProps,
  SearchScreenProps
} from '../types';

export type RootStackParamList = {
  Splash: React.FC<SplashScreenProps>;
  HomeContact: React.FC<HomeScreenProps>;
  DetailContact: React.FC<DetailScreenProps>;
  AddContact: React.FC<AddScreenProps>;
  EditContact: React.FC<EditScreenProps>;
  SearchContact: React.FC<SearchScreenProps>;
};
