import SaveButton from "../saveButton/SaveButton";
import AddLink from "./AddLink";
import Empty from "./EmptyPage";
import useAddLink from "../../hooks/useAddLink";

const Adder = () => {
  const {
    number,
    choose,
    add,
    setAdd,
    linkAndProvider,
    setLinkId,
    setLinkAndProvider,
    links,
    setChoose,
    addLinkAndProvider,
  } = useAddLink();

  const addNewLink = () => {
    return (
      <AddLink
        linkAndProvider={linkAndProvider}
        number={(links && links.docs.length + 1) ?? 0}
        forFilter={""}
        setLinkAndProvider={setLinkAndProvider}
        linkId={"-1"}
        setLinkId={setLinkId}
      />
    );
  };

  const renderLinksAndProviders = () => {
    if ((links && links.docs && links.docs.length > 0) || choose.length > 0) {
      return links?.docs.map((item, index) => (
        <AddLink
          linkAndProvider={linkAndProvider}
          key={item.id}
          number={index + 1}
          forFilter={item.data()?.link || ""}
          setLinkAndProvider={setLinkAndProvider}
          linkId={item.id}
          setLinkId={setLinkId}
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
