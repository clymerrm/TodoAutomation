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
driver.find_element_by_partial_link_text("some xpath")
driver.find_element(By.PARTIAL_LINK_TEXT, "some xpath")

# CSS Selector
driver.find_element_by_css_selector("some xpath")
driver.find_element(By.CSS_SELECTOR, "some xpath")

# Class Name
driver.find_element_by_class_name("some xpath")
driver.find_element(By.CLASS_NAME, "some xpath")

# Name
driver.find_element_by_name("some xpath")
driver.find_element(By.NAME, "some xpath")

# Tag Name
driver.find_element_by_tag_name("some xpath")
driver.find_element(By.TAG_NAME, "some xpath")

# Find all elements with matching selector
driver.find_elements_by_xpath("some xpath")
driver.find_elements(By.XPATH, "some xpath")
