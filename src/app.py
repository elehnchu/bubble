from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)
users_file_path = 'json/users.json'

def load_user_data():
    if os.path.exists(users_file_path):
        with open(users_file_path, 'r') as file:
            return json.load(file)
    else:
        return []
        
def save_user_data(data):
    with open(users_file_path, 'w') as file:
        json.dump(data, file, indent=2)

@app.route('/users', methods=['GET'])
def get_users():
    users = load_user_data()
    return jsonify(users)

@app.route('/users', methods=['POST'])
def add_user():
    new_user = request.get_json()
    users = load_user_data()
    new_user['id'] = len(users) + 1
    users.append(new_user)
    save_user_data(users)
    print(users)
    return jsonify(new_user), 201

if __name__ == '__main__':
    app.run(debug=True)

