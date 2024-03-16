import UploadImage from "./UploadImage";
import UserForm from "./UserForm";

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

export default ProfileDetails;
