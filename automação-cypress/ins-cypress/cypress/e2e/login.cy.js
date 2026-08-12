/// <reference types="cypress"/>
import userp from "../fixtures/usuario.json"
import user from "../fixtures/usuario.json" 
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

    it('deve fazer login com usuario admin com comando customizado', () => {
        cy.login("admin@biblioteca.com","admin123")
    });

    it('deve fazer login usando importação de dados', () => {
        cy.login(user.email,user.senha)
    });

    it.only('deve fazer login usando importação de dados 2', () => {
        cy.login(userp.emailp,userp.senhap)
        cy.get('.btn').click()
        //cy.get('#search-input').type("1984")
        cy.get('.btn-primary')
        cy.get('.d-grid > .btn-primary').click()
   
    });
});