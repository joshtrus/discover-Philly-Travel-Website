from flask import Flask, render_template
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
    return render_template('database.html',places = places)

if __name__ == '__main__':
    app.run(debug=True)
