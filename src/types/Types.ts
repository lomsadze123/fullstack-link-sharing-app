import { User } from "firebase/auth";

export interface ChooseTypes {
  choose: string;
  setChoose: React.Dispatch<React.SetStateAction<string>>;
}

export interface LinkContextType {
  links: string[];
  setLinks: React.Dispatch<React.SetStateAction<string[]>>;
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
