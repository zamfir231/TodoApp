from flask import Blueprint, request, jsonify

views = Blueprint('views', __name__)

@views.route('/haha', methods=['POST'])
def haha():

    return jsonify({'ok': 200})