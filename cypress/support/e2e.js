// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/enterVehicleData'
import './pages/enterVehicleInsuranceData'
import './pages/enterProductData'
import './pages/enterSelectPriceOption'
import './pages/enterSendQuote'
Cypress.on('uncaught:exception', (err, runnable) => { ///utilizei para ignorar exceções nao capturadas
    if (err.message.includes('e is not defined')) {
        return false
    }
})