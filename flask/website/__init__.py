from flask import Flask
from flask_sqlalchemy  import SQLAlchemy
import os

db = SQLAlchemy( )
DB_NAME = "philly_travel.db"

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] =  'cookie'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(os.path.abspath(os.path.dirname(__file__)), '..', 'philly_travel.db')
    db.init_app(app)
     
    from .views import views 

    app.register_blueprint(views, url_prefix = '/')

    return app
