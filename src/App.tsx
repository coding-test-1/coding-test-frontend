import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import "@atlaskit/css-reset";
import CodingTest from "./pages/CodingTest";
import styles from "./styles.module.css";
import { token } from "@atlaskit/tokens";

token("color.background.accent.blue.bolder"); // var(--ds-background-default)
token("space.200");

function App() {
  const [count, setCount] = useState(0);

  return <CodingTest />;
}

export default App;
