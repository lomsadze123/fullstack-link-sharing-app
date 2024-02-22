import upload from "../../assets/icon-upload-image.svg";

const ProfileDetails = () => {
  return (
    <main className="bg-white rounded-lg p-6 md:p-8 lg:w-[665px]">
      <div>
        <h2 className="text-2xl text-blackMedium font-bold md:text-[32px]">
          Profile Details
        </h2>
        <p className="text-blackLight mt-2 md:mt-4">
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <UploadImage />
      <UserForm />
    </main>
  );
};

const UploadImage = () => {
  return (
    <div className="bg-whiteBold p-4 mt-7 md:mt-10 md:flex md:justify-between md:items-center md:p-6">
      <h3 className="text-blackLight mb-4 md:m-0">Profile picture</h3>
      <div className="md:flex md:items-center md:gap-5">
        <form className="size-[193px]">
          <label
            className="px-9 py-[60.5px] bg-purpleLight block rounded-xl lg:cursor-pointer"
            htmlFor="myFile"
          >
            <img
              className="mx-auto mb-2"
              src={upload}
              alt="upload image icon"
            />{" "}
            <span className="text-purple font-semibold">+ Upload Image</span>
          </label>
          <input className="hidden" type="file" id="myFile" name="filename" />
          {/* <input type="submit" /> */}
        </form>
        <p className="text-xs text-blackLight mt-5 md:m-0 md:max-w-[127px]">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>
    </div>
  );
};

const UserForm = () => {
  return (
    <form className="bg-whiteBold text-blackLight p-4 space-y-2 mt-6">
      <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center">
        <label className="text-xs md:text-base" htmlFor="first-name">
          First name*
        </label>
        <input
          className="w-full outline-none border-[1px] rounded-lg border-greyLight py-[11px] px-4 md:w-[344px] text-blackMedium"
          type="text"
          id="first-name"
        />
      </div>
      <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center">
        <label className="text-xs md:text-base" htmlFor="last-name">
          Last name*
        </label>
        <input
          className="w-full outline-none border-[1px] rounded-lg border-greyLight py-[11px] px-4 md:w-[344px] text-blackMedium"
          type="text"
          id="last-name"
        />
      </div>
      <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center">
        <label className="text-xs md:text-base" htmlFor="email">
          Email
        </label>
        <input
          className="w-full outline-none border-[1px] rounded-lg border-greyLight py-[11px] px-4 md:w-[344px] text-blackMedium"
          type="email"
          id="email"
        />
      </div>
    </form>
  );
};

export default ProfileDetails;
