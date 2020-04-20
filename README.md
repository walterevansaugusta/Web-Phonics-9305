# Brainy-Web-Phonics
## Delivery Documentation

### Release Notes

#### New Features for this release
* Added Login and Registration with picture passwords (Name must be unique)
* Home/Landing page after login
* Category pages for each type of phoneme
* Phoneme Lessons and audio capabilities
* Quiz features and star achievements
* Progress bar/tracking for individual users
#### Bug Fixes in this release
* N/A
#### Known Bugs in this release
* N/A

### Installation Guide

#### Prerequisites
* MongoDB
    * You must have MongoDB installed and running on your computer. The MongoDB connection string is specified in config.json
    * https://docs.mongodb.com/manual/installation/
* Express.js
    * https://expressjs.com/
* Angular
    * https://angular.io/guide/setup-local
* Node / Npm
    * https://nodejs.org/en/download/

#### Dependencies
* Type `npm i` in the terminal while in the “brainy-frontend” folder and in the “brainy-backend” folder to get all of the dependencies.

#### Download
* Clone the repository. 
   ```
   git clone https://github.com/frankiekim5/Brainy-Web-Phonics
   ```

#### Build
* No build necessary for this app.

#### Installation
* No further installation is required.

#### Running Application
* To launch the backend server:
    * Launch a terminal window, navigate to the backend directory, and type:  
      ```
      node server.js
      ```
* To launch the frontend:
    * Launch a new terminal window, navigate to the frontend directory, and type: 
      ```
      ng serve
      ````
    * On a browser window, type in ***localhost:4200*** to view the application.

#### Troubleshooting
* If you are experiencing issues with `get project metadata` when running the frontend, type in the following command to the terminal to fix the issue:
  ```
  npm i @angular-devkit/build-angular@0.803.24
  ```
