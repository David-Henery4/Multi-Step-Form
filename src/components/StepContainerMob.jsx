// import {BgSidebarMob} from "../assets"
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
      <div className="step-order-mob">
        <div className="step-circle step-circle--active">
          <p>1</p>
        </div>
        <div className="step-circle">
          <p>2</p>
        </div>
        <div className="step-circle">
          <p>3</p>
        </div>
        <div className="step-circle">
          <p>4</p>
        </div>
      </div>
    </div>
  );
};

export default StepContainerMob;
