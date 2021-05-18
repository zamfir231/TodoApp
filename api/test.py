import requests

url = 'http://localhost:3000/api/sign-up'

data = {
	'email': 'zamfiredi5@gmail.com',
	'name': 'edi',
	'password': 'asdfg'
}

x = requests.post(url, data=data)

print(x.text())