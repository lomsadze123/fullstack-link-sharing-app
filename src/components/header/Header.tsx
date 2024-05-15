import logo from "../../assets/logo-devlinks-small.svg";
import mainLogo from "../../assets/logo-devlinks-large.svg";
import linksImg from "../../assets/icon-links-header.svg";
import profileImg from "../../assets/icon-profile-details-header.svg";
import eyeImg from "../../assets/icon-preview-header.svg";
import useWidth from "../../hooks/useWidth";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import useGetCollections from "../../hooks/useGetCollections";

const Header = () => {
  const width = useWidth();
  const singOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const { links } = useGetCollections();

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(links?.docs[0].data().link);
      console.log("Copy link successfully");
    } catch (error) {
      console.log("Error from copy link", error);
    }
  };

  return (
    <header
      className={`px-6 py-4 bg-white ${
        location.pathname === "/preview" && "md:bg-purple"
      }  md:pb-40`}
    >
      <nav>
        <button onClick={singOut}>Sign Out</button>
        {location.pathname !== "/preview" ? (
          <ul className="flex justify-between items-center">
            <NavLink to="/">
              <picture>
                <source media="(min-width: 768px)" srcSet={mainLogo} />
                <img src={logo} alt="devLink logo" />
              </picture>
            </NavLink>
            <div className="flex">
              <NavLink
                to="/addLinks"
                className="px-[27px] py-[11px] md:flex md:gap-2"
              >
                <img src={linksImg} alt="links icon" />
                {width > 768 && <span className="font-semibold">Links</span>}
              </NavLink>
              <NavLink
                to="/profile"
                className="px-[27px] py-[11px] md:flex md:gap-2"
              >
                <img src={profileImg} alt="profile details icon" />
                {width > 768 && (
                  <span className="font-semibold">Profile Details</span>
                )}
              </NavLink>
            </div>
            <li className="border-[1px] border-purple rounded-lg py-[11px] px-4 md:px-0">
              {width > 768 ? (
                <Link
                  to="/preview"
                  className="font-semibold text-purple py-[11px] px-[27px]"
                >
                  Preview
                </Link>
              ) : (
                <Link to="/preview">
                  <img src={eyeImg} alt="preview icon" />
                </Link>
              )}
            </li>
          </ul>
        ) : (
          <ul className="flex items-center justify-between md:bg-white md:px-4 md:py-3 md:rounded-lg">
            <li className="w-full">
              <Link
                to="/profile"
                className="font-semibold text-purple py-[11px] border border-purple px-4 rounded-lg "
              >
                Back to Editor
              </Link>
            </li>
            <li className="font-semibold text-white bg-purple  rounded-lg w-full text-center max-w-[133px]">
              <button
                onClick={handleCopyLink}
                className="w-full block py-[11px]"
              >
                Share Link
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
