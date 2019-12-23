import {Selector, t} from 'testcafe';

export default class ToDo {
    constructor() {
        this.taskName = Selector('[data-test-key="TaskNameInput"]');
        this.date = Selector('[class="react-datepicker__input-container"]');
        this.createTask = Selector('[data-test-key="CreateTaskButton"]');
        this.taskTitle = Selector('[data-test-key="TaskTitle"]');
        this.active = Selector('[data-test-status="active"]');
        this.completed = Selector('[data-test-status="completed"]');
    }


    async validateTaskAdded(taskName) {
        const formatTaskName = taskName.toLowerCase().replace(/\s/g, '');
        await t
            .expect(Selector('[data-test-key="' + formatTaskName + 'item"]').innerText).contains(taskName);
    }

    async validateTaskAndDate(taskName, taskDate) {
        const formatTaskName = taskName.toLowerCase().replace(/\s/g, '');
        await t
            .expect(Selector('[data-test-key="' + formatTaskName + 'item"] [data-test-key="DueDate"]').innerText).contains(taskDate);
    }

    async markCompleted(taskName) {
        await t
            .click(Selector(this.taskTitle).withText(taskName).parent('div').find('[data-test-key="CompletedCheckbox"]'));
    }

    async taskCompleted(taskName) {
        const formatTaskName = taskName.toLowerCase().replace(/\s/g, '');
        await t
            .expect(Selector('[data-test-key="' + formatTaskName + 'item"]').withAttribute('data-test-status', 'completed').exists).ok();


        // Selector('div').withAttribute('myAttr');
    }

    async deleteRow(interestName) {
        await t
            .click(Selector(this.taskTitle).withText(interestName).parent('div').find('#delete'));
    }

    async enterDate(date) {
        await t
            .click(this.date).pressKey("ctrl+a delete")
            .typeText(this.date, date);
    }

}