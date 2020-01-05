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
        cy.get('div[class*="datepicker__input-container"]>input')
            .clear()
            .type(tomorrow);
        cy.get('input[data-test-key=CreateTaskButton]')
            .click();
        cy.get('[data-test-key=TaskTitle]')
            .contains(taskName)
    });

    it('allows you to mark a task as completed', function() {
        cy.get('[data-test-key=' + taskNameLocator + '] p input[data-test-key=CompletedCheckbox]')
            .click();
        cy.get('[data-test-key*=item][style*="line-through"] p span[data-test-key=TaskTitle]')
            .contains(taskName);
    });

    it('allows you to delete a task', function() {
        cy.get('[data-test-key=' + taskNameLocator + '] button')
            .click();
        cy.get('[data-test-key=' + taskNameLocator + ']')
            .should('not.exist');
    });
});