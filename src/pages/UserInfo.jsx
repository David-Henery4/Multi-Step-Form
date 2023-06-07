import {NextPrevBtns, ContentHeaders, UserInfoForm} from "../components"

const UserInfo = () => {
  //
  return (
    <div className="user-info">
      {/* PROPS ARE TEMP */}
      <ContentHeaders
        title={"Personal info"}
        subTitle={"Please provide your name, email address, and phone number."}
      />
      <UserInfoForm/>
      <div className="btn-container-desk">
        <NextPrevBtns />
      </div>
    </div>
  );
};

export default UserInfo