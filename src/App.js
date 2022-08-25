import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShow = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1 style={{ color: "lightblue" }}>Hello!</h1>
      <ColorfulMessage color="grey">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm Fine!</ColorfulMessage>
      <button onClick={onClickCountUp}>Count up</button>
      <br />
      <button onClick={onClickSwitchShow}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>:)</p>}
    </>
  );
};

export default App;
