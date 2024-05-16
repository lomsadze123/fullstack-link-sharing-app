import { createContext, useContext, useState, ReactNode } from "react";
import { LinkContextType } from "../types/Types";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

// Create the LinkContext
const LinkContext = createContext<LinkContextType | undefined>(undefined);

export const useLinkContext = () => {
  const context = useContext(LinkContext);
  if (!context) {
    throw new Error("useLinkContext must be used within a LinkProvider");
  }
  return context;
};

interface LinkProviderProps {
  children: ReactNode;
}

export const LinkProvider = ({ children }: LinkProviderProps) => {
  const [number, setNumber] = useState<number[]>([]);
  const [choose, setChoose] = useState<string[]>(["GitHub"]);
  const [active, setActive] = useState(0);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [user, loading] = useAuthState(auth);
  const [imageURL, setImageURL] = useState("");

  const contextValue: LinkContextType = {
    number,
    setNumber,
    choose,
    setChoose,
    active,
    setActive,
    userInfo,
    setUserInfo,
    user,
    loading,
    imageURL,
    setImageURL,
  };

  return (
    <LinkContext.Provider value={contextValue}>{children}</LinkContext.Provider>
  );
};
