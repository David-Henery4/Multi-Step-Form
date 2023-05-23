

export const ContentHeaders = ({title,subTitle}) => {
  //
  return (
    <div className="user-info__header">
      <h1 className="main-header">{title}</h1>
      <p className="para-text">
        {subTitle}
      </p>
    </div>
  );
}
