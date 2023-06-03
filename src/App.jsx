import { useState } from "react";
import { StepContainerMob, BtnContainerMob, MainContentContainer } from "./components";

function App() {
  //
  return (
    <div className="wrapper main-grid">
      <StepContainerMob />
      {/**/}
      <MainContentContainer/>
      {/**/}
      <BtnContainerMob />
    </div>
  );
}

export default App;
