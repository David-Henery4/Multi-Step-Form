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
        <div>
          {planDetails.map((plans) => {
            return (
              <div key={plans?.id}>
                <div>{plans?.icon && <plans.icon />}</div>
                <div>
                  <h3>{plans?.title}</h3>
                  <p>{plans.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
      <div className="btn-container-desk">
        <NextPrevBtns />
      </div>
    </div>
  );
};

export default PlanPage;
