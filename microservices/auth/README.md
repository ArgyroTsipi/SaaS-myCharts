# Auth Server

### Server Features
* Provides Access Token - Refresh Token interface
* Login via Google OAuth2.0 
* Logout
* Token Authentication 
* Get new Access Token

### Architecture Description
Authentication microservice is connected with two databases and with [User Info](../user%20info/) microservice
* MongoDB Database, where it stores id, name and email of users
* Redis, where it store the access token and the user id
* [User Info](../user%20info/) microservice, where it sends, via RabbitMQ, more information about the user.

### Authentication process Description
When a user logs in (it can be new user) he gets a new pair of access and refresh token. 
The access token is used to access the other microservices. 
The refresh token is used to obtain a new access token when the current access token expires. 
When a user logs out the acces token is deleted from the redis database

### Google OAuth2Client
When a user clicks in frontend to log in with google account a google token is issued to this user. This token is sent in this microsevice where it get verified. From this google token we get user info(id, name, email) and then we create the access and refresh token that are based on user id.   

### Installation Guide
* Run npm install to install all dependencies
* Configure a MongoDB database and a Redis database 
* Create an .env file in your project root folder and add your variables (It may already exist).
 
### Usage
* `Run npm dev` to start the application.

### API Endpoints
| HTTP Verbs | Endpoints | Action | Headers | Body |
| --- | --- | --- | --- | --- |
| POST | [/auth/login](./src/controllers/loginController.js) | To sign up or login | --- | {"credential": "google OAuth Access Token"} |
| POST | [/auth/token](./src/controllers/tokenController.js) | To get new access token | --- | {"refreshToken": "refresh Token"}
| GET | [/auth/authenticateToken](./src/controllers/authenticateToken.js) | To authencticate an access Token(debug) | "Authorization": "Access Token" | --- |
| POST | [/auth/logout](./src/controllers/logoutController.js) | To logout a user | --- | {"refreshToken": "refresh Token"}
### Technologies Used
* NodeJS
* Express
* MongoDB
* Mongoose
* Redis


#### (!Databases: it is easier to run docker containers for databases instead of local installation.) 
