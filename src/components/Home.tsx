import { Box, Button, Typography } from "@mui/material";
import Input from "@mui/joy/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faO, faX } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setOuser, setXuser } from "../store/slices/userSlice";
// import punchSound from "../sound/punchSound.mp3";
// import bonkSound from "../sound/bonkSound.mp3";

export default function Home() {
  const [X, setX] = useState<string>("");
  const [O, setO] = useState<string>("");
  const dispatch = useDispatch();
  const handleDispatch = () => {
    dispatch(X ? setXuser(X) : setXuser("Player1"));
    dispatch(O ? setOuser(O) : setOuser("Player2"));
  };
  // function Play() {
  //   new Audio(punchSound).play();
  // }
  return (
    <Box className="home-container">
      <h2 className="home-layout ">
        <Box className="self-center text-3xl">Enter Player names</Box>
        <Box>
          <Box className="flex items-center justify-center mb-6 bg-light-bg pl-3">
            <FontAwesomeIcon icon={faX} size="xl" />
            <Input
              placeholder="Type in here…"
              variant="outlined"
              className="py-2 ml-3 w-full "
              onChange={(evt) => setX(evt.target.value)}
            />
          </Box>
          <Box className="flex items-center justify-center  bg-light-bg pl-3">
            <FontAwesomeIcon icon={faO} size="xl" className="inline" />
            <Input
              placeholder="Type in here…"
              variant="outlined"
              className="py-2 ml-3 w-full"
              onChange={(evt) => setO(evt.target.value)}
            />
          </Box>
        </Box>
        <Link to={"/play"} onClick={handleDispatch}>
          <button className="px-5 h-10 rounded-3xl bg-light-text text-[#edf5fd] text-xl">
            Start Game
          </button>
        </Link>
      </h2>
    </Box>
  );
}
