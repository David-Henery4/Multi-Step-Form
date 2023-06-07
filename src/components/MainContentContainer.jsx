import { StepCircles } from "../components";
import {
  UserInfo,
  PlanPage,
  AddOnsPage,
  FinishingUpPage,
  ThankYouPage,
} from "../pages";
import sidebarDesk from "../assets/bg-sidebar-desktop.svg";
import useGlobalContext from "../context/useGlobalContext";

const MainContentContainer = () => {
  const { currentStep, isFormComplete } = useGlobalContext();
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
      {currentStep <= 1 && !isFormComplete && <UserInfo />}
      {currentStep === 2 && !isFormComplete && <PlanPage />}
      {currentStep === 3 && !isFormComplete && <AddOnsPage />}
      {currentStep >= 4 && !isFormComplete && <FinishingUpPage />}
      {currentStep >= 4 && isFormComplete && <ThankYouPage />}
    </main>
  );
};

export default MainContentContainer;
