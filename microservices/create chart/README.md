# Create Chart Server

### Server Features

* validate user's uploaded tamplate
* create the final chart configuration of user's template

### Installation Guide
* Run npm install to install all dependencies
* Create an .env file in your project root folder and add your variables (It may already exist).
 
### Usage
* `run npm dev` to start the application.

### API Endpoints
| HTTP Verbs | Endpoints | Action | Headers | URL parameters | Body
| --- | --- | --- | --- | --- | -- |
| GET | [/create-chart/create'](./src/controllers/createChartController.js) | --- | --- | {user's template data} |

### Technologies Used
* NodeJS
* Express
