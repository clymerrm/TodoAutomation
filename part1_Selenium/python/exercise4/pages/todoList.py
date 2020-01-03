from selenium.webdriver.common.by import By

from part1_Selenium.python.exercise3.pages.base import BasePage


class TodoList(BasePage):
    all_tasks_names = (By.CSS_SELECTOR, '[data-test-key=TaskTitle]')
    all_tasks_duedates = (By.CSS_SELECTOR, '[data-test-key=DueDate]')
    all_tasks_statuses = (By.CSS_SELECTOR, '[data-test-status]')
    completed_tasks_names = (By.CSS_SELECTOR, 'div[data-test-status=completed] [data-test-key=TaskTitle]')
    completed_tasks_duedate = (By.CSS_SELECTOR, 'div[data-test-status=completed] [data-test-key=DueDate]')
    active_tasks_names = (By.CSS_SELECTOR, 'div[data-test-status=active] [data-test-key=TaskTitle]')
    active_tasks_duedate = (By.CSS_SELECTOR, 'div[data-test-status=active] [data-test-key=DueDate]')

    def get_all_tasks(self):
        # create a dict of all task names and their due dates
        all_tasks = {}
        tasks = self.driver.find_elements(*self.all_tasks_names)
        due_dates = self.driver.find_elements(*self.all_tasks_duedates)
        attributes = self.driver.find_elements(*self.all_tasks_statuses)
        tasks = [task.text.replace(' ', '') for task in tasks]
        due_dates = [date.text for date in due_dates]
        statuses = [status.get_attribute('data-test-status') for status in attributes]
        ids = [status.get_attribute('id') for status in attributes]
        for i, task in enumerate(tasks):
            all_tasks[task] = {}
            all_tasks[task]["due_date"] = due_dates[i]
            all_tasks[task]["status"] = statuses[i]
            all_tasks[task]["id"] = ids[i]
        return all_tasks

    def get_completed_tasks(self):
        # create a dict of all completed task names and their due dates
        tasks = self.driver.find_elements(*self.completed_tasks_names)
        due_dates = self.driver.find_elements(*self.completed_tasks_duedate)
        tasks = [task.text.replace(' ', '') for task in tasks]
        due_dates = [date.text for date in due_dates]
        all_tasks = dict(zip(tasks, due_dates))
        return all_tasks

    def get_active_tasks(self):
        # create a dict of all active task names and their due dates
        tasks = self.driver.find_elements(*self.active_tasks_names)
        due_dates = self.driver.find_elements(*self.active_tasks_duedate)
        tasks = [task.text.replace(' ', '') for task in tasks]
        due_dates = [date.text for date in due_dates]
        all_tasks = dict(zip(tasks, due_dates))
        return all_tasks

    def return_specific_task_by_name(self, desired_name):
        # return a dict with a specific task name, due date and status if exists
        # return false if task does not exist
        tasks = self.get_all_tasks()
        try:
            return tasks[desired_name.replace(' ', '')]
        except:
            return False

    def mark_task_completed(self, desired_name):
        # mark a task completed by looking for a name
        # if doesnt exist, return error
        try:
            task_details = self.return_specific_task_by_name(desired_name.replace(' ', ''))
            self.click_element((By.XPATH, "//div[@id=" + str(task_details["id"]) + "]/p/input"))
        except:
            raise ValueError(desired_name + ' is not a valid task name')

    def delete_task(self, desired_name):
        # delete a task by looking for a task name
        # if doesnt exist, return error
        try:
            task_details = self.return_specific_task_by_name(desired_name.replace(' ', ''))
            self.click_element((By.XPATH, "//div[@id=" + str(task_details["id"]) + "]/button"))
        except:
            raise ValueError(desired_name + ' is not a valid task name')
