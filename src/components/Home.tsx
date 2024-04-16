import { Box, Button, Typography } from "@mui/material";
import Input from "@mui/joy/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faO, faX } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";
export default function Home() {
  return (
    <Box className="home-container">
      <h2 className="home-layout ">
        <Box className="self-center text-3xl">Enter Player names</Box>
        <Box>
          <Box className="flex items-center justify-center mb-5 bg-white-bg pl-3">
            <FontAwesomeIcon icon={faX} size="xl" />
            <Input
              placeholder="Type in here…"
              variant="outlined"
              className="py-2 ml-3 w-full "
            />
          </Box>
          <Box className="flex items-center justify-center  bg-white-bg pl-3">
            <FontAwesomeIcon icon={faO} size="xl" className="inline" />
            <Input
              placeholder="Type in here…"
              variant="outlined"
              className="py-2 ml-3 w-full"
            />
          </Box>
        </Box>
        <Link to={"/"}>
          <button className="  px-5 h-10 rounded-3xl bg-white-text text-[#edf5fd]">
            Start Game
          </button>
        </Link>
      </h2>
    </Box>
  );
}
