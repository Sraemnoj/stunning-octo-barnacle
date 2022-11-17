import React, { useEffect, useState } from "react";
import DataProcessor from "./DataProcessor";

const DataLoaderContainer = () => {
  // Setup some state to store the retrived data
  const [sectionData, setSectionData] = useState([]);
  const [companyDealingsData, setCompanyDealingsData] = useState([]);
  const [directorsOfficersData, setDirectorsOfficersData] = useState([]);

  // store errors and loading indicator
  const [error, setError] = useState();
  const [loadingComplete, setLoadingComplete] = useState();

  const handleError = (e) => setError(e.message);

  const sortData = (data, element) =>
    data.sort((a, b) => a[element] - b[element]);

  // Fetch the data from the endpoints and store in state
  useEffect(() => {
    const sectionsURL = "/api/sections.json";
    const companyDealingsURL = "/api/company-dealings/qa.json";
    const directorsOfficersURL = "/api/directors-officers-management/qa.json";

    const fetchData = async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        const message = `An error has occured: ${response.status} ${url}`;
        throw new Error(message);
      }
      return await response.json();
    };

    // ensure that all the data is loaded ans sorted and set loading complete flag
    // handle any caught errors - setTimeout to simulate network
    setTimeout(() => {
      Promise.all([
        fetchData(sectionsURL).then((r) => setSectionData(sortData(r, "id"))),
        fetchData(companyDealingsURL).then((r) =>
          setCompanyDealingsData(sortData(r, "qa_id"))
        ),
        fetchData(directorsOfficersURL).then((r) =>
          setDirectorsOfficersData(sortData(r))
        ),
      ])
        .then(() => setLoadingComplete(true))
        .catch(handleError);
    }, 1000);
  }, []);

  // Show any errors that have been caught
  if (error) return <h1>{error}</h1>;

  // Show loading indicator
  if (!loadingComplete) return <h1>Loading...</h1>;

  return (
    <DataProcessor
      sections={sectionData}
      companyDealings={companyDealingsData}
      directorsOfficers={directorsOfficersData}
    />
  );
};

export default DataLoaderContainer;
