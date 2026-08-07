/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('funcionalidade do cadastro', () => {
beforeEach(() => {
  cy.visit("index.html")
});
it('deve validar mensagem de erro ao enviar sem nome', () => {
  let nome = faker.person.firstName()
  let email = faker.internet.email()
   //cy.get('[name="name"]').type(nome) 
   cy.get('[name="email"]').type(email)
   cy.get('[name="subject"]').select("Parcerias")
   cy.get('[name="message"]').type("mensagem")
   cy.get('#btn-submit').click()
   cy.get('#alert-container').should("contain", "Por favor, preencha o campo Nome")
   
});
  it('deve validar mensagem de erro ao enviar sem email', () => {
  let nome = faker.person.firstName()
  let email = faker.internet.email()
   cy.get('[name="name"]').type(nome) 
   //cy.get('[name="email"]').type(email)
   cy.get('[name="subject"]').select("Parcerias")
   cy.get('[name="message"]').type("mensagem")
   cy.get('#btn-submit').click()
   cy.get('#alert-container').should("contain", "Por favor, preencha o campo E-mail")
  })
it('deve validar mensagem de erro ao enviar sem selecionar o assunto', () => {
  let nome = faker.person.firstName()
  let email = faker.internet.email()
   cy.get('[name="name"]').type(nome) 
   cy.get('[name="email"]').type(email)
   //cy.get('[name="subject"]').select("Parcerias")
   cy.get('[name="message"]').type("mensagem")
   cy.get('#btn-submit').click()
   cy.get('#alert-container').should("contain", "Por favor, selecione o Assunto")
})
it('deve validar mensagem de erro ao enviar escrever a mensagem', () => {
  let nome = faker.person.firstName()
  let email = faker.internet.email()
   cy.get('[name="name"]').type(nome) 
   cy.get('[name="email"]').type(email)
   cy.get('[name="subject"]').select("Parcerias")
   //cy.get('[name="message"]').type("mensagem")
   cy.get('#btn-submit').click()
   cy.get('#alert-container').should("contain", "Por favor, escreva sua Mensagem")
})

it.only('deve preencher cadastro com comando customizado', () => {
  let nome = faker.person.firstName()
  let email = faker.internet.email()
  cy.get('#name').type(nome)
  cy.get('#email').type(email)
  cy.get('#phone').type("11998745645")
  cy.get('#password').type("teste123")
  cy.get('#confirm-password').type("teste123")
  cy.get('#terms-agreement').check()
  cy.get('#register-btn').click()
});

});