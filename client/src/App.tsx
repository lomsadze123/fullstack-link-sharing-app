import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import AddLinks from "./pages/addLinks/AddLinks";
import Header from "./components/header/Header";
import ProfileDetails from "./pages/profile/Profile";

const App = () => {
  const location = useLocation();

  return (
    <div className="max-w-[1440px] mx-auto">
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Auth />} />

        <Route path="/addLinks" element={<AddLinks />} />

        <Route path="/profile" element={<ProfileDetails />} />
      </Routes>
    </div>
  );
};

export default App;
