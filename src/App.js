import React, { useState } from "react";
import SubTitle from "./subTitle";
import Stopwatch from "./stopwatch";
import TimeList from "./timelist";
import { testContext } from "./testcontext";

const App = () => {
  const [title, setTitle] = useState("StopWatch");
  const [isLight, setIslight] = useState(false);
  const [timeArr, setTimeArr] = useState(["01:22:22", "00:10:11"]);

  const changeTheme = () => {
    setIslight(!isLight);
  };
  return (
    <testContext.Provider
      value={{
        timeArr: timeArr,
        setTimeArr: setTimeArr,
      }}
    >
      
      <div
        className="container"
        style={{ background: isLight ? "snow" : "#020011" }}
      >
        <div className="main">
          <SubTitle title={title} isLight={isLight} changeTheme={changeTheme} />
          <Stopwatch isLight={isLight} changeTheme={changeTheme} />
          <TimeList />
        </div>
      </div>
    </testContext.Provider>
  );
};
export default App;
