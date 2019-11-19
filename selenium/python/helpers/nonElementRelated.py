from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver

driver = webdriver.Chrome(ChromeDriverManager().install())

# Get a specific URL
driver.get('www.google.com')

# Quit the driver and close all associated windows
driver.quit()

# Close current browser window
driver.close()

# Refresh current browser session
driver.refresh()

# Get title of page
driver.title()

# Navigate forward in browser
driver.forward()

# Navigate backwards in browser
driver.back()

# Add a cookie to browser session
driver.add_cookie({'foo':'bar'})

# Clear all cookies from browser session
driver.delete_all_cookies()

# Execute a javascript command
driver.execute_script('javascript function')

# Return page source
driver.page_source()

# Return current page url
driver.current_url()
