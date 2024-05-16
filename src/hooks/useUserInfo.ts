import { useEffect } from "react";
import { useLinkContext } from "../context/LinkContext";
import useGetCollections from "./useGetCollections";

const useUserInfo = () => {
  const { choose, userInfo, imageURL, setChoose } = useLinkContext();
  const { users, links } = useGetCollections();

  const colors: { [key: string]: string } = {
    GitHub: "bg-[#1A1A1A]",
    YouTube: "bg-[#EE3939]",
    LinkedIn: "bg-[#2D68FF]",
    Facebook: "bg-[#316FF6]",
    "Frontend Mentor": "bg-[#9d9d9d]",
  };

  const getUserInfo = () => {
    if (users?.docs[0]) return users?.docs[0].data();
    else return undefined;
  };

  useEffect(() => {
    links?.docs[0] && setChoose([links.docs[0].data().provider]);
  }, [links]);

  const checkForChoose = choose.length === 1 ? choose : choose.slice(0, -1);
  return {
    userInfo,
    imageURL,
    colors,
    getUserInfo,
    checkForChoose,
    links,
  };
};

export default useUserInfo;
