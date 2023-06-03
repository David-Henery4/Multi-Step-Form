import useGlobalContext from "../context/useGlobalContext";

const NextPrevBtns = () => {
  const { setIsFormComplete, currentStep, setCurrentStep } = useGlobalContext();
  //
  return (
    <div className="btn-container-mob__inner">
      <button className="btn btn-back">Go Back</button>
      <button className="btn btn-next" onClick={() => {
        
      }}>Next Step</button>
    </div>
  );
};

export default NextPrevBtns