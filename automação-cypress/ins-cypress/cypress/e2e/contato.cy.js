import { faker } from '@faker-js/faker';

describe('funcionalidade do contato', () => {
beforeEach(() => {
  cy.visit("index.html")
});
it.only('deve preencher o formulario de contato com sucesso', () => {
  let nome = faker.person.firstName()
  let email = faker.internet.email()
   cy.get('[name="name"]').type(nome) 
   cy.get('[name="email"]').type(email)
   cy.get('[name="subject"]').select("Parcerias")
   cy.get('[name="message"]').type("mensagem")
   cy.get('#btn-submit').click()
   cy.contains("Contato enviado com sucesso!").should("exist")
});
  



});
  
