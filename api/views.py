from flask import Blueprint, jsonify

views = Blueprint('views', __name__)

@views.route('/haha')
def haha():
    return jsonify({'data': 'haha'})