import user from "../../assets/userimage.png";

const AddDesktop = () => {
  return (
    <div className="lg:bg-white lg:grow lg:rounded-lg lg:flex lg:flex-col lg:items-center lg:bg-phone lg:bg-no-repeat lg:bg-center lg:h-[834px]">
      <div className="lg:mt-[165px]">
        <img className="lg:w-[104px] lg:h-[104px]" src={user} alt="" />
      </div>
      <h2 className="text-2xl px-4 font-bold bg-white text-blackMedium mt-2">
        Ben Wright
      </h2>
      <p className="text-blackLight bg-white">ben@example.com</p>
      <div className="lg:bg-blackGray lg:text-white lg:w-[235px] lg:py-[9px] lg:px-3 lg:rounded-lg lg:flex lg:justify-between lg:mt-[47px]">
        <h2>github</h2>
        <p>--</p>
      </div>
      <div className="lg:bg-blackGray lg:text-white lg:w-[235px] lg:py-[9px] lg:px-3 lg:rounded-lg lg:flex lg:justify-between lg:mt-[22px]">
        <h2 className="lg:text-white">github</h2>
        <p>--</p>
      </div>
      <div className="lg:bg-blackGray lg:text-white lg:w-[235px] lg:py-[9px] lg:px-3 lg:rounded-lg lg:flex lg:justify-between lg:mt-[22px]">
        <h2 className="lg:text-white">github</h2>
        <p>--</p>
      </div>
      <div className="lg:bg-blackGray lg:text-white lg:w-[235px] lg:py-[9px] lg:px-3 lg:rounded-lg lg:flex lg:justify-between lg:mt-[22px]">
        <h2 className="lg:text-white">github</h2>
        <p>--</p>
      </div>
    </div>
  );
};

export default AddDesktop;
