from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
driver = webdriver.Chrome(ChromeDriverManager().install())

# Id
driver.find_element_by_id("some id")
driver.find_element(By.ID, "some id")

# XPATH
driver.find_element_by_xpath("some xpath")
driver.find_element(By.XPATH, "some xpath")

# Link Text
driver.find_element_by_link_text("some link text")
driver.find_element(By.LINK_TEXT, "some link text")

# Partial Link Text
driver.find_element_by_partial_link_text("some partial link text")
driver.find_element(By.PARTIAL_LINK_TEXT, "some partial link text")

# CSS Selector
driver.find_element_by_css_selector("some css")
driver.find_element(By.CSS_SELECTOR, "some css")

# Class Name
driver.find_element_by_class_name("some class name")
driver.find_element(By.CLASS_NAME, "some class name")

# Name
driver.find_element_by_name("some name")
driver.find_element(By.NAME, "some name")

# Find all elements with matching selector
driver.find_elements_by_xpath("some xpath")
driver.find_elements(By.XPATH, "some xpath")
