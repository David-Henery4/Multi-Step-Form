import {
  StepContainerMob,
  BtnContainerMob,
  MainContentContainer,
} from "./components";
import useGlobalContext from "./context/useGlobalContext";

function App() {
  const { isFormComplete } = useGlobalContext();
  //
  return (
    <div className="wrapper main-grid">
      <StepContainerMob />
      {/**/}
      <MainContentContainer />
      {/**/}
      {isFormComplete || <BtnContainerMob />}
    </div>
  );
}

export default App;
