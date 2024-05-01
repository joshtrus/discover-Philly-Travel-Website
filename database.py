from flask import Flask, render_template, request, redirect, url_for, jsonify
import mysql.connector
import random

app = Flask(__name__, template_folder='templates')

# Connect to MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Douhaveatime007!",
    database="philly_travel"
)

@app.route('/')
def index():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM places")
    places = cursor.fetchall()
    return render_template('database.html', places=places)

@app.route('/place/<int:place_id>')
def place_details(place_id):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM places WHERE id = %s", (place_id,))
    place = cursor.fetchone()
    return render_template('place_details.html', place=place)

@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    feedback = request.form['feedback']
    rating = request.form['rating']
    # Add code to update the database with the feedback and rating
    return redirect(url_for('database'))

@app.route('/getRandomImageUrl', methods=['GET'])
def get_random_image_url():
    try:
        cursor = db.cursor()
        cursor.execute("SELECT picture_url FROM places")
        image_urls = cursor.fetchall()
        random_image_url = random.choice(image_urls)[0]  # Select a random image URL
        return jsonify({"imageUrl": random_image_url}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
