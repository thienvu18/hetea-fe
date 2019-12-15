import React from "react";

const SkillTag = props => {
  const { value, click } = props;
  return (
    <span className="keyword">
      <span
        className="keyword-remove"
        onClick={()=>click()}
      />
      <span className="keyword-text">{value}</span>
    </span>
  );
};
export default SkillTag;
