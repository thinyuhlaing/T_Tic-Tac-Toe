import { Box, Typography } from "@mui/material";
import "./App.css";
import Home from "./components/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, animate, motion } from "framer-motion";
import { Opacity } from "@mui/icons-material";
import { exit } from "process";
import bonkSound from "./sound/bonkSound.mp3";
import bonkImg from "./Img/bonkImg.jpg";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const animationVariants = {
  start: {
    rotate: 0,
  },
  end: {
    rotate: -360,
    transition: {
      duration: 3,
      repeat: Infinity,
      // repeat: 10, // key frames to scale 1 to 1.1 for 10 times
      repeatType: "loop" as const,
    },
  },
};

const containerVariants = {
  start: {
    // initial
    opacity: 0,
    y: -200,
    rotateX: 0,
  },
  end: {
    // animated
    opacity: 1,
    y: 0,
    rotateX: 360,
    transition: { delay: 1, duration: 0.4 },
  },
};

const childVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 0.9,
    transition: { delay: 3.5, duration: 0.8 },
  },
};

const imgVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 0.9,
    transition: { delay: 5.5, duration: 0 },
  },
  exit: { y: 50, transition: { delay: 0, duration: 0.8 } },
};

export default function App() {
  const [show, setShow] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const Navigate = useNavigate();
  const handleSound = async () => {
    await new Audio(bonkSound).play();
    setShow(!show);
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Navigate("/home");
      }, 5000);
    }, 8500);
  }, []);
  // useEffect(() => {
  //   setTimeout(async () => {
  //     try {
  //       await new Audio(bonkSound).play();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, 3000);
  // }, []);

  return (
    <Box className="loading-container">
      {show && (
        <div>
          <motion.div className="flex  flex-col justify-center items-center">
            <motion.div
              className="text-6xl"
              initial={{ opacity: 0, y: -200, rotateY: 0 }}
              animate={{ opacity: 1, y: 0, rotateY: 180 }}
              transition={{ delay: 2, duration: 0.4 }}
            >
              OX
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="start"
              animate="end"
              className="text-6xl"
            >
              Tic Tac Toe
            </motion.div>

            <motion.p
              variants={childVariants}
              initial="start"
              animate="end"
              className="pt-8 text-xl"
            >
              created by Thin Yu Hlaing
            </motion.p>
          </motion.div>
          <AnimatePresence>
            <motion.img
              variants={imgVariants}
              initial="start"
              animate="end"
              src={bonkImg}
              className="w-26 h-44 mt-5"
              onClick={handleSound}
              exit="exit"
            />
          </AnimatePresence>
        </div>
      )}
      {loading && (
        <Box className="flex justify-center items-center">
          <Typography variant="h4" className="pr-5">
            Loading
          </Typography>
          <motion.div
            variants={animationVariants}
            initial="start"
            animate="end"
            className="w-fit"
          >
            <FontAwesomeIcon icon={faSpinner} className="text-4xl " />
          </motion.div>
        </Box>
      )}
    </Box>
  );
}
{
  //importance
  /* <Box className="flex justify-center items-center">
<Typography variant="h4" className="pr-5">
  Loading
</Typography>
<motion.div
  variants={animationVariants}
  initial="start"
  animate="end"
  className="w-fit"
>
  <FontAwesomeIcon icon={faSpinner} className="text-4xl " />
</motion.div>
</Box> */
}

{
  /* <motion.div
        variants={containerVariants}
        initial="start"
        animate="end"
        className="flex  flex-col justify-center items-center"
      >
        <div className="text-6xl">Tic Tac Toe</div>
        <motion.div
          className="pt-5 text-xl"
          variants={childVariants}
          initial="start"
          animate="end"
        >
          created by Thin Yu Hlaing
        </motion.div>
      </motion.div> */
}
