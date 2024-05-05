import { Box, Button, Typography } from "@mui/material";
import Input from "@mui/joy/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faO, faX } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setOPlayer, setXPlayer } from "../store/slices/userSlice";
// import punchSound from "../sound/punchSound.mp3";
// import bonkSound from "../sound/bonkSound.mp3";

export default function Home() {
  const [Xname, setXname] = useState<string>("");
  const [Oname, setOname] = useState<string>("");
  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch(Xname ? setXPlayer(Xname) : setXPlayer("Player1"));
    dispatch(Oname ? setOPlayer(Oname) : setOPlayer("Player2"));
  };

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
              onChange={(evt) => setXname(evt.target.value)}
            />
          </Box>
          <Box className="flex items-center justify-center  bg-light-bg pl-3">
            <FontAwesomeIcon icon={faO} size="xl" className="inline" />
            <Input
              placeholder="Type in here…"
              variant="outlined"
              className="py-2 ml-3 w-full"
              onChange={(evt) => setOname(evt.target.value)}
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

{
  /*


*/
}
