import "./App.css";
import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { addNumbers, addValues, setValues } from "./store/slices/appSlice";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const { numbers } = useAppSelector((state) => state.app);
  const { values } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const [turn, setTurn] = useState<string>("X" || "O");
  const items = values;

  const winning = [
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const handleCheck = () => {
    const isSubset = winning.map((winArray) =>
      winArray.every((num) => numbers.includes(num))
    );
    const isAnySubsetMatch = isSubset.some((subset) => subset);

    //console.log("isSubset", isSubset);
    //console.log("isAnySubsetMatch", isSubset);
    //console.log("numbers.length", numbers.length);

    if (numbers.length > 2) {
      // i check at 2 cuz length started at 0
      if (isAnySubsetMatch) {
        console.log("victory");
      } else {
        console.log("defeat");
      }
    }
  };
  useEffect(() => {
    handleCheck();
  }, [numbers]);

  useEffect(() => {
    dispatch(setValues());
  }, []);

  const handleClick = (num: number) => {
    dispatch(addNumbers(num));
    turn === "X" ? setTurn("O") : setTurn("X");
    dispatch(addValues({ number: num, toShow: turn }));
  };
  return (
    <Box className="container  ">
      <Box className="top-bar">
        <FontAwesomeIcon icon={faMoon} flip="horizontal" size="2xl" />

        <FontAwesomeIcon icon={faArrowRotateLeft} size="2xl" />
      </Box>
      <Box className="text-center w-full">
        <Typography variant="h3">Tic Tac Toe</Typography>
        <Typography variant="h5">Player {turn}'s turn </Typography>
      </Box>
      <Box className="game-layout">
        {items.map((item) => {
          return (
            <Box className="items" onClick={() => handleClick(item.number)}>
              <Box className="text-3xl font-semibold text-white-text">
                {item.toShow}
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box className="flex justify-between w-full">
        <Box className="totel-box">Player1</Box>
        <Box className="totel-box"> TIES</Box>
        <Box className="totel-box"> Player2</Box>
      </Box>
    </Box>
  );
}
// const winning= [1,2,3]
// const numbers = [6,2,3]
// winning.every(num => numbers.includes(num))

// const winning = [
//   [1, 5, 9],
//   [3, 5, 7],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const numbers = [1,2,3];

// const results = winning.map(winArray => winArray.every(num => numbers.includes(num)));
// console.log(results);
