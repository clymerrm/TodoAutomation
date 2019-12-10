from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

from part1_Selenium.python.exercise2.pages.base import BasePage


class TodoList(BasePage):
    all_tasks_names = ()
    all_tasks_duedates = ()
    completed_tasks_names = ()
    completed_tasks_duedate = ()
    active_tasks_names = ()
    active_tasks_duedate = ()


    def get_all_tasks(self):
        # create a list of dicts of all task names and their due dates

    def get_completed_tasks(self):
        # create a list of dicts of all completed tasks and their due dates

    def get_active_tasks(self):
        # create a list of dicts of all active task names and their due dates

    def return_specific_task_by_name(self, desired_name):
        # return a dict with a specific task name, due date and status if exists
        # return false if task does not exist

    def mark_task_comleted(self, desired_name):
        # mark a task completed by looking for a name
        # if doesnt exist, return error

    def delete_task(self, desired_name):
        # delete a task by looking for a task name
        # if doesnt exist, return error