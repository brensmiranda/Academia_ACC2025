const SLC_MAKE = '#make' // const marca automovel
const SLC_MODEL = '#model' // const para modelo do automovel
const INPUT_CCM = '#cylindercapacity' // constante para o campo de Cilindrada 
const INPUT_KW = '#engineperformance' // const para o campo de potencia
const SLC_DATE_MANICUFACTURE = '#dateofmanufacture'
const SLC_NUMBERSEATS = '#numberofseats'
const SLC_SEATS = '#numberofseatsmotorcycle'
const SLC_FUEL = '#fuel'
const INPUT_PAYLOADKG = '#payload'
const INPUT_TOTALWEIGHTKG = '#totalweight'
const INPUT_PRICE = '#listprice'
const INPUT_LICENSEPLATENUMBER = '#licenseplatenumber'
const INPUT_ANNUALMILEAGE = '#annualmileage'
const BTN_NEXT = '#nextenterinsurantdata'


Cypress.Commands.add('inserirDadosVehicleData', () => {
cy.get(SLC_MAKE).select('Honda')
cy.get(SLC_MODEL).select('Scooter')
cy.get(INPUT_CCM).type('745')
cy.get(INPUT_KW).type('75')
cy.get(SLC_DATE_MANICUFACTURE).type('01/02/2025')
cy.get(SLC_NUMBERSEATS).select('2')
cy.get(SLC_SEATS).select('2')
cy.get(SLC_FUEL).select('Gas')
cy.get(INPUT_PAYLOADKG).type('200')
cy.get(INPUT_TOTALWEIGHTKG).type('300')
cy.get(INPUT_PRICE).type('3000')
cy.get(INPUT_LICENSEPLATENUMBER).type('ABC123')
cy.get(INPUT_ANNUALMILEAGE).type('5000')

})

Cypress.Commands.add('inserirDadosNegativo', () => {
   cy.get(INPUT_CCM).type('20000000');
    })

    Cypress.Commands.add('mensagemDeErro', () => {
    cy.contains('.error', 'Must be a number between 1 and 2000').should('be.visible')})


Cypress.Commands.add('proximaPagina', () => {
    cy.get(BTN_NEXT).click()})