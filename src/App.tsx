import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MyFeatureComponent } from "./components/MyFeatureComponent";

function App() {
  const [count, setCount] = useState(0);

  return <MyFeatureComponent />;
}

export default App;
