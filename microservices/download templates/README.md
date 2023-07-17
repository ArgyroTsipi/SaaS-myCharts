# Download Templates Server

### Server Features
* Based on chart type the user wants to render, it provides the template to be filled with the data and an example template

### Installation Guide
* Run npm install to install all dependencies
* Create an .env file in your project root folder and add your variables (It may already exist).
 
### Usage
* `Run npm dev` to start the application.

### API Endpoints
| HTTP Verbs | Endpoints | Action | Headers | URL parameters |
| --- | --- | --- | --- | --- |
| GET | [/template/:templateType/:isExample'](./src/controllers/templatesDownload.js) | Get empty or example template | --- | template type, is example |

### Technologies Used
* NodeJS
* Express

