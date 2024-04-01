# README

## Note

Some tests are incomplete due to application limitations. Portions of the code have been commented out as they could not be tested due to specific errors encountered.

## Page Object Model (POM)

The strategy adopted for creating page objects is described below:

- Prefixing with `get` indicates an interaction with the element, such as click, type, or any other direct interaction with that specific element.
- Prefixing with `validate` signifies a more complex and comprehensive interaction. It encompasses multiple interactions and validations, going beyond a single interaction with an element.

## Commands

Several commands have been introduced to randomize test data. While there's potential for more sophisticated interactions, the aim was to keep the test purposes straightforward and not overly complex for clarity and ease of understanding.

## Installation

To install Cypress, execute the following command:

```sh
npm install cypress --save-dev
