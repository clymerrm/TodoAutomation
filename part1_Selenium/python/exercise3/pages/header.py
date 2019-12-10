from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

from part1_Selenium.python.exercise2.pages.base import BasePage


class Header(BasePage):
    title_text = ()
    home_button = ()
    schedule_button = ()
    speakers_button = ()


    def header_visible(self):
        # return true if header is displayed

    def click_button(self, which_button):
        # click a specific button in the header

    def return_header_text(self):
        # return text in header