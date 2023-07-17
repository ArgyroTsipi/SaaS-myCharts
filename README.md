# NTUA ECE SAAS 2023 PROJECT
  
## TEAM (60)
  
### Members
* Argyro Tsipi (el19950)
* Theodora Boutsini (el19094)
* Evangelos Kontogiannis (el19104)


# Application Overview

Our application, **MyCharts**, consists of six microservices and a frontend project. The architectures that were used were `MVC` in each microservice and `Microservices architecture` for the entire app. Moreover, the technologies that were used are "NodeJs" for the microservices, "MongoDb" for the microservices' databases, "React" for the frontend and "RabbitMQ" for the message queue. The databases are deployed on cloud. 

Note: The redis database which exists in this project was meant to be used as a cache for access tokens, but eventually we did not implement accessToken-refreshToken authorization. We only use the access token that expires after a set amount of time. After the expiration, user's interaction with the app is forbidden and the user needs to log in again.

## Microservices Overview

We have six microservices : 
* user-info : it has its database in which it stores each user's information. With the message queue it communicates with the other microservices when an update of user information is needed. 

* auth : it has its database in which it stores all user IDs, so when a user tries to login it checks if the user is new or not. This microservice is responsible of logging in and logging out users.

* user-charts : in its database it stores all users' saved charts. It is responsible of returning their charts to frontend.

* create-chart : it validates the templates the users upload when creating a chart and it forms the final chart configuration which will be rendered in the frontend.

* download-templates : it is responsible of allowing the users to download the templates which they will fill and upload to create their chart. The templates are stored in a folder inside this microservice.

* purchase-credits : it publishes in the message queue the credits a user bought so that his account information get updated. This microservice has not each own database.

## Deployment Scripts

This repository contains two deployment script that automate the process of setting up and running multiple microservices and a frontend project. The scripts install dependencies and start the microservices and frontend in separate windows.

## Prerequisites

### For Running the Deployment Script

- Node.js and npm should be installed on your system.
- Make sure you have the necessary permissions to execute scripts.

### For Running the Dockerized App

- Docker should be installed and properly configured on your machine.

## Usage

### Running the Deployment Script

1. Clone this repository to your local machine.

2. Open a terminal or command prompt and navigate to the directory where the script is located.

3. Run the script:

   - If you are using PowerShell (Windows), execute the script using the command: `./dep_script_windows`.
   - If you are using Bash (macOS/Linux), execute the script using the command: `bash dep_script_unix.sh`.

4. The script will open separate windows or terminals for each microservice, running `npm install` and `nodemon index` within their respective directories. Additionally, a new window or terminal will be opened for the frontend project, running `npm install` and `npm run start`.

Note: Ensure that you have `npm` installed and available in your system's PATH for the commands to work properly.

### Running the Dockerized App

1. Clone this repository to your local machine.

2. Run docker-compose up in the directory the compose.yml file is located.

3. Seven containers will appear in your Docker Desktop application. One container for each microservice and one container for the frontend.

4. You can check they are all on the same network by running the command `docker network inspect saasNet` in the terminal.


### Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

###Test mail for google login
* ntuasoftlab@gmail.com
* if you need another test email please contact us


