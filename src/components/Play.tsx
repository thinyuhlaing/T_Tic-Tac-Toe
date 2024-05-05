import "../App.css";
import { Box, Dialog, DialogTitle, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addOnumbers,
  addValues,
  addXnumbers,
  setRestart,
  setValues,
} from "../store/slices/appSlice";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft, faMoon } from "@fortawesome/free-solid-svg-icons";
import AppDialog from "./AppDialog";

export default function Play() {
  const { Xnumbers } = useAppSelector((state) => state.app);
  const { Onumbers } = useAppSelector((state) => state.app);
  const [open, setOpen] = useState<boolean>(false);
  const { values } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const [turn, setTurn] = useState<string>("X" || "O");
  const [playerturn, setPlayerTurn] = useState<string>("");
  const items = values;
  const { XPlayer } = useAppSelector((state) => state.user);
  const { OPlayer } = useAppSelector((state) => state.user);
  const [winner, setWinner] = useState<string>("");
  const [XwinTime, setXwinTime] = useState<number>(0);
  const [OwinTime, setOwinTime] = useState<number>(0);
  const [drawTime, setDrawTime] = useState<number>(0);
  const [theme, setTheme] = useState("light");

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
    const isSubset_X = winning.map((winArray) =>
      winArray.every((num) => Xnumbers.includes(num))
    );
    const isAnySubsetMatch_X = isSubset_X.some((subset) => subset);

    const isSubset_O = winning.map((winArray) =>
      winArray.every((num) => Onumbers.includes(num))
    );
    const isAnySubsetMatch_O = isSubset_O.some((subset) => subset);

    if (Xnumbers.length > 2 || Onumbers.length > 2) {
      if (isAnySubsetMatch_X) {
        // Xplayer victory
        dispatch(setRestart());
        setWinner(`Xplayer: ${XPlayer}`);
        setXwinTime(XwinTime + 1);
        return setOpen(true);
      }

      if (isAnySubsetMatch_O) {
        // Oplayer victory
        dispatch(setRestart());
        setWinner(`Oplayer : ${OPlayer}`);
        setOwinTime(OwinTime + 1);
        return setOpen(true);
      }

      if (
        Xnumbers.length + Onumbers.length === 9 &&
        !isAnySubsetMatch_X &&
        !isAnySubsetMatch_O
      ) {
        // Draw
        dispatch(setRestart());
        setWinner("win-win");
        setDrawTime(drawTime + 1);
        return setOpen(true);
      }
      return;
    }
  };

  const handleClick = (item: { number: number; toShow: string }) => {
    if (!item.toShow) {
      if (turn === "X") {
        dispatch(addXnumbers(item.number));
        setTurn("O");
      } else {
        dispatch(addOnumbers(item.number));
        setTurn("X");
      }

      dispatch(addValues({ number: item.number, toShow: turn }));
    } else {
      return;
    }
  };

  const handleRestart = () => {
    dispatch(setRestart());
  };

  useEffect(() => {
    handleCheck();
    turn === "X" ? setPlayerTurn(XPlayer) : setPlayerTurn(OPlayer);
  }, [Xnumbers, Onumbers]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    dispatch(setValues());
  }, []);

  return (
    <Box className="game-container ">
      <Box className="top-bar">
        <FontAwesomeIcon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          icon={faMoon}
          flip="horizontal"
          size="2xl"
        />
        <Box className=" rounded-2xl px-6 py-2 text-center bg-light-text text-light-bg dark:bg-dark-text dark:text-dark-bg">
          <p className=" text-xl font-semibold">{turn}'s turn</p>
        </Box>
        <FontAwesomeIcon
          icon={faArrowRotateLeft}
          size="2xl"
          onClick={handleRestart}
        />
      </Box>
      <Box className="text-center w-full">
        <Typography variant="h4"> {playerturn}'s turn</Typography>
      </Box>
      <Box className="game-layout">
        {items.map((item) => {
          return (
            <Box className="boxes" onClick={() => handleClick(item)}>
              <Box className="boxes-text">{item.toShow}</Box>
            </Box>
          );
        })}
      </Box>
      <Box className="flex justify-between w-full">
        <Box className="win-times-boxes">
          <p className=" text-sm">{XPlayer}</p>
          <p className="text-xl font-semibold">{XwinTime}</p>
        </Box>
        <Box className="win-times-boxes">
          <p className=" text-sm">Draw</p>
          <p className="text-xl font-semibold">{drawTime}</p>
        </Box>
        <Box className="win-times-boxes">
          <p className=" text-sm">{OPlayer}</p>
          <p className="text-xl font-semibold">{OwinTime}</p>
        </Box>
      </Box>
      <AppDialog open={open} setOpen={setOpen} winner={winner} />
    </Box>
  );
}

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
// const Clicknumbers = [1,2,3];

// const isSubset = winning.map(winArray => winArray.every(num => Clicknumbers.includes(num)));
// console.log(isSubset) --> (8) [false, false, false, false, false, true, false, false]

// const isAnySubsetMatch = isSubset.some((subset) => subset);
// console.log(isAnySubsetMatch) --> true

/*  every and some method */

// every

// const winning= [1,2,3]
// const Clicknumbers = [6,2,3]
// winning.every(num => Clicknumbers.includes(num))
// flase --> cuz need to be true every numbers

// some

// const winning= [1,2,3]
// const Clicknumbers = [6,2,3]
// winning.some(num => Clicknumbers.includes(num))
// true --> cuz don't need to be correct all of them, just need to be ture one of them
