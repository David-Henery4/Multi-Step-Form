import { useState, useEffect } from "react";
import { ContentHeaders, NextPrevBtns } from "../components";
import useGlobalContext from "../context/useGlobalContext";

const FinishingUpPage = () => {
  const { isPlanToggleYearly, overallDetails, setIsPlanToggleYearly } =
    useGlobalContext();
  const { addOnsDetails, planDetails } = overallDetails;
  const [finalAddOns,setFinalAddOns] = useState([])
  const [finalPlan,setFinalPlan] = useState([])
  const [totalPrice,setFinalPrice] = useState(0)
  //
  const handleFinalCalcs = (rawAddOns, rawPlan) => {
    const activeAddOns = rawAddOns.filter(add => add?.isAddOnChoosen)
    setFinalAddOns(activeAddOns)
    const activePlan = rawPlan.filter(plan => plan?.isActive)
    setFinalPlan(activePlan)
    const combined = [...activeAddOns,...activePlan]
    console.log(combined)
    const total = combined.reduce((old, curr) => {
      isPlanToggleYearly
        ? (old += curr.pricePerYear)
        : (old += curr.pricePerMonth);
      return old
    }, 0);
    console.log(total)
  };
  //
  useEffect(() => {
    handleFinalCalcs(addOnsDetails,planDetails)
  }, [isPlanToggleYearly])
  //
  return (
    <div className="finishing-up-page">
      <ContentHeaders
        title="Finishing up"
        subTitle="Double-check everything looks OK before confirming."
      />
      <div className="finishing-up-details">
        <div className="finishing-up-details-prices">
          <div className="finishing-up-details-prices-plan">
            <div>
              <h2 className="add-ons-label">Arcade (Yearly)</h2>
              <p className="plan-label-price">Change</p>
            </div>
            <p className="final-plan-price-label">$90/yr</p>
          </div>
          <div className="finishing-up-details-prices-addons">
            {addOnsDetails?.map(add => {
              if (add?.isAddOnChoosen)
                return (
                  <div key={add?.id}>
                    <h3 className="plan-label-price">{add?.label}</h3>
                    <p className="final-addons-price-label">
                      {isPlanToggleYearly
                        ? `+$${add?.pricePerYear}/yr`
                        : `+$${add?.pricePerMonth}/mo`}
                    </p>
                  </div>
                );
            })}
          </div>
        </div>
        <div className="finishing-up-details-total">
          <h3 className="plan-label-price">Total (per year)</h3>
          <p className="total-price-label">$120/yr</p>
        </div>
      </div>
      <div className="btn-container-desk">
        <NextPrevBtns />
      </div>
    </div>
  );
};

export default FinishingUpPage;
