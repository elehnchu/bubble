from flask import Flask, render_template
from dotenv import load_dotenv
load_dotenv() # load env variables

import os
stream_api_key = os.getenv('STREAM_API_KEY')
stream_api_secret = os.getenv('STREAM_API_SECRET')
stream_app_id = os.getenv('STREAM_APP_ID')

app = Flask(__name__, template_folder='.')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=8000)