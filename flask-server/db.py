from flask import Flask
from flask_pymongo import pymongo
from app import app

# CONNECTION_STRING = "mongodb+srv://test:test@flask-mongodb-atlas-1g8po.mongodb.net/test?retryWrites=true&w=majority"


CONNECTION_STRING = "mongodb+srv://admin:Password1@cluster0.vwao5r0.mongodb.net/?retryWrites=true&w=majority"


client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('flask_mongodb_atlas')
user_collection = pymongo.collection.Collection(db, 'user_collection')
