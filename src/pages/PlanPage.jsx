import { ContentHeaders, NextPrevBtns } from "../components";
import useGlobalContext from "../context/useGlobalContext";

const PlanPage = () => {
  const {
    isPlanToggleYearly,
    setIsPlanToggleYearly,
    overallDetails,
    setOverallDetails,
  } = useGlobalContext();
  const { planDetails } = overallDetails;
  //
  return (
    <div className="plan-page">
      <ContentHeaders
        title="Select your plan"
        subTitle="You have the option of monthly or yearly billing."
      />
      <div className="plan-page-content">
        <div className="plan-page-content-options">
          {planDetails.map((plans) => {
            return (
              <div
                key={plans?.id}
                className={`${
                  plans.isActive
                    ? "plan-page-content-options-item plan-page-content-options-item--active"
                    : "plan-page-content-options-item"
                }`}
                onClick={() => {
                  setOverallDetails((prevValues) => {
                    const { planDets = planDetails } = prevValues;
                    //
                    return {
                      ...prevValues,
                      planDetails: planDets.map((p) => {
                        plans.id === p.id
                          ? (p.isActive = true)
                          : (p.isActive = false);
                        return p;
                      }),
                    };
                  });
                }}
              >
                <div>{plans?.icon && <plans.icon />}</div>
                <div className="plan-page-content-options-item-text">
                  <h3 className="plan-label-header">{plans?.title}</h3>
                  <p className="plan-details">
                    <span className="plan-label-price">
                      {isPlanToggleYearly
                        ? `$${plans?.pricePerYear}/yr`
                        : `$${plans?.pricePerMonth}/mo`}
                    </span>
                    {isPlanToggleYearly && <span className="step-label-offer">{plans?.offer}</span>}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="plan-switch-container">
          <p
            className={`${
              isPlanToggleYearly
                ? "plan-switch-label"
                : "plan-switch-label plan-switch-label--active"
            }`}
          >
            Monthly
          </p>
          <div
            className="toggle"
            onClick={() => setIsPlanToggleYearly(!isPlanToggleYearly)}
          >
            <div
              className={`${
                isPlanToggleYearly
                  ? "toggle__ball toggle__ball--active"
                  : "toggle__ball"
              }`}
            ></div>
          </div>
          <p
            className={`${
              isPlanToggleYearly
                ? "plan-switch-label plan-switch-label--active"
                : "plan-switch-label"
            }`}
          >
            Yearly
          </p>
        </div>
      </div>
      <div className="btn-container-desk">
        <NextPrevBtns />
      </div>
    </div>
  );
};

export default PlanPage;
