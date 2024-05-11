import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import AddLinks from "./pages/addLinks/AddLinks";
import Header from "./components/header/Header";
import Profile from "./pages/profile/Profile";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";

const App = () => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  console.log(user);

  if (!loading && !user && location.pathname !== "/") {
    return <Navigate to="/" />;
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Auth />} />

        <Route path="/addLinks" element={<AddLinks />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
