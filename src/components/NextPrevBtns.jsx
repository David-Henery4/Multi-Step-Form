import { useEffect } from "react";
import useGlobalContext from "../context/useGlobalContext";
import useValidation from "../validation/useValidation";

const NextPrevBtns = () => {
  const {
    currentStep,
    setCurrentStep,
    overallDetails,
    setConfirmedErrorsList,
    handleUserInfoSubmit,
  } = useGlobalContext();
  const { userInputDetails } = overallDetails;
  //
  const { validation, isErrorsList } = useValidation(handleUserInfoSubmit);
  //
  const handleValidation = (userValues) => {
    validation(userValues);
  };
  //
  useEffect(() => {
    setConfirmedErrorsList(isErrorsList);
  }, [isErrorsList]);
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
      {currentStep >= 4 ? (
        <button
          className="btn btn-confirm"
          onClick={() => {
            handleValidation(userInputDetails);
          }}
        >
          Confirm
        </button>
      ) : (
        <button
          className="btn btn-next"
          onClick={() => {
            handleValidation(userInputDetails);
          }}
        >
          Next Step
        </button>
      )}
    </div>
  );
};

export default NextPrevBtns;
