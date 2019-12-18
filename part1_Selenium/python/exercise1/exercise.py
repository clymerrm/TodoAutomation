from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
import datetime

driver = webdriver.Chrome(ChromeDriverManager().install())

driver.get('http://automation-todos.com/latest')
assert "Codemash" in driver.title

task_name = 'Testing adding new task'

driver.find_element(By.CSS_SELECTOR, 'input[data-test-key=TaskNameInput]').clear()
driver.find_element(By.CSS_SELECTOR, 'input[data-test-key=TaskNameInput]').send_keys(task_name)

# UNCOMMENT ME TO CLEAR THE DATE FIELD
# tomorrow = datetime.datetime.today() + datetime.timedelta(days=1)
# tomorrow = tomorrow.strftime("%m/%d/%Y")
# dateLength = len(driver.find_element(By.CSS_SELECTOR, 'div[class*="datepicker__input-container"]>input').get_attribute('value'))
# driver.find_element(By.CSS_SELECTOR, 'div[class*="datepicker__input-container"]>input').send_keys(dateLength * Keys.BACKSPACE)
# TODO: Enter value of tomorrow for task due date (Helper bits added above as input is hard to clear)

driver.find_element_by_css_selector('input[data-test-key=CreateTaskButton]').click()

tasks = driver.find_elements(By.CSS_SELECTOR, '[data-test-key=TaskTitle]')
tasks = [task.text for task in tasks]
assert task_name in tasks
matches = sum(match == task_name for match in tasks)
assert matches == 1

# TODO: Mark test as completed


# TODO: Delete the task you just created


driver.quit()