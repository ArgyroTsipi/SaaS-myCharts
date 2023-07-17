# Purchase Credits Server

### Server Features
* Purchase Credits for creating charts.
* Reduce the number of credits ('-') POST request in URL parameters.
### Installation Guide
* Run npm install to install all dependencies
* Create an .env file in your project root folder and add your variables (It may already exist).

### Architecture Desctription
This microservice communicates via RabbitMQ with [User info](../user%20info) microservice. It updates the number of tokens a user has
 
### Usage
* `Run npm dev` to start the application.

### API Endpoints
| HTTP Verbs | Endpoints | Action | Headers | URL parameters |
| --- | --- | --- | --- | --- |
| POST | [/credits/purchaseCredits/:numOfCredits'](./src/controllers/purchaseCredits.js) | To purchase {:numOfCredits} credits | "Authorization": "Access Token" | Number of credits |

### Technologies Used
* NodeJS
* Express
* RabbitMQ
