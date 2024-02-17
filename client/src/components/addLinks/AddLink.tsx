import lines from "../../assets/lines.svg";
import github from "../../assets/icon-github-gray.svg";
import arrowDown from "../../assets/arrowDown.svg";
import link from "../../assets/icon-link.svg";

const AddLink = () => {
  return (
    <div className=" bg-whiteBold rounded-xl p-4 mt-6">
      <div className="flex justify-between items-center text-blackLight">
        <div className="flex items-center gap-2 font-bold">
          <img src={lines} alt="two lines icon" />
          <h3>Links #1</h3>
        </div>
        <p>Remove</p>
      </div>
      <div className="my-2">
        <span className="text-xs">Platform</span>
        <div className="flex items-center justify-between bg-white p-3 mt-1 text-darkGray rounded-lg border-[1px] border-greyLight">
          <div className="flex items-center gap-2">
            <img src={github} alt="github icon" />
            <h4>GitHub</h4>
          </div>
          <img src={arrowDown} alt="arrow down" />
        </div>
      </div>
      <div className="mt-2">
        <span className="text-xs">Link</span>
        <div className="flex items-center gap-2 bg-white p-3 mt-1 text-darkGray rounded-lg border-[1px] border-greyLight">
          <img src={link} alt="link icon" />
          <input
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
