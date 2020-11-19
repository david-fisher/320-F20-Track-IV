<center><h1>RS/BB/DT Integration V1</h1></center>

<center style="margin-left: 2rem">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
There are 3 members of the stack. Front-end (Rebel Scrum), Back-end (Backend Babes), Database (Differential Team). We clone a shared repo with all the components, and then link them. In the future we aim to use Docker.</center>

---
### Clone repo

```
git clone --single-branch --branch backend-babes-aj https://github.com/david-fisher/320-F20-Track-IV.git
```


## Frontend


```bash
$ cd frontend
$ npm install
...
$ npm start #opens automatically at localhost:3000 (if not busy)
```

## Backend


```bash
$ cd backend
$ npm install
...
$ cd server && node index.js
server started on port 6060
```

## Database

Please refer [here](https://github.com/david-fisher/320-F20-Track-II/blob/master/README.md) to install PostgreSQL and other dependencies. Then, run the following.

```bash
$ cd database
$ psql -U postgres -f database_setup.sql
...
$ psql -U postgres -f insert_example_data.sql
...
$ psql postgres
psql (13.0)

Type "help" for help.

postgres=# \dt;

List of relations
Schema | Name                 | Type  |  Owner
-------+----------------------+-------+----------
public | conversation         | table | postgres
public | conversation_choices | table | postgres
....
```
