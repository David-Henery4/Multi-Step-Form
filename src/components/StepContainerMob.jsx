import {StepCircles} from "../components"
import sidebarMob from "../assets/bg-sidebar-mobile.svg";

const StepContainerMob = () => {
  return (
    <div className="step-order-container-mob">
      {/* <BgSidebarMob className="sidebar-mob-bg"/> */}
      <img
        className="sidebar-mob-bg"
        src={sidebarMob}
        alt="background graphic for the sidebar for sizes up till lap screens"
      />
      <StepCircles/>
    </div>
  );
};

export default StepContainerMob;
