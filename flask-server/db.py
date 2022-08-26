from flask import Flask
from flask_pymongo import pymongo
from app import app

CONNECTION_STRING = "mongodb+srv://admin:Password1@cluster0.vwao5r0.mongodb.net/?retryWrites=true&w=majority"


client = pymongo.MongoClient(CONNECTION_STRING)

# This will either find this database if it already exists, or create one
db = client.get_database('flask_mongodb_atlas')

# This will create a collection named 'collection' within the above database
user_collection = pymongo.collection.Collection(db, 'user_collection')
