from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver

driver = webdriver.Chrome(ChromeDriverManager().install())

driver.get('http://automation-todos.com/latest')
assert "Codemash" in driver.title

# driver.quit()