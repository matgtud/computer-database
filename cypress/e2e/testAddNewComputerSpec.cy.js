import mainPage from '../pages/mainPage'
import newComputerPage from '../pages/newComputerPage'

describe('Computer Database Test', () => {
  const getMainPage = new mainPage();

  beforeEach(() => {
    cy.visit(getMainPage.mainPageUrl);
  });

  it('Validate creation of new computer', () => {

    const newComputerPageObj = new newComputerPage();
    newComputerPageObj.createNewComputer();

  })

})