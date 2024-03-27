import "./App.css";
import { Box, Typography } from "@mui/material";

export default function App() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function handleClick(item: number) {
    console.log(item);
  }
  return (
    <Box className="container">
      <Typography variant="h3"> Tic Tac Toe </Typography>
      <Typography variant="h5">Player X's turn </Typography>
      <Box className="game-layout">
        {items.map((item) => {
          return (
            <Box className="items" onClick={() => handleClick(item)}>
              {" "}
              {item}{" "}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
