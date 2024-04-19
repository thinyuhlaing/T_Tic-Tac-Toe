import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import bonkImg from "../Img/bonkImg.jpg";

interface Props {
  Player: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AppDialog({ open, setOpen, Player }: Props) {
  return (
    <Dialog
      onClose={() => setOpen(false)}
      open={open}
      //onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box className="flex flex-col justify-between items-center bg-white-bg pt-5 py-3 px-2  w-[25rem] h-[25rem]">
        <Typography
          variant="h4"
          className=" bg-white-color w-full rounded-3xl text-4xl   h-20 flex justify-center items-center text-white-text"
        >
          Winner
        </Typography>

        <Typography variant="h6" className=" p-3 text-center text-white-text">
          {Player}
        </Typography>

        <DialogActions className="flex justify-end w-full">
          <button
            onClick={() => setOpen(false)}
            className="w-24  h-10 rounded-3xl bg-white-text  text-[#FFFFFF] "
          >
            Cancle
          </button>
          <button className="w-28  h-10 rounded-3xl bg-white-text  text-[#FFFFFF] ">
            Start Again
          </button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
