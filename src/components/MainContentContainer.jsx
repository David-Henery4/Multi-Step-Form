import { useState } from "react";
import { StepCircles } from "../components";
import {
  UserInfo,
  PlanPage,
  AddOnsPage,
  FinishingUpPage,
  ThankYouPage,
} from "../pages";
import sidebarDesk from "../assets/bg-sidebar-desktop.svg";



const MainContentContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);
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
      {currentStep <= 1 && <UserInfo />}
      {currentStep === 2 && <PlanPage />}
      {currentStep === 3 && <AddOnsPage />}
      {currentStep >= 4 && <FinishingUpPage />}
      {/* {currentStep >= 5 && <ThankYouPage />} */}
    </main>
  );
};

export default MainContentContainer;
