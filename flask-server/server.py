from distutils.log import debug
from flask import Flask

app = Flask(__name__)

# routes
@app.route("/")
def home():
    return "HOME"

@app.route("/recipes")
def recipes():
    return {"recipes" : ["Apple", "Banana", "Orange"]}

if __name__ == "__main__":
    app.run(port=9000, debug=True)
