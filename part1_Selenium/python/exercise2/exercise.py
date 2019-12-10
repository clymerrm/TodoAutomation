from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
import datetime
from part1_Selenium.python.exercise2.pages import *

driver = webdriver.Chrome(ChromeDriverManager().install())

page = CreateTasks(driver)


page.get_page('http://www.automation-todos.com/latest')
assert "Codemash" in page.return_page_title()

task_name = 'Testing adding new task'
tomorrow = datetime.datetime.today() + datetime.timedelta(days=1)
tomorrow = tomorrow.strftime("%m/%d/%Y")

page.create_new_task(task_name, tomorrow)

# TODO: Ensure task appears in task list


# TODO: Mark test as completed


# TODO: Delete the task you just created


page.quit_driver()
