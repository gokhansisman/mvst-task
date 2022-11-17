import { BrowserRouter, Routes, Route } from "react-router-dom";
import RepositorySearch from "./pages/RepositorySearch";
import UserSearch from "./pages/UserSearch";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserSearch />} />
        <Route path="/:login" element={<RepositorySearch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
