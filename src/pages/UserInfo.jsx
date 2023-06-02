import {NextPrevBtns, ContentHeaders} from "../components"
import useGlobalContext from "../context/useGlobalContext";

const UserInfo = ({ overallDetails, setOverallDetails }) => {
  // const { overallDetails, setOverallDetails } = useGlobalContext();
  const { userInputDetails } = overallDetails;
  return (
    <div className="user-info">
      {/* PROPS ARE TEMP */}
      <ContentHeaders
        title={"Personal info"}
        subTitle={"Please provide your name, email address, and phone number."}
      />
      <form className="user-info__form">
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="e.g Stephen King"
            type="text"
            value={userInputDetails?.name}
            onChange={(e) => {
              setOverallDetails((oldValues) => {
                return {
                  ...oldValues,
                  userInputDetails: {
                    ...oldValues?.userInputDetails,
                    name: e.target.value,
                  },
                };
              });
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            placeholder="e.g stephenking@lorem.com"
            type="text"
            value={userInputDetails?.email}
            onChange={(e) => {
              setOverallDetails((oldValues) => {
                return {
                  ...oldValues,
                  userInputDetails: {
                    ...oldValues?.userInputDetails,
                    email: e.target.value,
                  },
                };
              });
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            placeholder="e.g +1 234 567 890"
            type="text"
            value={userInputDetails?.phone}
            onChange={(e) => {
              setOverallDetails((oldValues) => {
                return {
                  ...oldValues,
                  userInputDetails: {
                    ...oldValues?.userInputDetails,
                    phone: e.target.value,
                  },
                };
              });
            }}
          />
        </div>
      </form>
      <div className="btn-container-desk">
        <NextPrevBtns />
      </div>
    </div>
  );
};

export default UserInfo