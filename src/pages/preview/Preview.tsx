import MainInfo from "../../components/desktopAdder/MainInfo";

const Preview = () => {
  return (
    <div className="flex flex-col mt-8 md:-mt-20 items-center">
      <div className="bg-white px-10 pb-14 rounded-lg flex flex-col items-center shadow-lg">
        <MainInfo />
      </div>
    </div>
  );
};

export default Preview;
