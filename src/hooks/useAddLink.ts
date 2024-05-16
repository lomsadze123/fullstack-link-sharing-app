import { useEffect, useState } from "react";
import useGetCollections from "./useGetCollections";
import { useLinkContext } from "../context/LinkContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { firestore } from "../firebase/firebase";

const useAddLink = () => {
  const { number, setNumber, user, setChoose, choose } = useLinkContext();
  const [add, setAdd] = useState(false);
  const [linkId, setLinkId] = useState("");
  const [linkAndProvider, setLinkAndProvider] = useState({
    link: "",
    provider: "GitHub",
  });
  const { links } = useGetCollections();

  useEffect(() => {
    setNumber([1]);
    if (links && links.docs.length > 0) {
      setChoose([links.docs[0].data().provider]);
    } else {
      setChoose([]);
    }
  }, [links]);

  const handleUpdate = async () => {
    const colRef = collection(firestore, "links");
    try {
      const docRef = doc(colRef, linkId);
      await updateDoc(docRef, {
        link: linkAndProvider.link,
        provider: linkAndProvider.provider || "GitHub",
      });
      console.log("Link updated with new data:", linkAndProvider.link);
    } catch (error) {
      console.log("Error updating link:", error);
    }
  };

  const linkAddition = linkAndProvider.provider
    ? { ...linkAndProvider }
    : { ...linkAndProvider, provider: "GitHub" };

  const notify = () => toast("Link Added successfully!");

  const addLinkAndProvider = async () => {
    const colRef = collection(firestore, "links");
    try {
      if (linkAndProvider.link) {
        linkId !== "-1"
          ? handleUpdate()
          : await addDoc(colRef, { ...linkAddition, owner: user?.uid });
        setLinkAndProvider({
          link: "",
          provider: "",
        });
        setAdd(false);
        setLinkId("");
        notify();
      }
    } catch (error) {
      console.log("Error from adding link and provider", error);
    }
  };

  return {
    number,
    user,
    choose,
    add,
    setAdd,
    linkId,
    linkAndProvider,
    setLinkId,
    setLinkAndProvider,
    links,
    setChoose,
    addLinkAndProvider,
  };
};

export default useAddLink;
