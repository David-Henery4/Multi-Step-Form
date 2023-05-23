const StepCircles = () => {
  return (
    <div className="step-order-mob">
      <div className="step-order-mob__label">
        <div className="step-circle step-circle--active">
          <p>1</p>
        </div>
        <div className="step-order-mob__label--wrapper">
          <h2 className="label-header">STEP 1</h2>
          <p className="step-label">YOUR INFO</p>
        </div>
      </div>

      <div className="step-order-mob__label">
        <div className="step-circle">
          <p>2</p>
        </div>
        <div className="step-order-mob__label--wrapper">
          <h2 className="label-header">STEP 2</h2>
          <p className="step-label">SELECT PLAN</p>
        </div>
      </div>

      <div className="step-order-mob__label">
        <div className="step-circle">
          <p>3</p>
        </div>
        <div className="step-order-mob__label--wrapper">
          <h2 className="label-header">STEP 3</h2>
          <p className="step-label">ADD-ONS</p>
        </div>
      </div>

      <div className="step-order-mob__label">
        <div className="step-circle">
          <p>4</p>
        </div>
        <div className="step-order-mob__label--wrapper">
          <h2 className="label-header">STEP 4</h2>
          <p className="step-label">SUMMARY</p>
        </div>
      </div>
    </div>
  );
};

export default StepCircles;
