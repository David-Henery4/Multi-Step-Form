import {StepContainerMob, BtnContainerMob} from "./components"

function App() {
  //
  return (
    <div className="wrapper main-grid">
      <StepContainerMob/>
      {/**/}
      <main className="main-content">
        <div className="main-content__header">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <form className="main-content__form">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Email Address</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Phone Number</label>
            <input type="text" />
          </div>
        </form>
      </main>
      {/**/}
      <BtnContainerMob/>
    </div>
  );
}

export default App;
