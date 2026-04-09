describe('Kişisel Portfolyo Testleri', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Dil değiştirme mekanizması çalışıyor mu?', () => {
    cy.get('[data-testid="language-toggle"]').click();

   
    cy.get('[data-testid="hireme-button"]')
      .should('have.text', 'Hire Me'); 
  });

  it('Hire Me butonu toast mesajını tetikliyor mu?', () => {
    cy.intercept('POST', 'https://reqres.in/api/users').as('postRequest');

    cy.get('[data-testid="hireme-button"]').click();

    cy.wait('@postRequest');

  
    cy.contains(/başarıyla|successfully|sent|iletildi/i, { timeout: 10000 })
      .should('be.visible');
  });
});