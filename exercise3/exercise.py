from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
import datetime
from part1_Selenium.python.exercise2.pages import *
import unittest

class HandlingNewTasks(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())
        self.page = CreateTasks(self.driver)
        self.tasks = TodoList(self.driver)
        self.page.get_page('http://www.automation-todos.com/latest')
        assert "Codemash" in self.page.return_page_title()
        self.task_name = 'Testing adding new task'
        tomorrow = datetime.datetime.today() + datetime.timedelta(days=1)
        tomorrow = tomorrow.strftime("%m/%d/%Y")
        self.page.create_new_task(self.task_name, tomorrow)

    def test_ensure_task_appears(self):
        # TODO: Ensure task appears in task list

    def test_mark_task_completed(self):
        # TODO: Mark test as completed

    def test_delete_task(self):
        # TODO: Delete the task you just created

    def tearDown(self):
        self.page.quit_driver()

if __name__ == "__main__":
    unittest.main()
