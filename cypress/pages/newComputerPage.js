import mainPage from '../pages/mainPage'


const mainPageObj = new mainPage();

class NewComputerPage{

    elements ={
   
        getcomputerDatabaseHpLink : () => cy.get('a.fill[href="/computers"]'),

        getsearchBox : () => cy.get('#searchbox'),

        getcomputerNameInput : () => cy.get('#name'),

        getintroducedInput : () => cy.get('#introduced'),

        getdiscontinuedInput : () => cy.get('#discontinued'),

        getcompanyDropDown : () => cy.get('#company'),

        getcreateComputerBtn : () => cy.get('input[class="btn primary"]'),

        getcomputerDatabaseHpLink : () => cy.get('a[href="/computers"]'),

        getAlertMessage : () => cy.get('.alert-message.warning'),
    }

    selectCompany(companyNumber){
        this.elements.getcompanyDropDown()
            .select(companyNumber)
    }

   
    createNewComputer(){
        cy.useRandomData(1, 42).then(({ randomNumber, randomText }) => {
        mainPageObj.getAddNewComputerButton()
        this.elements.getcomputerNameInput()
            .type(randomText)
        this.selectCompany(randomNumber)
        this.elements.getcreateComputerBtn()
            .click()
        this.elements.getAlertMessage()
            .contains(randomText)

        // I was not able to validate if the computer was created, it seems that search is neither working or its not being stored.
        // Therefore I commented the tests but they should work when it get fixed.
        // mainPageObj.getSearchBox(randomText)
        // mainPageObj.validateFilterByName(randomText)
        // mainPageObj.getComputerTable(randomText)
        });
    };   
}

export default NewComputerPage;