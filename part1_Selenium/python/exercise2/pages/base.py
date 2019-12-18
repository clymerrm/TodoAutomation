from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver


class BasePage():

    def __init__(self, driver):
        self.driver = driver

    def get_page(self, url):
        self.driver.get(url)

    def return_page_title(self):
        return self.driver.title

    def enter_text(self, desired_element, desired_text):
        desired_input = self.driver.find_element(*desired_element)
        desired_input.clear()
        desired_input.send_keys(desired_text)

    def quit_driver(self):
        self.driver.quit()
