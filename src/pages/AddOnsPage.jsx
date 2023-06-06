import { useState } from "react";
import { ContentHeaders, NextPrevBtns } from "../components";
// WILL PROB PUT IN STATE DATA
// import addOnsDetails from "../miscData/addOnsDetails";
import useGlobalContext from "../context/useGlobalContext";

const AddOnsPage = () => {
  const { overallDetails, setOverallDetails, isPlanToggleYearly } =
    useGlobalContext();
  const { addOnsDetails } = overallDetails;
  // const [addOns,setAddOns] = useState(addOnsDetails)
  //
  return (
    <div className="add-ons-page">
      <ContentHeaders
        title="Pick add-ons"
        subTitle="Add-ons help enhance your gaming experience."
      />
      <div className="add-ons-options">
        {addOnsDetails?.map((addOn) => {
          return (
            <div
              className={`${
                addOn?.isAddOnChoosen
                  ? "add-ons-options-option add-ons-options-option--active"
                  : "add-ons-options-option"
              }`}
              key={addOn?.id}
            >
              <input
                type="checkbox"
                name={`${addOn?.name}`}
                id={`${addOn?.name}`}
                checked={addOn?.isAddOnChoosen}
                onChange={(e) => {
                  setOverallDetails((oldValues) => {
                    return {
                      ...oldValues,
                      addOnsDetails: oldValues?.addOnsDetails.map((add) => {
                        if (add?.id === addOn?.id)
                          add.isAddOnChoosen = e.target.checked;
                        return add;
                      }),
                    };
                  });
                }}
                // checked
              />
              <div>
                <label className="add-ons-label" htmlFor={`${addOn?.name}`}>
                  {addOn?.label}
                </label>
                <p className="add-ons-desc">{addOn?.desc}</p>
              </div>
              <p className="add-ons-price">
                {isPlanToggleYearly
                  ? `+$${addOn?.pricePerYear}/yr`
                  : `+$${addOn?.pricePerMonth}/mo`}
              </p>
            </div>
          );
        })}
      </div>
      <div className="btn-container-desk">
        <NextPrevBtns />
      </div>
    </div>
  );
};

export default AddOnsPage;
