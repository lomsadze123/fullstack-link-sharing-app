import arrowRight from "../../assets/icon-arrow-right.svg";
import platform from "../../data/SocialData";
import { useLinkContext } from "../../context/LinkContext";
import useGetCollections from "../../hooks/useGetCollections";
import { useEffect } from "react";

const MainInfo = () => {
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
    setChoose([links?.docs[0].data().provider]);
  }, [links]);

  const checkForChoose = choose.length === 1 ? choose : choose.slice(0, -1);

  return (
    <>
      <div
        className={`${
          location.pathname === "/preview"
            ? "lg:mt-10 pt-8 lg:pt-0"
            : "lg:mt-[165px]"
        }`}
      >
        {imageURL ? (
          <img
            className="w-[104px] h-[104px]  rounded-full"
            src={imageURL}
            alt="user image"
          />
        ) : (
          <div className="lg:w-[104px] lg:h-[104px] lg:rounded-full lg:bg-[#EEEEEE]"></div>
        )}
      </div>
      <h2 className="text-xl md:text-2xl px-4 font-bold bg-white text-blackMedium mt-2 h-8">
        {`${
          (getUserInfo()?.firstName || userInfo.firstName) +
          " " +
          (getUserInfo()?.lastName || userInfo.lastName)
        }`}
      </h2>
      <p className="text-blackLight bg-white h-6">
        {getUserInfo()?.email || userInfo.email}
      </p>
      {checkForChoose.map((link, index) => (
        <div
          key={link + index}
          className={`${
            colors[link]
          } text-white w-[235px] py-[9px] px-3 rounded-lg flex justify-between ${
            index === 0 ? "mt-[47px]" : "mt-[22px]"
          }`}
        >
          <div className="flex items-center gap-2">
            <img
              src={platform.find((item) => item.name === link)?.whiteIcon}
              alt={platform[index].name}
            />
            <h2>{link}</h2>
          </div>
          <img src={arrowRight} alt="" />
        </div>
      ))}
    </>
  );
};

export default MainInfo;
