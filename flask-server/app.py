from flask import Flask, jsonify, request
import db


app = Flask(__name__)


@app.route('/')
def flask_mongodb_atlas():
    return "flask mongodb atlas!"


# API to add one recipe to database
# When testing, must use double quotes in postman for POST body
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
        

# API to remove a recipe from the database using the recipe's name
# e.g. body might be {"name": "Eggs"}
@app.route('/removeOne', methods=["DELETE"])
def removeOne():
     input_json = request.get_json(force=True)      
     dictToReturn = {'name': input_json['name']}
     jsonify_version = jsonify(dictToReturn)     
     
     # remove from database
     db.db.collection.delete_one(dictToReturn)
     return jsonify_version
        

# Put this below all APIs
if __name__ == '__main__':
    app.run(port=8000)
