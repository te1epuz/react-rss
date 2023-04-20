describe('RSS task tests', () => {
  it('passes', () => {
    cy.visit('/');
  });

  it('Checks <About> link works', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
  });

  it('Checks <Home> link works', () => {
    cy.visit('/about');
    cy.contains('Home').click();
    cy.contains('Home page');
  });

  it('Search works', () => {
    cy.visit('/');
    cy.get('.search__input').type('dad');
    cy.get('.search__button').click();
    cy.contains('Tony').click();
    cy.contains('Replacement Dimension');
  });

  it('Checks <Forms> link works', () => {
    cy.visit('/');
    cy.contains('Forms').click();
    cy.url().should('include', '/forms');
  });

  it('Form works', () => {
    cy.visit('/forms');
    cy.get('.submit__button').click();
    cy.contains('*requied field');
    cy.get('input[name="name"]').type('Alexander');
    cy.get('input[value="male"]').click();
    cy.get('input[name="date"]').type('1999-01-01');
    cy.get('select').select('Uganda');
    cy.get('.input__checkbox').click();
    cy.get('.submit__button').click();
    cy.contains('Alexander');
  });

  it('Just a test to remove page load on coverage saving', () => {
    expect(true).to.equal(true);
  });
});
