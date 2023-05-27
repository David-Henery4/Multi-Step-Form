import { useState } from "react";
import { ContentHeaders, NextPrevBtns } from "../components";
// WILL PROB PUT IN STATE DATA
import addOnsDetails from "../miscData/addOnsDetails";

const AddOnsPage = () => {
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
                // onClick={(e) => {
                //   if (e.target.checked) {
                //     setAddOns((oldValues) => {
                //       return {
                //         ...oldValues,
                //         isAddOnChoosen: true
                //       }
                //     })
                //   }
                // }}
                // checked
              />
              <div>
                <label className="add-ons-label" htmlFor={`${addOn?.name}`}>
                  {addOn?.label}
                </label>
                <p className="add-ons-desc">{addOn?.desc}</p>
              </div>
              <p className="add-ons-price">{`+$${addOn?.price}/mo`}</p>
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
