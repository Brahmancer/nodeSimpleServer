# File: testGetObj.py
# Author: dmiller4991@gmail.com
# Description: Test script: tests the data endpoint of the server.

# Imports
import requests

# Test Class
class TestBasicCRUD:

    def testPostObj(self):
        # local varaibles;
        pass

    def testGetObj(self):

        # Make resquest
        response = requests.post("http://localhost:10000/data", json= {"id": "0"})
        print("Response json data:")
        print(response.json())

    def testPutObj(self):
        pass

    def testDeleteObj(self):
        pass

# If it's running as an executable script, run the script.
if __name__ == '__main__':
    # print("This only executes when %s is executed rather than imported" % __file__)

    # Create Test object
    test = TestBasicCRUD()

    # run tests.
    test.testPostObj()
    test.testGetObj()
    test.testPutObj()
    test.testDeleteObj()
