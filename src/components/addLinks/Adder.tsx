import { addDoc, collection, query } from "firebase/firestore";
import { useLinkContext } from "../../context/LinkContext";
import SaveButton from "../saveButton/SaveButton";
import AddLink from "./AddLink";
import Empty from "./EmptyPage";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const Adder = () => {
  const { number, setNumber, user, setChoose, choose } = useLinkContext();
  const [add, setAdd] = useState(false);
  const [linkAndProvider, setLinkAndProvider] = useState({
    link: "",
    provider: "",
  });
  const colRef = collection(firestore, "links");
  const queryCol = query(colRef);
  const [links] = useCollection(queryCol);

  const addNewLink = () => {
    // setNumber((prevNum) => [
    //   ...prevNum,
    //   prevNum.length === 0 ? 1 : prevNum[prevNum.length - 1] + 1,
    // ]);

    return (
      <AddLink
        linkAndProvider={linkAndProvider}
        number={(links && links.docs.length + 1) ?? 0}
        forFilter={""}
        setLinkAndProvider={setLinkAndProvider}
      />
    );
  };

  console.log("Choose", choose);

  useEffect(() => {
    setNumber([1]);
  }, []);

  const addLinkAndProvider = async () => {
    try {
      await addDoc(colRef, { ...linkAndProvider, owner: user?.uid });
      setLinkAndProvider({
        link: "",
        provider: "",
      });
      setAdd(false);

      console.log("link and provider", linkAndProvider);
    } catch (error) {
      console.log("Error from adding link and provider", error);
    }
  };

  const renderLinksAndProviders = () => {
    if (links?.docs[0].data()) {
      return links?.docs.map((item, index) => (
        <AddLink
          linkAndProvider={linkAndProvider}
          key={item.id}
          number={index + 1}
          forFilter={item.data().link}
          setLinkAndProvider={setLinkAndProvider}
        />
      ));
    } else {
      return <Empty />;
    }
  };

  const handleAddNewLink = () => {
    setAdd(true);
    if (!(links && links?.docs.length < choose.length))
      setChoose((prev) => [...prev, "GitHub"]);
  };

  return (
    <div className="bg-white rounded-lg p-6 lg:w-[665px]">
      <div className="mb-16">
        <div>
          <h2 className="text-blackMedium text-2xl font-bold md:text-[32px]">
            Customize your links
          </h2>
          <p className="text-blackLight mt-3 mb-8 md:mt-4 md:mb-10">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
          <button
            onClick={handleAddNewLink}
            className="w-full text-purple font-bold border-purple border-[1px] rounded-lg py-[11px]"
          >
            + Add new link
          </button>
        </div>
        {renderLinksAndProviders()}
        {add && addNewLink()}
      </div>
      <SaveButton number={number} addLinkAndProvider={addLinkAndProvider} />
    </div>
  );
};

export default Adder;
