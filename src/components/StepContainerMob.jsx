// import {BgSidebarMob} from "../assets"
import sidebarMob from "../assets/bg-sidebar-mobile.svg"

const StepContainerMob = () => {
  return (
    <div className="step-order-container-mob">
      {/* <BgSidebarMob className="sidebar-mob-bg"/> */}
      <img className="sidebar-mob-bg" src={sidebarMob} alt="background graphic for the sidebar" />
      <div className="step-order-mob">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
}

export default StepContainerMob