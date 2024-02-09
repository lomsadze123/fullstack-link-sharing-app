import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import AddLinks from "./pages/addLinks/AddLinks";
import Header from "./components/header/Header";

const App = () => {
  const location = useLocation();

  return (
    <div className="">
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <Auth />
            </div>
          }
        />

        <Route path="/addLinks" element={<AddLinks />} />
      </Routes>
    </div>
  );
};

export default App;
