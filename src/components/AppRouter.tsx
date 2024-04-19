import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Play from "./Play";
import App from "../App";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/play" element={<Play />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
