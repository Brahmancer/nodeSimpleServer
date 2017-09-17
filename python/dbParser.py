# File: dbParser.py
# Author: dmiller4991@gmail.com
# Description: File parser that will parse a given file name from arguments and spit out a username and password.

# Imports
import sys

# variables
password = None
username = None

# check platform.
if sys.platform == "win32":
	print("Platform is Windows")
elif sys.platform == "linux2":
	print("Platform is Debian")
else:
	# TODO: at some point, try and find other platforms.
	print("Platform is " + str(sys.platform))
	# exit()

# Check comamand line arguments.
if (len(sys.argv) < 2):
	print ("""
Usage:
	dbParser.py <path_to_file>
		""")
	exit()

# get the file name (for now, it's just gonna be the only command argument)
filename = sys.argv[1]

dbfile = open(filename, 'r')

# find all relevant information and put in a table
for line in dbfile:

	# use an index to parse lines from input file
	index = line.find("url: ")
	if index > -1:
		url = line[len("url: "):]
		url = url.rstrip("\n")
		print("url: " +  str(url))

	index = line.find("user: ")
	if index > -1:
		username = line[len("user: "):]
		username = username.rstrip("\n")
		print("username: " + str(username))

	index = line.find("pw: ")
	if index > -1:
		password = line[len("pw: "):]
		password = password.rstrip("\n")
		print("password: " + str(password))


if username is None or password is None:
		print ("Error: no username or password found in file.")
