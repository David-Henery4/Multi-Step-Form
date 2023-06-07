import { useState, useEffect } from "react";
import { ContentHeaders, NextPrevBtns } from "../components";
import useGlobalContext from "../context/useGlobalContext";

const FinishingUpPage = () => {
  const { isPlanToggleYearly, overallDetails, setIsPlanToggleYearly } =
    useGlobalContext();
  const { addOnsDetails, planDetails } = overallDetails;
  const [finalAddOns, setFinalAddOns] = useState([]);
  const [finalPlan, setFinalPlan] = useState({});
  const [totalPrice, setFinalPrice] = useState(0);
  //
  const handleFinalCalcs = (rawAddOns, rawPlan) => {
    const activeAddOns = rawAddOns.filter((add) => add?.isAddOnChoosen);
    const activePlan = rawPlan.filter((plan) => plan?.isActive);
    //
    setFinalPlan(activePlan[0]);
    setFinalAddOns(activeAddOns);
    setFinalPrice(
      [...activeAddOns, ...activePlan].reduce((old, curr) => {
        isPlanToggleYearly
          ? (old += curr.pricePerYear)
          : (old += curr.pricePerMonth);
        return old;
      }, 0)
    );
  };
  //
  useEffect(() => {
    handleFinalCalcs(addOnsDetails, planDetails);
  }, [isPlanToggleYearly]);
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
            <div className="finishing-up-details-prices-labels">
              <h2 className="add-ons-label">
                {finalPlan?.title}{" "}
                <span>{isPlanToggleYearly ? "(Yearly)" : "(Monthly)"}</span>
              </h2>
              <button
                className="change-btn-label btn-plan-change"
                onClick={() => {
                  setIsPlanToggleYearly(!isPlanToggleYearly);
                }}
              >
                Change
              </button>
            </div>
            <p className="final-plan-price-label">
              {isPlanToggleYearly
                ? `+$${finalPlan?.pricePerYear}/yr`
                : `+$${finalPlan?.pricePerMonth}/mo`}
            </p>
          </div>
          <div className="finishing-up-details-prices-addons">
            {finalAddOns?.map((add) => {
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
          <h3 className="plan-label-price">
            Total <span>{isPlanToggleYearly ? "(Per Year)" : "(Per Month)"}</span>
          </h3>
          <p className="total-price-label">
            {isPlanToggleYearly ? `+$${totalPrice}/yr` : `+$${totalPrice}/mo`}
          </p>
        </div>
      </div>
      <div className="btn-container-desk">
        <NextPrevBtns />
      </div>
    </div>
  );
};

export default FinishingUpPage;
