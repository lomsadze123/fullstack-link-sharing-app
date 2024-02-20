import AddDesktop from "../../components/addLinks/AddDesktop";
import Adder from "../../components/addLinks/Adder";

const AddLinks = () => {
  return (
    <main className="m-4 md:mt-8 lg:flex lg:gap-5">
      <AddDesktop />
      <Adder />
    </main>
  );
};

export default AddLinks;
