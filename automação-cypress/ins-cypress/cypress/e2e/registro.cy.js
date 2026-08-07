/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('funcionalidade: registro', () => {
    beforeEach(() => {
        cy.visit("register.html")
    });

    it('deve preencher registro com sucesso', () => {
        let nome = faker.person.firstName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type("11998745645")
        cy.get('#password').type("teste123")
        cy.get('#confirm-password').type("teste123")
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.get('#user-name').should("contain", nome)
        cy.url().should("include", "dashboard")
    });

    it.only('deve preencher registro com comando customizados', () => {
        let nome = faker.person.firstName()
        let email = faker.internet.email()
        cy.preencherRegistro(nome, email, "11998745645", "teste123", "teste123")
        cy.url().should("include", "dashboard")
        cy.get('#user-name').should("contain", nome)
    });
});