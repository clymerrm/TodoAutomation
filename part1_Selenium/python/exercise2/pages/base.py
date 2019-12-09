from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver


class BasePage(object):

    def __init__(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())

    def get_page(self, url):
        self.driver.get(url)

    def return_page_title(self):
        return self.driver.title
