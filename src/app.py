from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from dotenv import load_dotenv
from stream_chat import StreamChat
load_dotenv() # load env variables


stream_api_key = os.getenv('STREAM_API_KEY')
stream_api_secret = os.getenv('STREAM_API_SECRET')
stream_app_id = os.getenv('STREAM_APP_ID')
app = Flask(__name__)
CORS(app)
users_file_path = "json/users.json"
groups_file_path = "json/groups.json"
chat_client = StreamChat(api_key=stream_api_key, api_secret=stream_api_secret)


def load_data(file_path):
    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            return json.load(file)
    else:
        return []

def save_data(file_path, data):
    with open(file_path, 'w') as file:
        json.dump(data, file, indent=2)

@app.route('/users', methods=['GET'])
def get_users():
    users = load_data(users_file_path)
    return jsonify(users)

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user_by_id(user_id):
    users = load_data(users_file_path)
    user = next((user for user in users if user['id'] == user_id), None)

    if user:
        return jsonify(user)
    else:
        return jsonify({"message": "User not found"}), 404

@app.route('/groups', methods=['GET'])
def get_groups():
    groups = load_data(groups_file_path)
    return jsonify(groups)

@app.route('/groups/<int:group_id>', methods=['GET'])
def get_group_by_id(group_id):
    groups = load_data(groups_file_path)
    group = next((group for group in groups if group['id'] == group_id), None)

    if group:
        return jsonify(group)
    else:
        return jsonify({"message": "Study group not found"}), 404

@app.route('/users', methods=['POST'])
def add_user():
    new_user = request.get_json()
    users = load_data(users_file_path)
    new_user['id'] = len(users) + 1
    users.append(new_user)
    save_data(users_file_path, users)
    print(users)
    return jsonify(new_user), 201

@app.route('/groups', methods=['POST'])
def add_group():
    new_group = request.get_json()
    groups = load_data(groups_file_path)
    new_group['id'] = len(groups) + 1
    groups.append(new_group)
    save_data(groups_file_path, groups)
    print(groups)
    return jsonify(new_group), 201

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()

        if 'email' not in data or 'password' not in data:
            return jsonify({"message": "Email and password is required"}), 400
        
        email = data['email']
        password = data['password']

        users = load_data(users_file_path)
        user = user = next((user for user in users if user['email'] == email and user['password'] == password), None)

        if user:
            print(user)
            return jsonify(user)
        else:
            return jsonify({"message": "User not found"}), 404
    except Exception as e:
        print(str(e))
        return jsonify({"message": "Internal Server Error"}), 500
    
@app.route('/update-user-info', methods=['POST'])
def update_user_info():
    try:
        data = request.get_json()
        user_id = data.get('userId')
        new_fields = {key: value for key, value in data.items() if key != 'userId'}

        if user_id is None:
            return jsonify({"message": "User identifier is required"}), 400
        
        users = load_data(users_file_path)
        user = next((user for user in users if user['id'] == user_id), None)

        if user:
            user.update(new_fields)
            save_data(users_file_path, users)
            return jsonify({"message": "User information updated successfully"})
        else:
            return jsonify({"message": "User not found"}), 404
    except Exception as e:
        print(str(e))
        return jsonify({"message": "Internal Server Error"}), 500

@app.route('/stream-token', methods=['POST'])
def get_stream_token():
    user_data = request.json
    users = load_data(users_file_path)

    user = next((u for u in users if u['id'] == user_data['user_id'] and u['password'] == user_data['password']), None)
    if not user:
        return jsonify({'message': 'Invalid credentials'}), 401

    print(user['id'])
    token = chat_client.create_token(str(user['id']))
    print(token)
    return jsonify({'token': token, 'user': user})

if __name__ == '__main__':
    app.run(debug=True)