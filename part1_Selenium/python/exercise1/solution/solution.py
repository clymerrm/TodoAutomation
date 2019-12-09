from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
import datetime

driver = webdriver.Chrome(ChromeDriverManager().install())

driver.get('http://automation-todos.com/latest')
assert "Codemash" in driver.title

taskName = 'Testing adding new task'

driver.find_element(By.CSS_SELECTOR, 'input[data-test-key=TaskNameInput]').clear()
driver.find_element(By.CSS_SELECTOR, 'input[data-test-key=TaskNameInput]').send_keys(taskName)

# TODO: Enter value of tomorrow for task due date
tomorrow = datetime.datetime.today() + datetime.timedelta(days=1)
tomorrow = tomorrow.strftime("%m/%d/%Y")
dateLength = len(driver.find_element(By.CSS_SELECTOR, 'div[class*="datepicker__input-container"]>input').get_attribute('value'))
driver.find_element(By.CSS_SELECTOR, 'div[class*="datepicker__input-container"]>input').send_keys(dateLength * Keys.BACKSPACE)
driver.find_element(By.CSS_SELECTOR, 'div[class*="datepicker__input-container"]>input').send_keys(tomorrow)

driver.find_element_by_css_selector('input[data-test-key=CreateTaskButton]').click()

tasks = driver.find_elements(By.CSS_SELECTOR, '[data-test-key=TaskTitle]')
tasks = [task.text for task in tasks]
assert taskName in tasks
matches = sum(match == taskName for match in tasks)
assert matches == 1

# TODO: Mark test as completed
desiredTask = taskName.lower().replace(' ', '')
driver.find_element(By.CSS_SELECTOR, 'div[data-test-key=' + desiredTask + 'item]>p>input[data-test-key=CompletedCheckbox]').click()
completedTasks = driver.find_elements(By.CSS_SELECTOR, '[data-test-key*=item][style*="line-through"]>p>span[data-test-key=TaskTitle]')
completedTasks = [task.text for task in completedTasks]
assert taskName in completedTasks
completedMatches = sum(match == taskName for match in completedTasks)
assert completedMatches == 1

# TODO: Delete the task you just created
driver.find_element(By.CSS_SELECTOR, 'div[data-test-key=' + desiredTask + 'item]>button').click()
tasks = driver.find_elements(By.CSS_SELECTOR, '[data-test-key=TaskTitle]')
tasks = [task.text for task in tasks]
assert taskName not in tasks
matches = sum(match == taskName for match in tasks)
assert matches == 0

driver.quit()