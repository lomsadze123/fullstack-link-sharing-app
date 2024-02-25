import lines from "../../assets/lines.svg";
import arrowDown from "../../assets/arrowDown.svg";
import link from "../../assets/icon-link.svg";
import ChoosePlatform from "./ChoosePlatform";
import platform from "../../data/SocialData";
import { useLinkContext } from "../../context/LinkContext";
import { useState } from "react";

interface Types {
  number: number;
  forFilter: number;
}

const AddLink = ({ number, forFilter }: Types) => {
  const { setNumber, setLinks } = useLinkContext();

  const [click, setClick] = useState(false);
  const [choose, setChoose] = useState("GitHub");
  const [active, setActive] = useState(0);
  const findImage = platform.find((item) => item.name === choose);

  const handleRemove = () => {
    setNumber((prevNum) =>
      prevNum.filter((item, index) => {
        if (item === forFilter) {
          // Remove the corresponding link from setLinks as well
          setLinks((prevLinks) =>
            prevLinks.filter((_, linkIndex) => linkIndex !== index)
          );
          return false; // Filter out the current number
        }
        return true; // Keep other numbers
      })
    );
  };

  return (
    <div className=" bg-whiteBold rounded-xl p-4 mt-6">
      <div className="flex justify-between items-center text-blackLight">
        <div className="flex items-center gap-2 font-bold">
          <img src={lines} alt="two lines icon" />
          <h3>Links #{number}</h3>
        </div>
        <button onClick={handleRemove}>Remove</button>
      </div>
      <div className="my-2">
        <span className="text-xs">Platform</span>
        <div className="relative">
          <button
            onClick={() => setClick(!click)}
            className="w-full flex items-center justify-between bg-white p-3 mt-1 text-darkGray rounded-lg border-[1px] border-greyLight"
          >
            <div className="flex items-center gap-2">
              <img src={findImage?.icon} alt="github icon" />
              <h4>{choose}</h4>
            </div>
            <img src={arrowDown} alt="arrow down" />
          </button>
          {click && (
            <ChoosePlatform
              setChoose={setChoose}
              setClick={setClick}
              setActive={setActive}
              active={active}
              setLinks={setLinks}
              number={number}
            />
          )}
        </div>
      </div>
      <div className="mt-2">
        <span className="text-xs">Link</span>
        <div className="flex items-center gap-2 bg-white p-3 mt-1 text-darkGray rounded-lg border-[1px] border-greyLight">
          <img src={link} alt="link icon" />
          <input
            onChange={(e) => console.log(e.target.value)}
            type="text"
            placeholder="e.g. https://www.github.com/lomsadze123"
            className="w-full outline-0"
          />
        </div>
      </div>
    </div>
  );
};

export default AddLink;
