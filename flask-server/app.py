from flask import Flask, jsonify, request
import db


app = Flask(__name__)


@app.route('/')
def flask_mongodb_atlas():
    return "flask mongodb atlas!"


# must use double quotes in postman for POST body
# API to add one recipe to database
@app.route('/addOne', methods=["POST"])
def addOne():
     input_json = request.get_json(force=True) 
     dictToReturn = {'name': input_json['name'], 'ingredients': input_json['ingredients'], 'method' : input_json['method']}
     jsonify_version = jsonify(dictToReturn)
     db.db.collection.insert_one(dictToReturn)
     return jsonify_version


# API to retrieve all recipes in DB
@app.route("/getAll")
def getAll():

    all_docs = db.db.collection.find()
    data = []
    for doc in all_docs:
        # Making it into a string avoids this TypeError: Object of type ObjectId is not JSON serializable
        doc['_id'] = str(doc['_id']) 
        data.append(doc)

    return jsonify(data)
        

if __name__ == '__main__':
    app.run(port=8000)
