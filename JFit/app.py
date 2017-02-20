from flask import Flask, send_file, jsonify, request, session, redirect, url_for
import json
from AuthendicationLogics.Users import Users


app = Flask(__name__)

@app.after_request
def add_header(response):
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    return response

@app.route("/api/isautherndicated", methods=['GET'])
def iaautherndicated():
    status = False
    email=""
    if('login' in session and session['login'] !=""):
        status = True
        email = str(session['login'])
    return jsonify({'isLogged': status, 'email': email})

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/login", methods=['GET', 'POST'])
def login():
    return app.send_static_file("index.html")

@app.route("/api/login", methods=['POST'])
def authendicate():
    isAuthendicated = False
    json_data = request.json
    auth_col = []
    admin= Users("S", "J", "admin@admin", "1111")
    auth_col.append(admin)
    user1 = Users("B","B", "user@user", "1111")
    auth_col.append(user1)
    print("username from json = "+json_data["username"])
    print("password from json = "+json_data["password"])
    username = json_data["username"]
    password= json_data["password"]
    for user in auth_col:
        if username == user.login and password == user.password:
            session['login'] = username
            return jsonify({'isLogged': True, 'email':json_data["username"]})

    return jsonify({'isLogged': False, 'email': json_data["username"]})

@app.route("/api/content", methods=['GET'])
def content():
    list=[{'id': 1, 'name': 'Luke Skywalker', 'height': 177, 'weight': 70, 'profession': ''},
      {'id': 2, 'name': 'Darth Vader', 'height': 200, 'weight': 100, 'profession': ''},
      {'id': 3, 'name': 'Han Solo', 'height': 185, 'weight': 85, 'profession': ''}]
    return jsonify(list)

@app.route("/registration")
def registration():
    return app.send_static_file("index.html")

@app.route("/api/register", methods=['POST'])
def register_new_user():
    json_data = request.json
    email = json_data["email"]
    return (jsonify({'email':email,'isregistered': True}))


@app.route("/api/logout")
def logout():
    session.pop('login', None)
    print("logout")
    return jsonify({'isLogged': False, 'email': ""})

if __name__=="__main__":
    app.secret_key="sj113842"
    app.run()
