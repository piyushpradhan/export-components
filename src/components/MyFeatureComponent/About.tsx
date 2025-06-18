import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function About() {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h4">About</Typography>
      <Button onClick={() => navigate("/")}>Go Home</Button>
    </Box>
  );
}
