import { useState, createContext } from "react";
import { addOnsDetails, planDetails, userInputDetails } from "../miscData";

const AppContext = createContext();

const AppProvider = ({ children }) => {
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
        isPlanToggleYearly,
        setIsPlanToggleYearly,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
