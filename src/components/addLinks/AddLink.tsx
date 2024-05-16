import lines from "../../assets/lines.svg";
import arrowDown from "../../assets/arrowDown.svg";
import link from "../../assets/icon-link.svg";
import ChoosePlatform from "./ChoosePlatform";
import { AddLinkTypes } from "../../types/Types";
import { useLinks } from "../../hooks/useLinks";

const AddLink = ({
  number,
  forFilter,
  setLinkAndProvider,
  linkAndProvider,
  linkId,
  setLinkId,
}: AddLinkTypes) => {
  const {
    active,
    setActive,
    findImage,
    handleAdd,
    handleDelete,
    choose,
    click,
    setClick,
  } = useLinks({ number, linkId, setLinkId });

  return (
    <div className=" bg-whiteBold rounded-xl p-4 mt-6">
      <div className="flex justify-between items-center text-blackLight">
        <div className="flex items-center gap-2 font-bold">
          <img src={lines} alt="two lines icon" />
          <h3>Links #{number}</h3>
        </div>
        <button onClick={handleDelete}>Remove</button>
      </div>
      <div className="my-2">
        <span className="text-xs">Platform</span>
        <div className="relative">
          <button
            onClick={handleAdd}
            className="w-full flex items-center justify-between bg-white p-3 mt-1 text-darkGray rounded-lg border-[1px] border-greyLight"
          >
            <div className="flex items-center gap-2">
              <img
                src={findImage?.icon}
                alt={`${findImage?.name ?? "Github"} icon`}
              />
              <h4>{choose[number - 1]}</h4>
            </div>
            <img src={arrowDown} alt="arrow down" />
          </button>
          {click && (
            <ChoosePlatform
              setClick={setClick}
              setActive={setActive}
              active={active}
              number={number}
              setLinkAndProvider={setLinkAndProvider}
            />
          )}
        </div>
      </div>
      <div className="mt-2">
        <span className="text-xs">Link</span>
        <div className="flex items-center gap-2 bg-white p-3 mt-1 text-darkGray rounded-lg border-[1px] border-greyLight">
          <img src={link} alt="link icon" />
          <input
            onChange={(e) =>
              setLinkAndProvider((prevState) => ({
                ...prevState,
                link: e.target.value,
              }))
            }
            value={linkAndProvider.link || forFilter}
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
