describe('Add a task item', function() {
    it('allows you to create a task item', function() {
        cy.visit('/');
        cy.title().should('include', 'Codemash');
        const taskName = 'Testing adding new task';
        cy.get('input[data-test-key=TaskNameInput]')
            .clear()
            .type(taskName);
        cy.get('input[data-test-key=CreateTaskButton]')
            .click();
        cy.get('[data-test-key=TaskTitle]')
            .contains(taskName)
    })
});