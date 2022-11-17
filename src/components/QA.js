import React, { useState } from "react";

const QA = ({ data }) => {
  const [isOpen, openSection] = useState(false);
  const { question, answer, tocId } = data;

  const handleToggleSection = () => {
    openSection(!isOpen);
  };
  return (
    <>
      <a name={tocId}>
        <div className="heading clickable" onClick={handleToggleSection}>
          <div className="title">
            <h4 dangerouslySetInnerHTML={{ __html: question }} />
          </div>
          <div className="toggleIndicator">{isOpen ? "-" : "+"}</div>
        </div>

        <div
          className={`${isOpen ? `show` : `hide`} answer`}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </a>
    </>
  );
};

export default QA;
