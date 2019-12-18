from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver

driver = webdriver.Chrome(ChromeDriverManager().install())

driver.get('http://automation-todos.com/latest')
assert "Codemash" in driver.title

driver.find_element(By.CSS_SELECTOR, 'input[data-test-key=TaskNameInput]').clear()
driver.find_element(By.CSS_SELECTOR, 'input[data-test-key=TaskNameInput]').send_keys('Testing adding new task')

driver.find_element_by_css_selector('input[data-test-key=CreateTaskButton]').click()

tasks = driver.find_elements(By.CSS_SELECTOR, '[data-test-key=TaskTitle]')
tasks = [task.text for task in tasks]
assert 'Testing adding new task' in tasks
matches = sum(match == 'Testing adding new task' for match in tasks)
assert matches == 1

driver.quit()