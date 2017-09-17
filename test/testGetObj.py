# File: testGetObj.py
# Author: dmiller4991@gmail.com
# Description: Test script: tests the data endpoint of the server.

import requests

class TestGetObject():
    def testGetObj(self):
        response = requests.post("http://localhost:10000/data", json= {"id": "0"})
        print("Response json data:")
        print(response.json())


# If it's running as an executable script, run the script.
if __name__ == '__main__':
    print("This only executes when %s is executed rather than imported" % __file__)
    test = TestGetObject()
    test.testGetObj()
