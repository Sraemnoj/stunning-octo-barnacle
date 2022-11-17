const findSectionQAs = (sectionId, combinedQAs = []) => {
  return combinedQAs.filter((qa) => qa.sectionId === sectionId);
};

const buildTree = (obj, sections = [], combinedQAs) => {
  const { id } = obj;
  const filteredSubSections = sections.filter((t) => t.parentId === id);

  const subSections = filteredSubSections.map((element) =>
    buildTree(element, sections, combinedQAs)
  );

  if (subSections.length === 0) {
    return { ...obj, qa: findSectionQAs(obj.id, combinedQAs) };
  }

  return { ...obj, subSections };
};

export default buildTree;
