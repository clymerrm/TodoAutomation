from selenium.webdriver.common.by import By

from part1_Selenium.python.exercise2.pages.base import BasePage


class Header(BasePage):
    title_text = (By.CSS_SELECTOR, '[data-test-key=Header]')
    home_button = (By.CSS_SELECTOR, '[data-test-key=HomeLink]')
    schedule_button = (By.CSS_SELECTOR, '[data-test-key=ScheduleLink]')
    speakers_button = (By.CSS_SELECTOR, '[data-test-key=SpeakersLink]')


    def header_visible(self):
        headerText = self.driver.find_element(self.title_text)
        return headerText.is_displayed()

    def click_button(self, which_button):
        if which_button == 'schedule':
            self.driver.find_element(self.schedule_button).click()
        elif which_button == 'speakers':
            self.driver.find_element(self.speakers_button).click()
        elif which_button == 'home':
            self.driver.find_element(self.home_button).click()

    def return_header_text(self):
        return self.driver.find_element(self.title_text).text
