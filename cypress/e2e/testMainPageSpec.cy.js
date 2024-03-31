import mainPage from '../pages/mainPage'
import newComputerPage from '../pages/newComputerPage'

describe('Computer Database Test', () => {
  const getMainPage = new mainPage();

  beforeEach(() => {
    cy.visit(getMainPage.mainPageUrl);
   
  });

  it('Validate computers page is Displayed', () => {

    const mainPageObj = new mainPage();
    mainPageObj.validatePageIsDisplayed(getMainPage.mainPageUrl);

  })

  it('Validate pagination', () => {

    const mainPageObj = new mainPage();

    mainPageObj.validatePagination();

  })

  it('Validate main page links and buttons are displaying', () => {

    const mainPageObj = new mainPage();

    mainPageObj.validateLinksOnMainpage();

  })

})