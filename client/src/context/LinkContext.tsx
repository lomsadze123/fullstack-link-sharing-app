import React, { createContext, useContext, useState, ReactNode } from "react";

interface LinkContextType {
  links: string[];
  setLinks: React.Dispatch<React.SetStateAction<string[]>>;
  number: number[];
  setNumber: React.Dispatch<React.SetStateAction<number[]>>;
  choose: string;
  setChoose: React.Dispatch<React.SetStateAction<string>>;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

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
  const [links, setLinks] = useState<string[]>([]);
  const [number, setNumber] = useState<number[]>([]);
  const [choose, setChoose] = useState("GitHub");
  const [active, setActive] = useState(0);

  const contextValue: LinkContextType = {
    links,
    setLinks,
    number,
    setNumber,
    choose,
    setChoose,
    active,
    setActive,
  };

  return (
    <LinkContext.Provider value={contextValue}>{children}</LinkContext.Provider>
  );
};
