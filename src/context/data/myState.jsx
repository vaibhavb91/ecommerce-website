import { useState } from "react";
import MyContext from "./myContext";

function MyState(props) {
  const [mode, setMode] = useState("light");

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgba(17,24,39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <MyContext.Provider value={{ mode, toogleMode }}>
      {props.children}
    </MyContext.Provider>
  );
}
export default MyState;