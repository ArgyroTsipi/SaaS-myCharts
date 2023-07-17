# User Charts Server

### Server Features

* return user's charts
* save a user's chart
* return the number of charts a user has


### Installation Guide
* Run npm install to install all dependencies
* Create an .env file in your project root folder and add your variables (It may already exist).
 
### Usage
* `run npm dev` to start the application.

### API Endpoints
| HTTP Verbs | Endpoints | Action | Headers | URL parameters | Body
| --- | --- | --- | --- | --- | -- |
| POST | [/user-chart/save'](./src/controllers/chartSaveController.js) | --- | date | {final chart configuration} |
| GET | [/user-chart/fetch'](./src/controllers/chartFetchController.js) | --- | user_id | --- |
| GET | [/user-chart/countCharts'](./src/controllers/countFetchController.js) | --- | user_id| --- |

### Technologies Used
* NodeJS
* Express
