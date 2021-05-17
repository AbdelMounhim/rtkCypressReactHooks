/* eslint-disable no-undef */

/// <reference types="cypress" />

describe('date component works', () => {
  beforeEach(() => {
     cy.visit('http://localhost:3000/')
  })

  context('counter click', () => {
    beforeEach(() => {
     cy.get('[data-testid=counter]')
      .contains('0')
    })

    it('add normal', () => {
      cy.get('[data-testid="boutonIncrement"]')
      .click()
    
      cy.get('[data-testid="counter"]')
        .contains('1')

    })
  })

   context('add input ', () => {
    beforeEach(() => {
      cy.get('[data-testid=counter]')
       .contains('0')
    })

    it('add normal', () => {
      cy.get('[data-testid="amount"]')
      .clear()
      .type('12')
      .should('have.value', '12')

      cy.get('[data-testid="inc_amount"]')
      .click()
      cy.get('[data-testid="counter"]')
        .contains('12')
      cy.get('[data-testid="boutonIncrement"]')
      .click()
    
      cy.get('[data-testid="counter"]')
        .contains('12')
    })

    it('inc / dec ', () => {
       cy.get('[data-testid="boutonIncrement"]')
      .click()
    
      cy.get('[data-testid="boutonDecrement"]')
      .click()
      cy.get('[data-testid="counter"]')
        .contains('0')
      
     
    })

    it('async ', () => {
       cy.get('[data-testid=inc_async_amount]')
      .click()
    
      cy.get('[data-testid="counter"]')
        .contains('2')
      
     
    })
  })
})