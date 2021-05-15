from flask import Blueprint, request, jsonify

views = Blueprint('views', __name__)

@views.route('/haha', methods=['POST'])
def haha():
    req = request.get_json(force=True)
    return jsonify({'data': 'haha'})
