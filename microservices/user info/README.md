# User info Server

### Server Features
* Detailed info about a user
    * Email 
    * Name 
    * Last Login
    * Number of Credits

### Installation Guide
* Run npm install to install all dependencies
* Create an .env file in your project root folder and add your variables (It may already exist).
 
### Usage
* `Run npm dev` to start the application.

### API Endpoints
| HTTP Verbs | Endpoints | Action | Headers | URL parameters |
| --- | --- | --- | --- | --- |
| GET | [/userInfo/getInfo/'](./src/controllers/getInfo.js) | To get info about the loggeg in user | "Authorization": "Access Token" | --- |

### Technologies Used
* NodeJS
* Express
* RabbitMQ