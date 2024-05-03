from flask import Flask, render_template, request, redirect, url_for
import mysql.connector

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
    if place:
        place_dict = {
            'id': place[0],
            'name': place[1],
            'description': place[2],
            'image_url': place[3],
            'address': place[4],
            'rating': place[5]
        }
        return render_template('place_details.html', place=place_dict)
    else:
        return "Place not found"


@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    feedback = request.form['feedback']
    rating = request.form['rating']
    # Add code to update the database with the feedback and rating
    return redirect(url_for('database'))

if __name__ == '__main__':
    app.run(debug=True)
