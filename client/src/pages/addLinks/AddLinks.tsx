import AddDesktop from "../../components/desktopAdder/AddDesktop";
import Adder from "../../components/addLinks/Adder";
import useWidth from "../../hooks/useWidth";

const AddLinks = () => {
  const width = useWidth();

  return (
    <main className="m-4 md:mt-8 lg:flex lg:gap-5 lg:mx-0">
      {width >= 1024 && <AddDesktop />}
      <Adder />
    </main>
  );
};

export default AddLinks;
