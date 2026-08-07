/// <reference types="cypress"/>
import catalogo from "../fixtures/livros.json"
describe('funcionalidade: catalogo de busca', () => {
    beforeEach(() => {
        cy.visit("catalog.html")
    });

    it('deve fazer a busca do livro 1984', () => {
        cy.get('#search-input').type("1984")
        cy.get('.card-title').should("contain","1984")
    });

    it('deve fazer a busca de um livro do catalogo', () => {
        cy.get('#search-input').type(catalogo[2].livro)
        cy.get('.card-title').should("contain",catalogo[2].livro)
    });

    it('deve fazer a busca de um livro usando fixture', () => {
        cy.fixture('livros').then((cat)=>{
         cy.get('#search-input').type(cat[2].livro)
         cy.get('.card-title').should("contain",cat[2].livro)

    })
    });

    it.only('deve fazer a busca de todos o livros do catalogo', () => {
        cy.fixture("livros").then((cat)=>{
            cat.forEach(item=>{
              cy.get('#search-input').clear().type(item.livro)
              cy.get('.card-title').should("contain",item.livro)  
            })
        })
    });
});