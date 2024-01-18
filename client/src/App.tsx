import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import AddLinks from "./pages/addLinks/AddLinks";
import Header from "./components/header/Header";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/addLinks" element={<AddLinks />} />
      </Routes>
    </div>
  );
};

export default App;
