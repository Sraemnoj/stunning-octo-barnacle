import React, { useEffect, useState } from "react";
import Section from "./Section";
import sanitizeHtml from "sanitize-html";
import buildTree from "../utils/buildTree.js";

const SectionWrapper = ({ children }) => <div>{children}</div>;

const ExpandableList = ({ sections, companyDealings, directorsOfficers }) => {
  const [processedQAs, setProcessedQAs] = useState([]);

  useEffect(() => {
    // find the root
    const rootIndex = sections.findIndex((t) => t.id === -1);
    const initialTree = { ...sections[rootIndex] };

    // reomve the root from the sections
    sections.splice(rootIndex, 1);
    initialTree.subSections = sections;

    // join both companyDealings, directorsOfficers arrays for convenience
    // sanitize the html
    const combinedQAs = [...companyDealings, ...directorsOfficers]
      .sort((a, b) => a.sectionId - b.sectionId)
      .map((qa) => ({
        ...qa,
        answer: sanitizeHtml(qa.answer),
        question: sanitizeHtml(qa.question),
      }));

    console.log(sections);

    setProcessedQAs(buildTree(initialTree, sections, combinedQAs));
  }, []);

  if (processedQAs.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="sectionWrapper">
      <Section data={processedQAs} defaultOpen={false} />
    </div>
  );
};
export default ExpandableList;
