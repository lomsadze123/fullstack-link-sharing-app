import logo from "../../assets/logo-devlinks-small.svg";
import mainLogo from "../../assets/logo-devlinks-large.svg";
import linksImg from "../../assets/icon-links-header.svg";
import profileImg from "../../assets/icon-profile-details-header.svg";
import eyeImg from "../../assets/icon-preview-header.svg";
import useWidth from "../../hooks/useWidth";
import { NavLink } from "react-router-dom";

const Header = () => {
  const width = useWidth();

  return (
    <header className="px-6 py-4 bg-white">
      <nav>
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
          <li className="border-[1px] border-purple rounded-lg py-[11px] px-4 md:px-[27px]">
            {width > 768 ? (
              <span className="font-semibold text-purple">Preview</span>
            ) : (
              <img src={eyeImg} alt="preview icon" />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
