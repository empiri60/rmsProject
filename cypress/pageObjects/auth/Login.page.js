class Login {
    navigateToLogin() {
        cy.get('[data-target="#logInModal"]').click()
    }
    enterUsername(username) {
        cy.get('#loginusername').type(username, { delay: 100, force: true }).should('have.value', username)
    }

    enterPassword(password) {
        cy.get('#loginpassword').type(password, { delay: 100, force: true })
    }
    submitLogin() {
        cy.contains('button', 'Log in').click();
    }
    verifySuccessfulLogin() {
        cy.get('#nameofuser').invoke('text').should('eq', 'Welcome bilal@gmail.com')

    }
    clickonNavbar(){
        cy.get('[data-target="#exampleModal"]').click()
    }
    contactEmail(){
        cy.get('#recipient-email').click().type('Bilal@gmail.com')
        cy.get('#recipient-name').click().type('Bilal')
        cy.get('#message-text').click().type('something else sosmsmms')
        cy.contains('button', 'Send message').click()
    }
}
export default new Login()