import React, { useState } from "react";
import QA from "./QA";

const Section = ({ data, defaultOpen = false }) => {
  const [isOpen, openSection] = useState(defaultOpen);

  const { title, subSections, qa } = data;

  const handleToggleSection = () => {
    openSection(!isOpen);
  };

  const subSectionComponents = subSections?.map((subSection) => {
    return (
      <div
        key={`${subSection.id}-${subSection.parentId}`}
        className={`card ${subSection.id}`}
      >
        <Section data={subSection} />
      </div>
    );
  });

  const questionAnwserComponents = qa?.map((qaSection) => (
    <div
      key={`${qaSection.qa_id}-${qaSection.sectionId}`}
      className={`card ${qaSection.id}`}
    >
      <QA data={qaSection} />
    </div>
  ));

  return (
    <>
      <div className="heading clickable" onClick={handleToggleSection}>
        <div className="title">
          <h3 className="clickable" onClick={handleToggleSection}>
            {title}
          </h3>
        </div>
        <div className="toggleIndicator">{isOpen ? "-" : "+"}</div>
      </div>

      {isOpen && subSectionComponents}
      {isOpen && questionAnwserComponents}
    </>
  );
};

export default Section;
