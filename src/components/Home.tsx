import { Box, Button, Typography } from "@mui/material";
import Input from "@mui/joy/Input";
export default function Home() {
  return (
    <Box className="container">
      <h2 className="flex flex-col text-white-text w-11/12 h-1/2 bg-white-color ">
        <Typography variant="h3">Enter Player names</Typography>
        <Input
          placeholder="Type in here…"
          variant="outlined"
          className="bg-black"
        />
        <button className="w-full h-10 rounded-3xl bg-white-text text-[#edf5fd]">
          Start Game
        </button>
      </h2>
    </Box>
  );
}
