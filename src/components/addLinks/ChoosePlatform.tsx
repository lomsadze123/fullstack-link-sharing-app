import { useLinkContext } from "../../context/LinkContext";
import platform from "../../data/SocialData";

interface Types {
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
  setLinks: React.Dispatch<React.SetStateAction<string[]>>;
  number: number;
}

const ChoosePlatform = ({
  setClick,
  setActive,
  active,
  setLinks,
  number,
}: Types) => {
  const { setChoose } = useLinkContext();
  const handleChoose = (title: string, index: number) => {
    setChoose((prevChoose) => {
      const updatedChoose = [...prevChoose];
      updatedChoose[number - 1] = title;
      return updatedChoose;
    });

    setActive(index);
    setClick(false);

    setLinks((prevLinks) => {
      if (prevLinks.length === number) {
        return prevLinks.map((link, i) =>
          i === prevLinks.length - 1 ? title : link
        );
      } else {
        const updatedLinks = [...prevLinks];
        updatedLinks[number - 1] = title;

        return updatedLinks;
      }
    });
  };

  return (
    <ul className="px-6 bg-white absolute z-10 w-full top-[65px] rounded-lg shadow-chooseShadow">
      {platform.map((platform, index) => (
        <li
          onClick={() => handleChoose(platform.name, index)}
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
