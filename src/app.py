from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/predict', methods=['POST'])
def predict():
    # Here you can run your Python logic, like machine learning models
    data = request.json  # Get JSON data from React frontend
    prediction = {"result": data["teamName"] + " will get clapped."}  # Replace with your actual prediction logic
    return jsonify(prediction)

if __name__ == '__main__':
    app.run(debug=True)
