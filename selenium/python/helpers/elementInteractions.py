from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
driver = webdriver.Chrome(ChromeDriverManager().install())

element = driver.find_element(By.XPATH, "some xpath")

# Return text of element
element.text

# Return attribute of element
element.get_attribute('attribute name')

# Return true if element is displayed, exception if element doesnt exist
element.is_displayed()

# Return true if element is selected
element.is_selected()

# Send key actions to an element
element.send_keys('some string')
element.send_keys(Keys.ENTER)

# Clear text form element
element.clear()

# Click an element
element.click()