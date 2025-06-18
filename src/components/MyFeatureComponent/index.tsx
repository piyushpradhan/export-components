import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { store } from "../../store";
import { ToggleProvider } from "../../context/ToggleContext";
import Home from "./Home";
import About from "./About";

export function MyFeatureComponent() {
  return (
    <ReduxProvider store={store}>
      <ToggleProvider>
        <BrowserRouter>
          <Box p={2}>
            <nav>
              <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ToggleProvider>
    </ReduxProvider>
  );
}
