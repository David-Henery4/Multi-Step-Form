import { useState, createContext } from "react";
import {addOnsDetails, planDetails} from "../miscData"

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [overallDetails,setOverallDetails] = useState({
    addOnsDetails,
    planDetails
  })
  // const [defaultAddOnsValues,setDefaultAddOnsValues] = useState(addOnsDetails)
  // const [defaultPlanValues, setDefaultPlanValues] = useState(planDetails);
  //
  return <AppContext.Provider value={{overallDetails, setOverallDetails}}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
