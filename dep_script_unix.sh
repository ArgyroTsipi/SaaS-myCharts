#!/bin/bash

# Base paths for microservices and frontend
MICROSERVICES_PATH="./microservices"
FRONTEND_PATH="./frontend"

# Function to run npm install and nodemon index for a microservice in a new terminal window
run_microservice_in_new_window() {
    local MICROSERVICE_PATH=$1

    # Use the absolute path for the directory to ensure correct path resolution
    ABSOLUTE_MICROSERVICE_PATH=$(realpath "$MICROSERVICE_PATH")

    # Open a new terminal window and run the commands for the microservice
    osascript <<EOF
        tell application "Terminal"
            do script "cd '$ABSOLUTE_MICROSERVICE_PATH' && npm install lodash && npm install && npx nodemon index"
        end tell
EOF
}

# Function to run npm install and npm run start for the frontend in a new terminal window
run_frontend_in_new_window() {
    local FRONTEND_PATH=$1

    # Use the absolute path for the frontend directory
    ABSOLUTE_FRONTEND_PATH=$(realpath "$FRONTEND_PATH")

    # Open a new terminal window and run the commands for the frontend
    osascript <<EOF
        tell application "Terminal"
            do script "cd '$ABSOLUTE_FRONTEND_PATH' && npm install && npm run start"
        end tell
EOF
}

# Iterate over each microservice folder
for folder in "$MICROSERVICES_PATH"/*; do
    if [ -d "$folder" ]; then
        run_microservice_in_new_window "$folder"
    fi
done

# Run the frontend
run_frontend_in_new_window "$FRONTEND_PATH"
