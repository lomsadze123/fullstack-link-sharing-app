import { useLinkContext } from "../../context/LinkContext";
import platform from "../../data/SocialData";
import { ChoosePlatformTypes } from "../../types/Types";

const ChoosePlatform = ({
  active,
  setLinkAndProvider,
  number,
  setClick,
  setActive,
}: ChoosePlatformTypes) => {
  const { setChoose } = useLinkContext();

  const handleChoose = (title: string, index: number) => {
    setChoose((prevChoose) => {
      const updatedChoose = [...prevChoose];
      updatedChoose[number - 1] = title;
      return updatedChoose;
    });
    setClick(false);
    setActive(index);
  };

  return (
    <ul className="px-6 bg-white absolute z-10 w-full top-[65px] rounded-lg shadow-chooseShadow">
      {platform.map((platform, index) => (
        <li
          onClick={() => {
            handleChoose(platform.name, index);
            setLinkAndProvider((prevState) => ({
              ...prevState,
              provider: platform.name,
            }));
          }}
          key={platform.name}
          className="border-b-[1px] border-b-greyLight py-3 lg:cursor-pointer flex items-center gap-3"
        >
          <img
            src={active === index ? platform.active : platform.icon}
            alt={platform.name}
          />

          <span>{platform.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default ChoosePlatform;
