const INPUT_EMAIL = '#email'
const INPUT_USERNAME = '#username'
const INPUT_PASSWORD = '#password'
const INPUT_CONFIRM_PASSWORD = '#confirmpassword'
const BTN_SEND = '#sendemail'

Cypress.Commands.add('inserirDadosSendQuote', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('email'))    
    cy.get(INPUT_USERNAME).type('agatinha')
    cy.get(INPUT_PASSWORD).type(Cypress.env('senha'))       
    cy.get(INPUT_CONFIRM_PASSWORD).type(Cypress.env('confirmSenha'))  
})

Cypress.Commands.add('clicarbotaoSend', () => {
    cy.get(BTN_SEND).click()
})

// Cypress.Commands.add('validarEnvioSucesso', () => {
//     cy.get('.sweet-alert').should('be.visible');})
