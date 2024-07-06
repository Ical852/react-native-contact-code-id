export interface GetByIdPayload {
  id: string;
}

export interface DeleteContactPayload {
  id: string;
}

export interface SaveContactPayload {
  firstName: string;
  lastName: string;
  age: string;
  photo: string;
}

export interface UpdateContactPayload {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  photo: string;
}

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  photo: string;
}

export interface SplashScreenProps {
  navigation: any
}

export interface HomeScreenProps {
  getAllContact: () => void;
  getAllContactLoading: boolean;
  getAllContactError: boolean;
  getAllContactResponse: any;
  navigation: any;
}

export interface AddScreenProps {
  saveContact: (payload: any) => void;
  saveContactReset: () => void;
  saveContactLoading: boolean;
  saveContactError: boolean;
  saveContactSuccess: boolean;
  saveContactResponse: any;
  navigation: any;
}

export interface EditScreenProps {
  updateContact: (payload: any) => void;
  updateContactReset: () => void;
  updateContactLoading: boolean;
  updateContactError: boolean;
  updateContactSuccess: boolean;
  updateContactResponse: any;
  navigation: any;
  route: any
}

export interface DetailScreenProps {
  deleteContact: (payload: any) => void;
  deleteContactReset: () => void;
  deleteContactLoading: boolean;
  deleteContactError: boolean;
  deleteContactSuccess: boolean;
  deleteContactResponse: any;
  navigation: any;
  route: {
    params: any,
  }
}

export interface SearchScreenProps {
  getAllContact: () => void;
  getAllContactLoading: boolean;
  getAllContactError: boolean;
  getAllContactResponse: any;
  navigation: any;
}