# database.py

from flask import Flask, render_template, request, redirect, url_for, session
import mysql.connector

app = Flask(__name__, template_folder='templates')
app.secret_key = 'phillyTravel'  # Set a secret key for session management

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
    
    if place:
        place_dict = {
            'id': place[0],
            'name': place[1],
            'description': place[2],
            'image_url': place[3],
            'address': place[4],
            'rating': place[5]
        }
        
        # Fetch feedback and ratings for the specific place from session
        place_feedback = session.get(f'feedbacks_{place_id}', [])
        
        print("Feedback data:", place_feedback)  # Debugging statement
        
        return render_template('place_details.html', place=place_dict, place_feedback=place_feedback)
    else:
        return "Place not found"


@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    feedback = request.form['feedback']
    rating = request.form['rating']
    place_id = request.form['place_id']
    
    # Ensure 'feedbacks' key exists in session and is a list
    feedback_key = f'feedbacks_{place_id}'
    if feedback_key not in session:
        session[feedback_key] = []
    
    # Retrieve existing feedback list from session
    place_feedback = session[feedback_key]
    
    # Append new feedback and rating to the list
    place_feedback.append({'feedback': feedback, 'rating': rating})
    
    # Update session with the modified feedback list
    session[feedback_key] = place_feedback
    
    return redirect(url_for('place_details', place_id=place_id))


if __name__ == '__main__':
    app.run(debug=True)
