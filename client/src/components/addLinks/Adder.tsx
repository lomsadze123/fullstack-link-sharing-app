import { useState } from "react";
import AddLink from "./AddLink";
import Empty from "./EmptyPage";

const Adder = ({
  setLinks,
  links,
}: {
  setLinks: React.Dispatch<React.SetStateAction<string[]>>;
  links: string[];
}) => {
  const [number, setNumber] = useState<number[]>([]);

  const addNewLink = () => {
    setNumber([
      ...number,
      number.length === 0 ? 1 : number[number.length - 1] + 1,
    ]);
  };

  return (
    <div className="bg-white rounded-lg p-6 lg:w-[665px]">
      <div>
        <h2 className="text-blackMedium text-2xl font-bold md:text-[32px]">
          Customize your links
        </h2>
        <p className="text-blackLight mt-3 mb-8 md:mt-4 md:mb-10">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <button
          onClick={addNewLink}
          className="w-full text-purple font-bold border-purple border-[1px] rounded-lg py-[11px]"
        >
          + Add new link
        </button>
      </div>

      {number.length > 0 ? (
        number.map((item, index) => {
          return (
            <AddLink
              key={item}
              number={index + 1}
              forFilter={item}
              setNumber={setNumber}
              setLinks={setLinks}
              links={links}
            />
          );
        })
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Adder;
