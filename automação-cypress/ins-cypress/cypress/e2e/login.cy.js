/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalidade: login', () => {
    beforeEach(() => {
        cy.visit("login.html")
    });

    it('deve fazer login com sucesso', () => {
        
        cy.get('#email').type("usuario@teste.com")
        cy.get('#password').type("user123")
        cy.get('#login-btn').click()
        cy.url().should("include","/dashboard.html")
    });

        it('deve fazer login com sucesso,admin', () => {
        
        cy.get('#email').type("admin@biblioteca.com")
        cy.get('#password').type("admin123")
        cy.get('#login-btn').click()
        cy.url().should("include","/admin-dashboard.html")
    });

    it('deve fazer login com usuario padrão com comando customizado', () => {
        cy.login("usuario@teste.com","user123")
    });

    it.only('deve fazer login com usuario admin com comando customizado', () => {
        cy.login("admin@biblioteca.com","admin123")
    });
});