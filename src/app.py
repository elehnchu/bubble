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
users_file_path = 'json/users.json'
chat_client = StreamChat(api_key=stream_api_key, api_secret=stream_api_secret)

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

@app.route('/stream-token', methods=['POST'])
def get_stream_token():
    user_data = request.json
    users = load_user_data()

    user = next((u for u in users if u['id'] == user_data['user_id'] and u['password'] == user_data['password']), None)
    if not user:
        return jsonify({'message': 'Invalid credentials'}), 401

    print(user['id'])
    token = chat_client.create_token(str(user['id']))
    print(token)
    return jsonify({'token': token, 'user': user})

if __name__ == '__main__':
    app.run(debug=True)