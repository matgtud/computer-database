README

Note: Some tests are not completed due to app limitation. Ive commented some part of the code which was not possible to test due to some error.

// Page Object

The approach Ive take to create the page objects is as follows:

- Using 'get' at the begining means that it will be an iteraction with the element such as click, type or some ther directly iteraction with only that given element.
- Using 'validate' means that it will include more processes and should be a more complex and comprehensive iteraction, not limited to a single interaction with a element but        multiple iteractions and validations.

// Commands

- Added few commands in order to randomize test data. It can be improved and create more complex iteractions but for the test porpouses and to make it more clean and straight forward it was not overcomplexized.

// Installation
- To install cypress: npm install cypress --save-dev