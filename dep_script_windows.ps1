# PowerShell script to run npm install and nodemon index for multiple microservices in separate windows,
# and run npm install and npm run start for the frontend in a separate window

# Set the base path for microservices and frontend
$microservicesPath = "./microservices"
$frontendPath = "./frontend"

# Function to run npm install and nodemon index for a microservice in a new PowerShell window
function RunMicroserviceInNewWindow {
    param(
        [string]$microservicePath
    )

    # Open a new PowerShell window and run the script for the microservice
    Start-Process powershell.exe -ArgumentList "-NoExit -Command `"Set-Location '$microservicePath';npm install lodash;npm install; nodemon index`"" 
}

# Open a new PowerShell window and run npm install and npm run start for the frontend
function RunFrontendInNewWindow {
    param(
        [string]$frontendPath
    )

    # Open a new PowerShell window and run the script for the frontend
    Start-Process powershell.exe -ArgumentList "-NoExit -Command `"Set-Location '$frontendPath'; npm install; npm run start`"" 
}

# Get the list of microservice folders
$microserviceFolders = Get-ChildItem -Path $microservicesPath -Directory

# Iterate over each microservice folder
foreach ($folder in $microserviceFolders) {
    $microservicePath = Join-Path -Path $microservicesPath -ChildPath $folder.Name
    RunMicroserviceInNewWindow -microservicePath $microservicePath
}

# Open a new PowerShell window and run npm install and npm run start for the frontend
RunFrontendInNewWindow -frontendPath $frontendPath


