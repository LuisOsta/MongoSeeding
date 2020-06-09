#!/bin/sh
mongoimport --collection employees --file employeedata.json --jsonArray --uri "mongodb://mongo:27017"