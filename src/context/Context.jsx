import { useState, createContext } from "react";
import { addOnsDetails, planDetails, userInputDetails } from "../miscData";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [confirmedErrorsList, setConfirmedErrorsList] = useState({});
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlanToggleYearly, setIsPlanToggleYearly] = useState(false);
  const [overallDetails, setOverallDetails] = useState({
    addOnsDetails,
    planDetails,
    userInputDetails,
  });
  //
  const handleUserInfoSubmit = (validatedUserInfoValues) => {
    setOverallDetails((prevValues) => {
      setCurrentStep((prevValues) => {
        if (prevValues >= 4) {
          setIsFormComplete(true);
          return 4;
        }
        return prevValues + 1;
      });
      return {
        ...prevValues,
        userInputDetails: validatedUserInfoValues,
      };
    })
  };
  //
  return (
    <AppContext.Provider
      value={{
        overallDetails,
        setOverallDetails,
        //
        isPlanToggleYearly,
        setIsPlanToggleYearly,
        //
        currentStep,
        setCurrentStep,
        //
        isFormComplete,
        setIsFormComplete,
        //
        confirmedErrorsList,
        setConfirmedErrorsList,
        //
        handleUserInfoSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
