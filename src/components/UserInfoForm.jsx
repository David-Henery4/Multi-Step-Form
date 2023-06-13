import useGlobalContext from '../context/useGlobalContext';
import useValidation from '../validation/useValidation';

const UserInfoForm = () => {
  const {
    overallDetails,
    setOverallDetails,
    confirmedErrorsList,
  } = useGlobalContext();
  const { userInputDetails } = overallDetails;
  //
  return (
    <form className="user-info__form">
      <div className="input-container">
        <label htmlFor="name">Name</label>
        {confirmedErrorsList?.name?.isError && (
          <p className="input-error-label">{confirmedErrorsList?.name?.msg}</p>
        )}
        <input
          id="name"
          className={
            confirmedErrorsList?.name?.isError
              ? "input-error-active"
              : "input-error-inactive"
          }
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
        {confirmedErrorsList?.email?.isError && (
          <p className="input-error-label">{confirmedErrorsList?.email?.msg}</p>
        )}
        <input
          id="email"
          name="email"
          className={
            confirmedErrorsList?.email?.isError
              ? "input-error-active"
              : "input-error-inactive"
          }
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
        {confirmedErrorsList?.phone?.isError && (
          <p className="input-error-label">{confirmedErrorsList?.phone?.msg}</p>
        )}
        <input
          id="phone"
          name="phone"
          className={
            confirmedErrorsList?.phone?.isError
              ? "input-error-active"
              : "input-error-inactive"
          }
          placeholder="e.g +1 234 567 890"
          type="number"
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
  );
}

export default UserInfoForm