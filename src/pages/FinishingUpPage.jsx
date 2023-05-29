import { ContentHeaders } from "../components";

const FinishingUpPage = () => {
  return (
    <div className="finishing-up-page">
      <ContentHeaders
        title="Finishing up"
        subTitle="Double-check everything looks OK before confirming."
      />
      <div className="finishing-up-details">
        <div>
          <div>
            <div>
              <h2>Arcade (Yearly)</h2>
              <p>Change</p>
            </div>
            <p>$90/yr</p>
          </div>
        </div>
        <div>
          <div>
            <h3>Online service</h3>
            <p>+$10/yr</p>
          </div>
          <div>
            <h3>Online service</h3>
            <p>+$10/yr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishingUpPage;
