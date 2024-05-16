import arrowRight from "../../assets/icon-arrow-right.svg";
import platform from "../../data/SocialData";
import useUserInfo from "../../hooks/useUserInfo";

const MainInfo = () => {
  const { userInfo, imageURL, colors, getUserInfo, checkForChoose, links } =
    useUserInfo();
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
          } text-white w-[235px] py-[9px] px-3 rounded-lg ${
            index === 0 ? "mt-[47px]" : "mt-[22px]"
          }`}
        >
          <a
            className="flex justify-between w-full"
            href={links?.docs[0] ? links?.docs[0].data().link : "#"}
            target="_blank"
          >
            <div className="flex items-center gap-2">
              <img
                src={platform.find((item) => item.name === link)?.whiteIcon}
                alt={platform[index].name}
              />
              <h2>{link}</h2>
            </div>
            <img src={arrowRight} alt="" />
          </a>
        </div>
      ))}
    </>
  );
};

export default MainInfo;
