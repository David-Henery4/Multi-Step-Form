import {StepCircles} from "../components"
import { UserInfo } from "../pages";
import sidebarDesk from "../assets/bg-sidebar-desktop.svg";


const MainContentContainer = () => {
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
      <UserInfo/>
    </main>
  );
}

export default MainContentContainer