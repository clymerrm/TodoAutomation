const moment = require('moment');

describe('Add a task item', function() {
    const taskName = 'Testing adding new task';
    const taskNameLocator = 'testingaddingnewtaskitem';
    const tomorrow = moment().add(1, 'days').format("MM/DD/YYYY");

    it('allows you to create a task item', function() {
        cy.visit('/');
        cy.title().should('include', 'Codemash');
        cy.get('input[data-test-key=TaskNameInput]')
            .clear()
            .type(taskName);
        // TODO: Insert tomorrow's date
        cy.get('input[data-test-key=CreateTaskButton]')
            .click();
        cy.get('[data-test-key=TaskTitle]')
            .contains(taskName)
    });

    it('allows you to mark a task as completed', function() {
        // TODO: Mark task as completed
    });

    it('allows you to delete a task', function() {
        // TODO: Delete the task
    });
});