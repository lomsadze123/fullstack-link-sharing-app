import AddDesktop from "../../components/desktopAdder/AddDesktop";
import Adder from "../../components/addLinks/Adder";
import useWidth from "../../hooks/useWidth";
import { useState } from "react";

const AddLinks = () => {
  const width = useWidth();
  const [links, setLinks] = useState<string[]>([]);

  return (
    <main className="m-4 md:mt-8 lg:flex lg:gap-5 lg:mx-0">
      {width >= 1024 && <AddDesktop links={links} />}
      <Adder setLinks={setLinks} links={links} />
    </main>
  );
};

export default AddLinks;
