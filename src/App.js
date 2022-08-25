import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);

  return (
    <>
      <h1 style={{ color: "lightblue" }}>Hello!</h1>
      <ColorfulMessage color="grey">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm Fine!</ColorfulMessage>
      <button onClick={onClickCountUp}>Count up</button>
      <p>{num}</p>
    </>
  );
};

export default App;
