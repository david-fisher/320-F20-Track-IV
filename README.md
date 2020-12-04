# 320-F20-Track-IV

This track is the integration between Rebel Scrum (front end) and Backend Babes (backend) for the scenario editor in the Ethics Simulator application. After starting the application locally, you can navigate to localhost:3000 in order to test and play around with the website. Most of the website is functional: You can create a scenario and edit them accordingly. 

The front end and backend use the axios library to handle API calls. The repository here contains scripts for the front-end of the scenario editors. These were created in React.


## Cloning Instructions

Run `git clone https://github.com/david-fisher/320-F20-Track-IV.git` in a directory of choice.

## How to Build

### Front End Component
run `npm install`, then `npm build` in the `scenario_editor` directory

When the build has been created, you may run the application with `npm start` in the `scenario editor` directory.

### Back End Component
Install postgreSQL:
https://www.postgresql.org/download/

Add PostgreSQL/[version, either 12 or 13]/bin and PostgreSQL/[version, either 12 or 13]/lib to PATH (on Windows) or make it an environment variable on Mac/Linux

In Command Prompt or terminal, call psql -U postgres -f [full filepath to database_setup.sql]. note: The file database_setup.sql can currently be found in the erd-implementation branch in the database folder.

To sign a user up and return an AUTH token, use `POST api/user/signup`
Users have have an email associated with them, as a string.
## Connecting to the Database
run `npm install all` within the directory containing package.json (currently scenario_editor) to install all dependencies for the pg package, which is the library used to communicate between the PostgreSQL database and the react.js app, as well as all other dependencies outlined in the package_lock.json file

Clone the database from https://github.com/david-fisher/320-F20-Track-II

Using the functions outlined in queries.js, which implements the REST API enumerated in app.js, frontend teams can now interact with the database from their React.js app as usual.

Worth noting: the pg package's use depends on certain user credentials used to access a common database (namely, the username/password for the postgresql database which you've set up using database_setup.sql). Since the git repository is public, it's a security risk to store these credentials in public on the clear web. Thus, we are using a .env file (locally, for now) to store these credentials. You will not be able to access the database from the React app without a properly configured .env file!

## Testing

In Command Prompt or Terminal, run `psql -U [user] -f [full filepath to insert_example_data.sql]`. This file can currently be found in the erd-implementation branch in the database directory.