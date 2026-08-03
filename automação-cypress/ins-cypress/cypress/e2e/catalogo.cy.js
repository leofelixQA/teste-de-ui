
describe('Funcionalidade de livros', () => {
   beforeEach(() => {
    cy.visit("catalog.html")
   }); 

it('deve clicar no botão adicionar á cesta', () => {
    cy.get('.btn-primary').click({ multiple: true })
});
it('deve clicar no ultimo botão adicionar á cesta', () => {
     cy.get('.btn-primary').last().click()
     cy.get('#cart-count').should("contain",1)
});
it('deve clicar no segundo botão adicionar á cesta', () => {
    cy.get('.btn-primary').eq(1).click()
    cy.get('#global-alert-container').should("contain", "A Arte da Guerra" ,"foi adicionado à cesta!")
});
it('deve clicar no nome do livro e direcionar para a tela do livro', () => {
    cy.contains('O Alquimista').click()
    cy.get('#add-to-cart-btn').click()
    cy.url().should("include","book-details")
    cy.get('#alert-container').should("contain","Livro adicionado à cesta com sucesso!" )
});

});