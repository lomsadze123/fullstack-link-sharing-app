import AddDesktop from "../../components/addLinks/AddDesktop";
import ProfileDetails from "../../components/profile/ProfileDetails";
import useWidth from "../../hooks/useWidth";

const Profile = () => {
  const width = useWidth();

  return (
    <main className="m-4 md:mt-8 lg:flex lg:gap-5 lg:mx-0">
      {width >= 1024 && <AddDesktop />}
      <ProfileDetails />
    </main>
  );
};

export default Profile;
