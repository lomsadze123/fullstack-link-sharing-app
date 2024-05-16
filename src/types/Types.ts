import { User } from "firebase/auth";

export interface ChooseTypes {
  choose: string;
  setChoose: React.Dispatch<React.SetStateAction<string>>;
}

export interface LinkContextType {
  number: number[];
  setNumber: React.Dispatch<React.SetStateAction<number[]>>;
  choose: string[];
  setChoose: React.Dispatch<React.SetStateAction<string[]>>;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  userInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
  setUserInfo: React.Dispatch<
    React.SetStateAction<{
      firstName: string;
      lastName: string;
      email: string;
    }>
  >;
  user: User | null | undefined;
  loading: boolean;
  setImageURL: React.Dispatch<React.SetStateAction<string>>;
  imageURL: string;
}

export interface AddLinkTypes {
  number: number;
  forFilter: string;
  setLinkAndProvider: React.Dispatch<
    React.SetStateAction<{
      link: string;
      provider: string;
    }>
  >;
  linkAndProvider: {
    link: string;
    provider: string;
  };
  linkId: string;
  setLinkId: React.Dispatch<React.SetStateAction<string>>;
}

export interface ChoosePlatformTypes {
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
  number: number;
  setLinkAndProvider: React.Dispatch<
    React.SetStateAction<{
      link: string;
      provider: string;
    }>
  >;
}
