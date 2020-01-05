describe('Visit Todo Page', function() {
    it('successfully loads', function() {
        cy.visit('/');
        cy.title().should('include', 'Codemash');
    })
});