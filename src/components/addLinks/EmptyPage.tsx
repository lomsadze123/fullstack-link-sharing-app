import illustrationEmpty from "../../assets/illustration-empty.svg";

const EmptyPage = () => {
  return (
    <div className="bg-whiteBold text-center px-4 py-8 mt-6 md:py-14">
      <img
        className="w-full max-w-[124.77px] h-auto mx-auto md:max-w-[249.53px]"
        src={illustrationEmpty}
        alt="illustration empty icon"
      />
      <h3 className="text-blackMedium text-2xl font-bold my-6 md:text-[32px] md:my-10">
        Let's get you started
      </h3>
      <p className="text-blackLight max-w-[488px] mx-auto">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We're here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};

export default EmptyPage;
