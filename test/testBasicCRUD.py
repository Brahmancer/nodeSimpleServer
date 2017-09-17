# File: testGetObj.py
# Author: dmiller4991@gmail.com
# Description: Test script: tests the data endpoint of the server.

# Imports
import requests

# Test Class
class TestBasicCRUD:

    testData = {"id ": 0, "name" : "Boaty McBoatFace"}

    def testPostObj(self):
        # local varaibles;
        response = requests.post("http://localhost:10000/data", json = self.testData)
        if response.status_code is not 200:
            print("Test failed: response is not what was expected. "
            + "Expected 200, got " + str(response.status_code))
            exit()
        else:
            print("Test passed!")

    def testGetObj(self):

        # Make resquest
        response = requests.get("http://localhost:10000/data", json= {"id": "0"})
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
    # test.testGetObj()
    test.testPutObj()
    test.testDeleteObj()
