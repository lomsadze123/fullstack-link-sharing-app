import { useLinkContext } from "../../context/LinkContext";

const UserForm = () => {
  const { userInfo, setUserInfo } = useLinkContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo, // Spread the existing user info
      [name]: value, // Update the specific field
    });
  };

  return (
    <form className="bg-whiteBold text-blackLight p-4 space-y-2 mt-6">
      <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center">
        <label className="text-xs md:text-base" htmlFor="first-name">
          First name*
        </label>
        <input
          className="w-full outline-none border-[1px] rounded-lg border-greyLight py-[11px] px-4 md:w-[344px] text-blackMedium"
          type="text"
          name="firstName"
          value={userInfo.firstName}
          id="first-name"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center">
        <label className="text-xs md:text-base" htmlFor="last-name">
          Last name*
        </label>
        <input
          className="w-full outline-none border-[1px] rounded-lg border-greyLight py-[11px] px-4 md:w-[344px] text-blackMedium"
          type="text"
          name="lastName"
          value={userInfo.lastName}
          id="last-name"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center">
        <label className="text-xs md:text-base" htmlFor="email">
          Email
        </label>
        <input
          className="w-full outline-none border-[1px] rounded-lg border-greyLight py-[11px] px-4 md:w-[344px] text-blackMedium"
          type="email"
          name="email"
          value={userInfo.email}
          id="email"
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
};

export default UserForm;
