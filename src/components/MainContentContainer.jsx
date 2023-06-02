import { useState } from "react";
import {StepCircles} from "../components"
import { UserInfo, PlanPage, AddOnsPage, FinishingUpPage, ThankYouPage } from "../pages";
import steps from "../miscData/steps";
import sidebarDesk from "../assets/bg-sidebar-desktop.svg";
import useGlobalContext from "../context/useGlobalContext";


const MainContentContainer = () => {
  const app = useGlobalContext();
  const [currentPage,setCurrentPage] = useState([
    <UserInfo key={1} {...app}/>
  ])
  // const [currentStep,setCurrentStep] = useState(steps[1])
  // const { overallDetails, setOverallDetails } = useGlobalContext();
  //
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
      {/* <PlanPage /> */}
      {/* <AddOnsPage/> */}
      {/* <FinishingUpPage/> */}
      {/* <ThankYouPage/> */}
      {currentPage[0]}
      {/* {currentStep} */}
    </main>
  );
}

export default MainContentContainer