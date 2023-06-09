import { useState, createContext } from "react";
import { addOnsDetails, planDetails, userInputDetails } from "../miscData";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [confirmedErrorsList,setConfirmedErrorsList] = useState({})
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlanToggleYearly, setIsPlanToggleYearly] = useState(false);
  const [overallDetails, setOverallDetails] = useState({
    addOnsDetails,
    planDetails,
    userInputDetails,
  });
  // const [defaultAddOnsValues,setDefaultAddOnsValues] = useState(addOnsDetails)
  // const [defaultPlanValues, setDefaultPlanValues] = useState(planDetails);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
