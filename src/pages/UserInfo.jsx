import {NextPrevBtns, ContentHeaders} from "../components"

const UserInfo = () => {
  return (
    <div className="user-info">
      {/* PROPS ARE TEMP */}
      <ContentHeaders
        title={"Personal info"}
        subTitle={"Please provide your name, email address, and phone number."}
      />
      <form className="user-info__form">
        <div className="input-container">
          <label htmlFor="">Name</label>
          <input placeholder="e.g Stephen King" type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="">Email Address</label>
          <input placeholder="e.g stephenking@lorem.com" type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="">Phone Number</label>
          <input placeholder="e.g +1 234 567 890" type="text" />
        </div>
      </form>
      <div className="btn-container-desk">
        <NextPrevBtns />
      </div>
    </div>
  );
}

export default UserInfo