import platform from "../../data/SocialData";

interface Types {
  setChoose: React.Dispatch<React.SetStateAction<string>>;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
  setLinks: React.Dispatch<React.SetStateAction<string[]>>;
  number: number;
  links: string[];
}

const ChoosePlatform = ({
  setChoose,
  setClick,
  setActive,
  active,
  setLinks,
  number,
  links,
}: Types) => {
  const handleChoose = (title: string, index: number) => {
    setChoose(title);
    setActive(index);
    setClick(false);

    setLinks((prevLinks) => {
      if (prevLinks.length === number) {
        console.log("title", title);

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
    <ul className="px-6 bg-white absolute w-full top-[65px] rounded-lg shadow-chooseShadow">
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
