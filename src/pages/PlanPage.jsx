import { ContentHeaders, NextPrevBtns } from "../components";
import planDetails from "../miscData/planDetails";

const PlanPage = () => {
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
              >
                <div>{plans?.icon && <plans.icon />}</div>
                <div className="plan-page-content-options-item-text">
                  <h3 className="plan-label-header">{plans?.title}</h3>
                  <p className="plan-details">
                    <span className="plan-label-price">{plans?.price}</span>
                    <span className="step-label-offer">{plans?.offer}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <p>Monthly</p>
          <div className="toggle">
            <div className="toggle__ball"></div>
          </div>
          <p>Yearly</p>
        </div>
      </div>
      <div className="btn-container-desk">
        <NextPrevBtns />
      </div>
    </div>
  );
};

export default PlanPage;
