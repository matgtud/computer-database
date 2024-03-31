// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getRandomText', () => {
    const loremIpsums = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ];
      return loremIpsums[Math.floor(Math.random() * loremIpsums.length)];    
  });

Cypress.Commands.add('getRandomNumber', (min = 1, max = 42) => {
    if (min > max) [min, max] = [max, min]; 
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return cy.wrap(randomNumber);
});
Cypress.Commands.add('useRandomData', () => {
   
    cy.getRandomNumber().then(randomNumber => {
      cy.log(`Random Number: ${randomNumber}`);
  
     
      cy.getRandomText().then(randomText => {
        cy.log(`Random Text: ${randomText}`);
        
        return cy.wrap({ randomNumber, randomText });
      });
    });
  });