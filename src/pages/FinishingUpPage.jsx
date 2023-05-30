import { ContentHeaders, NextPrevBtns } from "../components";

const FinishingUpPage = () => {
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
            <div>
              <h3 className="plan-label-price">Online service</h3>
              <p className="final-addons-price-label">+$10/yr</p>
            </div>
            <div>
              <h3 className="plan-label-price">Online service</h3>
              <p className="final-addons-price-label">+$10/yr</p>
            </div>
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
