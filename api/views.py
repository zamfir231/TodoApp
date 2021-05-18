from flask import Blueprint, request, jsonify
from . import db 
from .models import User, Task
import string
import random

views = Blueprint('views', __name__)

def genereate_unique_code(length=6):
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if User.query.filter_by(code=code).count() == 0:
            break

    return code

@views.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']

    user = User.query.filter_by(email=email).first()

    print(email)

    if user:
    	return {
    		"code": user.code,
    		"tasks": user.tasks,
    	}

    return jsonify({"Email not registered": 404})

@views.route('/sign-up', methods=['POST'])
def signUp():
	data = request.get_json()
	email = data['email']
	name = data['name']
	password = data['password']

	

	new_user = User(code='asdrgh', email=email, password=password, name=name)

	db.session.add(new_user)

	db.session.commit()