import { useEffect, useState } from "react";
import { useLinkContext } from "../context/LinkContext";
import platform from "../data/SocialData";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

interface Types {
  number: number;
  linkId: string;
  setLinkId: React.Dispatch<React.SetStateAction<string>>;
}

export const useLinks = ({ number, linkId, setLinkId }: Types) => {
  const { choose, setChoose } = useLinkContext();

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

  return {
    active,
    setActive,
    findImage,
    handleAdd,
    handleDelete,
    choose,
    click,
    setClick,
  };
};
