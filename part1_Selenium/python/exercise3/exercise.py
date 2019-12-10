import unittest
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from part1_Selenium.python.exercise3.pages import *

class LinkTest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())
        self.base = BasePage(self.driver)
        self.header = Header(self.driver)

    def tearDown(self):
        self.base.quit_driver()

    def test_click_schedule_link(self):
        self.base.get_page('http://www.automation-todos.com/latest')
        self.header.click_button('schedule')
        assert 'Schedule' in self.header.return_page_title()

    @unittest.skip("Need to write still")
    def test_click_speakers_link(self):
        self.base.get_page('http://www.automation-todos.com/latest')

if __name__ == "__main__":
    unittest.main()