import { addDoc, collection } from "firebase/firestore";
import { useLinkContext } from "../../context/LinkContext";
import SaveButton from "../saveButton/SaveButton";
import UploadImage from "./UploadImage";
import UserForm from "./UserForm";
import { firestore } from "../../firebase/firebase";
import { toast } from "react-toastify";

const ProfileDetails = () => {
  const { userInfo, user, setUserInfo } = useLinkContext();
  const notify = () => toast("User information saved!");

  const handleSaveUserInfo = async () => {
    const colRef = collection(firestore, "users");
    try {
      if (userInfo.firstName && userInfo.lastName && userInfo.email) {
        await addDoc(colRef, { ...userInfo, owner: user?.uid });
        console.log("successfully added user info");
        setUserInfo({
          firstName: "",
          lastName: "",
          email: "",
        });
        notify();
      }
    } catch (error) {
      console.log("Error while saving user info", error);
    }
  };

  return (
    <main className="bg-white rounded-lg p-6 md:p-8 lg:w-[665px]">
      <div className="mb-16">
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
      </div>
      <SaveButton handleSaveUserInfo={handleSaveUserInfo} />
    </main>
  );
};

export default ProfileDetails;
