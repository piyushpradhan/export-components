import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { increment, decrement } from "../../store/counterSlice";
import { useToggle } from "../../context/ToggleContext";

export default function Home() {
  const navigate = useNavigate();
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatchRedux = useDispatch();
  const { state, dispatch } = useToggle();
  return (
    <Box>
      <Typography variant="h4">Home</Typography>
      <Typography>Redux Counter: {counter}</Typography>
      <Button onClick={() => dispatchRedux(increment())} variant="contained">
        Increment
      </Button>
      <Button onClick={() => dispatchRedux(decrement())} variant="outlined">
        Decrement
      </Button>
      <Box mt={2}>
        <Typography>
          Custom Context Toggle: {state.on ? "ON" : "OFF"}
        </Typography>
        <Button
          onClick={() => dispatch({ type: "toggle" })}
          variant="contained"
        >
          Toggle
        </Button>
      </Box>
      <Box mt={2}>
        <Button onClick={() => navigate("/about")}>Go to About</Button>
      </Box>
    </Box>
  );
}
