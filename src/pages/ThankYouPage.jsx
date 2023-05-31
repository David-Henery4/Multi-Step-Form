import { ThankYouIcon } from "../assets";

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <ThankYouIcon />
      <div className="thank-you-page-content">
        <h2 className="thank-you-title">Thank you!</h2>
        <p className="para-text">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
