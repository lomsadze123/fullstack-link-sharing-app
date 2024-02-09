import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import AddLinks from "./pages/addLinks/AddLinks";
import Header from "./components/header/Header";

const App = () => {
  const location = useLocation();

  const image =
    "https://github.com/lomsadze123/audiophile-ecommerce-website/blob/master/src/assets/home/desktop/image-hero.jpg?raw=true";

  return (
    <div className="">
      <img
        src="https://github.com/lomsadze123/audiophile-ecommerce-website/blob/master/src/assets/home/desktop/image-hero.jpg?raw=true"
        alt=""
      />
      <img src={image} alt="" />
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
