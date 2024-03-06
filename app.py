from flask import Flask, render_template

app = Flask(__name__)

# Sample destination data stored in a Python list
destinations = [
    {"id": 1, "name": "Destination 1", "image": "/static/destination1.jpg", "description": "Description for Destination 1", "rating": 4.5},
    {"id": 2, "name": "Destination 2", "image": "/static/destination2.jpg", "description": "Description for Destination 2", "rating": 4.0},
    # Add more destinations as needed
]

@app.route('/')
def index():
    return render_template('index.html', destinations=destinations)

@app.route('/destination/<int:destination_id>')
def destination(destination_id):
    # Fetch destination data based on the destination_id
    destination = next((dest for dest in destinations if dest["id"] == destination_id), None)
    if destination:
        return render_template('destination.html', destination=destination)
    else:
        return "Destination not found", 404

if __name__ == '__main__':
    app.run(debug=True)

    