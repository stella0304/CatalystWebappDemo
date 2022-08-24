from distutils.log import debug
from flask import Flask, request, jsonify

app = Flask(__name__)

# routes
@app.route("/")
def home():
    return "HOME"

@app.route("/recipes")
def recipes():
    return {"recipes" : ["Apple", "Banana", "Orange"]}

# POST API
@app.route('/post', methods=["POST"])
def testpost():
     input_json = request.get_json(force=True) 
     dictToReturn = {'text':input_json['text']}
     return jsonify(dictToReturn)

# this needs to be below all APIs
if __name__ == "__main__":
    app.run(port=9000, debug=True)
