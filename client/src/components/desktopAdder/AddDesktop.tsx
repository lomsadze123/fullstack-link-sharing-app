import user from "../../assets/userimage.png";

const AddDesktop = ({ links }: { links: string[] }) => {
  console.log(links);
  const colors: { [key: string]: string } = {
    GitHub: "bg-[#1A1A1A]",
    YouTube: "bg-[#EE3939]",
    LinkedIn: "bg-[#2D68FF]",
    Facebook: "bg-[#316FF6]",
    "Frontend Mentor": "bg-[#FFF]",
  };

  return (
    <div className="lg:bg-white lg:grow lg:rounded-lg lg:flex lg:flex-col lg:items-center lg:bg-phone lg:bg-no-repeat lg:bg-center lg:h-[834px]">
      <div className="lg:mt-[165px]">
        <img
          className="lg:w-[104px] lg:h-[104px]"
          src={user}
          alt="user image"
        />
      </div>
      <h2 className="text-2xl px-4 font-bold bg-white text-blackMedium mt-2">
        Ben Wright
      </h2>
      <p className="text-blackLight bg-white">ben@example.com</p>
      {links.map((link, index) => (
        <div
          key={link + index}
          className={`${
            colors[link]
          } lg:text-white lg:w-[235px] lg:py-[9px] lg:px-3 lg:rounded-lg lg:flex lg:justify-between ${
            index === 0 ? "lg:mt-[47px]" : "lg:mt-[22px]"
          }`}
        >
          <h2>{link}</h2>
          <p>--</p>
        </div>
      ))}
    </div>
  );
};

export default AddDesktop;
