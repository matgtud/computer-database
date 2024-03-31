class MainPage {

  mainPageUrl = 'https://computer-database.gatling.io/computers';
  page1 = 'p=1';
  page0 = 'p=0';

    elements = {
      filterByNameButton: () => cy.get('#searchsubmit'),
      addNewComputerButton: () => cy.get('#add'),
      computerDatabaseHpLink: () => cy.get('a.fill[href="/computers"]'),
      computersFound: () => cy.get('#main > h1'),
      searchBox: () => cy.get('#searchbox'),
      computerNameLink: () => cy.get('a[href="/computers?p=0&s=name&d=desc"]'),
      introducedLink: () => cy.get('a[href="/computers?p=0&s=introduced&d=asc"]'), 
      discontinuedLink: () => cy.get('a[href="/computers?p=0&s=discontinued&d=asc"]'), 
      companyLink: () => cy.get('a[href="/computers?p=0&s=companyName&d=asc"]'), 
      paginationNextLink: () => cy.get('a[href="/computers?p=1"]'),
      computerTable: () => cy.get('/html/body/section/table/tbody'), 
      paginationPreviousLink: () => cy.get('a[href="/computers?p=0"]'), 
      paginationText: () => cy.get('/html/body/section/div[2]/ul/li[2]/a')
  
    }
  
    validatePageIsDisplayed(page) {
      this.elements.computerDatabaseHpLink()
        .should('be.visible')
        .should('have.attr', 'href', '/computers') 
        .click();
      cy.url().should('include', page); 
    }

    getAddNewComputerButton(){
        this.elements.addNewComputerButton()
            .click();
    }

    getSearchBox(){
        this.elements.searchBox()
          .click()
    }
    getComputerTable(text){
        this.elements.computerTable()
          .contains(text)
    }

    validatePagination(){
      this.elements.paginationNextLink()
        .click()
      cy.url().should('include', this.page1); 
      this.elements.paginationPreviousLink()
        .click()
      cy.url().should('include', this.page0); 
    }

    validateLinksOnMainpage(){
      this.elements.computerNameLink()
        .should('be.visible')
      this.elements.filterByNameButton()
        .should('be.visible')
      this.elements.addNewComputerButton()
        .should('be.visible')
      this.elements.computerNameLink()
        .should('be.visible')
      this.elements.introducedLink()
        .should('be.visible')
      this.elements.discontinuedLink()
        .should('be.visible')
      this.elements.companyLink()
        .should('be.visible')
        
    }
  }
  
export default MainPage;
 
  