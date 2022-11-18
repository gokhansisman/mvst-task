import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import RepositorySearch from "./pages/RepositorySearch";
import UserSearch from "./pages/UserSearch";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<UserSearch />} />
        <Route path="/:login" element={<RepositorySearch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
