import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "./Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
