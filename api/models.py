from . import db 

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(10000))
    description = db.Column(db.String(10000))
    date = db.Column(db.String(100))
