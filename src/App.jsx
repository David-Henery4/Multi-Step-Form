import { StepContainerMob, BtnContainerMob, NextPrevBtns } from "./components";
import sidebarDesk from "./assets/bg-sidebar-desktop.svg";

function App() {
  //
  return (
    <div className="wrapper main-grid">
      <StepContainerMob />
      {/**/}
      <main className="main-content">
        <div className="step-container-desk">
          <img
            className="step-container-desk__graphic"
            src={sidebarDesk}
            alt="background graphic for the sidebar for laptop and above size screens"
          />
        </div>
        <div className="user-info">
          <div className="user-info__header">
            <h1 className="main-header">Personal info</h1>
            <p className="para-text">
              Please provide your name, email address, and phone number.
            </p>
          </div>
          <form className="user-info__form">
            <div className="input-container">
              <label htmlFor="">Name</label>
              <input placeholder="e.g Stephen King" type="text" />
            </div>
            <div className="input-container">
              <label htmlFor="">Email Address</label>
              <input placeholder="e.g stephenking@lorem.com" type="text" />
            </div>
            <div className="input-container">
              <label htmlFor="">Phone Number</label>
              <input placeholder="e.g +1 234 567 890" type="text" />
            </div>
          </form>
          <div className="btn-container-desk">
            <NextPrevBtns />
          </div>
        </div>
      </main>
      {/**/}
      <BtnContainerMob />
    </div>
  );
}

export default App;
