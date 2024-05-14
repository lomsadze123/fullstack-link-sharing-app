import lines from "../../assets/lines.svg";
import arrowDown from "../../assets/arrowDown.svg";
import link from "../../assets/icon-link.svg";
import ChoosePlatform from "./ChoosePlatform";
import platform from "../../data/SocialData";
import { useLinkContext } from "../../context/LinkContext";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

interface Types {
  number: number;
  forFilter: string;
  setLinkAndProvider: React.Dispatch<
    React.SetStateAction<{
      link: string;
      provider: string;
    }>
  >;
  linkAndProvider: {
    link: string;
    provider: string;
  };
  linkId: string;
  setLinkId: React.Dispatch<React.SetStateAction<string>>;
}

const AddLink = ({
  number,
  forFilter,
  setLinkAndProvider,
  linkAndProvider,
  linkId,
  setLinkId,
}: Types) => {
  const { setLinks, choose, setChoose } = useLinkContext();

  const [click, setClick] = useState(false);
  const [active, setActive] = useState(0);
  const findImage = platform.find((item) => item.name === choose[number - 1]);

  const handleAdd = () => {
    setClick(!click);

    if (choose.length === number) {
      setChoose((prevChoose) => {
        const updatedChoose = [...prevChoose];
        updatedChoose[updatedChoose.length] = "GitHub";
        return updatedChoose;
      });
    }
  };

  const handleDelete = async (e: any) => {
    const colRef = collection(firestore, "links");

    try {
      const docRef = doc(colRef, linkId);
      if (linkId === "-1") {
        setChoose((prevChoose) => [...prevChoose.slice(0, -1)]);
        e.currentTarget.parentNode?.parentNode?.remove();
      } else {
        await deleteDoc(docRef);
      }

      console.log("link deleted", linkId);
    } catch (error) {
      console.log("Error from delete", error);
    }
  };

  useEffect(() => {
    setLinkId(linkId);
  }, [choose]);

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
              // setChoose={setChoose}
              setClick={setClick}
              setActive={setActive}
              active={active}
              setLinks={setLinks}
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
