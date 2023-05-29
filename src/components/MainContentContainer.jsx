import { useState } from "react";
import {StepCircles} from "../components"
import { UserInfo, PlanPage, AddOnsPage, FinishingUpPage, ThankYouPage } from "../pages";
import sidebarDesk from "../assets/bg-sidebar-desktop.svg";
import useGlobalContext from "../context/useGlobalContext";


const MainContentContainer = () => {
  const data = useGlobalContext()
  // console.log(data)
  //
  const [isPlanToggleYearly,setIsPlanToggleYearly] = useState(false)
  //
  return (
    <main className="main-content">
      <div className="step-container-desk">
        <div className="step-container-desk__labels-container">
          <StepCircles />
        </div>
        <img
          className="step-container-desk__graphic"
          src={sidebarDesk}
          alt="background graphic for the sidebar for laptop and above size screens"
        />
      </div>
      {/* <UserInfo/> */}
      {/* <PlanPage planToggle={{isPlanToggleYearly, setIsPlanToggleYearly}}/> */}
      {/* <AddOnsPage/> */}
      <FinishingUpPage/>
    </main>
  );
}

export default MainContentContainer