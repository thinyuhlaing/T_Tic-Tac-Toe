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
  const [userturn, setUserTurn] = useState<string>("");
  const items = values;
  const { Xuser } = useAppSelector((state) => state.user);
  const { Ouser } = useAppSelector((state) => state.user);
  const [winner, setWinner] = useState<string>("");
  const [XwinTime, setXwinTime] = useState<number>(0);
  const [OwinTime, setOwinTime] = useState<number>(0);
  const [drawTime, setdrawTime] = useState<number>(0);

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
      console.log("O", isSubset_O);
      console.log("X", isSubset_X);

      // i check at 2 cuz length started at 0
      if (isAnySubsetMatch_X) {
        console.log("X victory");
        dispatch(setRestart());
        setWinner(Xuser);
        setXwinTime(XwinTime + 1);
        return setOpen(true);
      }

      if (isAnySubsetMatch_O) {
        console.log("O victory");
        dispatch(setRestart());
        setWinner(Ouser);
        setOwinTime(OwinTime + 1);

        return setOpen(true);
      }
      if (Xnumbers.length + Onumbers.length === 9) {
        dispatch(setRestart());
        setWinner("win-win");
        setdrawTime(drawTime + 1);
        return setOpen(true);
      }
      return;
    }
  };

  useEffect(() => {
    handleCheck();

    turn === "X" ? setUserTurn(Xuser) : setUserTurn(Ouser);
  }, [Xnumbers, Onumbers]);

  useEffect(() => {
    dispatch(setValues());
  }, []);

  const handleClick = (num: number) => {
    if (turn === "X") {
      dispatch(addXnumbers(num));
      setTurn("O");
    } else {
      dispatch(addOnumbers(num));
      setTurn("X");
    }

    dispatch(addValues({ number: num, toShow: turn }));
  };

  const handleRestart = () => {
    dispatch(setRestart());
  };
  return (
    <Box className="container  ">
      <Box className="top-bar">
        <FontAwesomeIcon icon={faMoon} flip="horizontal" size="2xl" />
        <Box className=" rounded-2xl px-6 py-2 text-center bg-white-text text-white-bg">
          <p className=" text-xl font-semibold">{turn}'s turn</p>
        </Box>
        <FontAwesomeIcon
          icon={faArrowRotateLeft}
          size="2xl"
          onClick={handleRestart}
        />
      </Box>
      <Box className="text-center w-full">
        <Typography variant="h4"> {userturn}'s turn</Typography>
      </Box>
      <Box className="game-layout">
        {items.map((item) => {
          return (
            <Box className="items" onClick={() => handleClick(item.number)}>
              <Box className="text-4xl font-semibold text-white-text">
                {item.toShow}
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box className="flex justify-between w-full">
        <Box className="totel-box">
          <p className=" text-sm">{Xuser}</p>
          <p className="text-xl font-semibold">{XwinTime}</p>
        </Box>
        <Box className="totel-box">
          <p className=" text-sm">Draw</p>
          <p className="text-xl font-semibold">{drawTime}</p>
        </Box>
        <Box className="totel-box">
          <p className=" text-sm">{Ouser}</p>
          <p className="text-xl font-semibold">{OwinTime}</p>
        </Box>
      </Box>
      <AppDialog open={open} setOpen={setOpen} Player={winner} />
    </Box>
  );
}
// const winning= [1,2,3]
// const Clicknumbers = [6,2,3]
// winning.every(num => Clicknumbers.includes(num))

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

// const results = winning.map(winArray => winArray.every(num => Clicknumbers.includes(num)));
// console.log(results);
