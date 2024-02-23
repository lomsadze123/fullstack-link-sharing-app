import platform from "../../data/SocialData";

interface Types {
  setChoose: React.Dispatch<React.SetStateAction<string>>;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  active: number;
}

const ChoosePlatform = ({ setChoose, setClick, setActive, active }: Types) => {
  const handleChoose = (title: string, index: number) => {
    setChoose(title);
    setActive(index);
    setClick(false);
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
