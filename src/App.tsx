import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import AddLinks from "./pages/addLinks/AddLinks";
import Header from "./components/header/Header";
import Profile from "./pages/profile/Profile";
import { useLinkContext } from "./context/LinkContext";
import Preview from "./pages/preview/Preview";

const App = () => {
  const location = useLocation();
  const { user, loading } = useLinkContext();

  if (!loading && !user && location.pathname !== "/") {
    return <Navigate to="/" />;
  }

  if (!loading && user && location.pathname === "/") {
    return <Navigate to="/addLinks" />;
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Auth />} />

        <Route path="/addLinks" element={<AddLinks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </div>
  );
};

export default App;
