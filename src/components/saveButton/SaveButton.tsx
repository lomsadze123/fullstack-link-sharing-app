const SaveButton = ({ number }: { number?: number[] }) => {
  return (
    <div className="bg-white py-5 border-t border-t-grey-500 fixed bottom-0 left-4 w-[90%] md:static md:w-full md:text-right">
      <button
        className={`w-full py-2 rounded-lg ${
          number?.length === 0 && "bg-opacity-50"
        } bg-purple text-white font-semibold md:w-auto md:px-7`}
      >
        Save
      </button>
    </div>
  );
};

export default SaveButton;
