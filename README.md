## Set up

(Tested with Node v14.7.1)

```
npm install
npm start
```

## Task

We have created a small task to test your programming skills. As a provider of content aimed at assisting the law industry with their work, we have a collection of categorised Q&A on various legal topics that have been written and stored on our back end services.
The problem faced is how to deliver that content to our users in an intuitive and easily navigable interface. A basic design (the wireframe fe-challenge-wireframe.png) has been agreed upon and we are now ready to make the page.

The data to be displayed is stored on the content server that is running on localhost:9000, and the key endpoints are:

* `/api/sections.json`
    * returns the nested list of categories the Q&A content is sorted into. The root of this tree has an id of -1.
* `/api/company-dealings/qa.json`
    * returns the Q&A for all categories within company dealings
* `/api/directors-officers-management/qa.json`
    * returns the Q&A for all categories within Directors and Officers: Management

The responses for these endpoints can all be found in the data folder so you can see what will be returned.

### Requirements
* You should start with loading data from all three endpoints.
* The view should display sections and questions altogether and the content tree hierarchy should be easy to read. Please do not use a 3rd party component library such as Material UI, as we want to test for some CSS competency.
* The view should be responsive and work on any common display size (e.g. mobile, tablet, desktop).
* The starting state should have all questions collapsed.
* Clicking on an element of the tree should toggle its state (so if it is collapsed, clicking on it should expand that section, if it is already expanded collapse that section).
* Some of the Q&A have links to other Q&A on the same page, clicking these links should take the user to that part of the page. E.g. qa_id: 99 links to 1433932435017_Toc402171636 which is assosciated with qa_id: 105
    * Some links will be dead links, don't worry too much about how these behave. The expected behaviour is nothing will happen.


Some things to note:

* Your solution should work in any modern browser, but you don't need to worry about making it fully cross browser or supporting older browsers.
* The root of the sections tree has id -1.
* Simplicity is key.
* The styling should be functional and readable.
* You can use this file to list any improvements you didn't have time to implement.
