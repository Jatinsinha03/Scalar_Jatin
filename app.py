from flask import Flask, request, jsonify
from flask_cors import CORS
import gpt_handler

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains on all routes

@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()  # Ensure you get JSON data
    leetcode_url = data.get('leetcode_url', '')
    user_question = data.get('question', '')
    
    # Check if both the URL and question are provided
    if not leetcode_url or not user_question:
        return jsonify({"error": "Both a LeetCode URL and a question are required."}), 400

    response = gpt_handler.generate(leetcode_url, user_question)
    return jsonify({"answer": response})

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Run on a specific port if needed
