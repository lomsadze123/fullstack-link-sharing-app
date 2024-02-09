import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import AddLinks from "./pages/addLinks/AddLinks";
import Header from "./components/header/Header";
import immm from "./assets/icon-facebook-gray.svg";

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

      <h1>img not appearr</h1>
      <img src="./assets/icon-facebook-gray.svg" alt="" />
      <h1>img appear</h1>
      <img src={immm} alt="" />
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
