import useGlobalContext from "../context/useGlobalContext";

const NextPrevBtns = () => {
  const { setIsFormComplete, currentStep, setCurrentStep } = useGlobalContext();
  //
  return (
    <div className="btn-container-mob__inner">
      {currentStep <= 1 || (
        <button
          className="btn btn-back"
          onClick={() => {
            setCurrentStep((prevValues) => {
              if (prevValues <= 1) {
                return 1;
              }
              return prevValues - 1;
            });
          }}
        >
          Go Back
        </button>
      )}
      <button
        className="btn btn-next"
        onClick={() => {
          // setCurrentStep((prevValues) => {
          //   if (prevValues >= 4) {
          //     setIsFormComplete(true);
          //     return 4;
          //   }
          //   return prevValues + 1;
          // });
          
        }}
      >
        {currentStep >= 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default NextPrevBtns;
