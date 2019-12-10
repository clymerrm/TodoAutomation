from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

from part1_Selenium.python.exercise2.pages import BasePage


class CreateTasks(BasePage):
    task_name_input = (By.CSS_SELECTOR, '[data-test-key=TaskNameInput]')
    due_date_input = (By.CSS_SELECTOR, '.react-datepicker__input-container input')
    create_task_button = (By.CSS_SELECTOR, '[data-test-key=CreateTaskButton]')

    def create_task_appears(self):
        return self.driver.find_element(*self.task_name_input).is_displayed()

    def create_new_task(self, task_name, due_date):
        self.enter_text(self.task_name_input, task_name)
        date_length = len(self.driver.find_element(By.CSS_SELECTOR, 'div[class*="datepicker__input-container"]>input').get_attribute('value'))
        self. driver.find_element(By.CSS_SELECTOR, 'div[class*="datepicker__input-container"]>input').send_keys(date_length * Keys.BACKSPACE)
        self.enter_text(self.due_date_input, due_date)
        self.driver.find_element(*self.create_task_button).click()
