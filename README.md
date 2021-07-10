# fake-apis-server

Express Typescript server

https://still-earth-97911.herokuapp.com/

Pushing on the `main` branch automatically updates the heroku deployment. The API is hosted on [Florian LEFEBVRE](https://github.com/florian-lefebvre)'s personal heroku account.

## Scripts

```bash
# Starts dev server (typescript from src/)
$ yarn dev

# Build the project from typescript to javascript files in dist/
$ yarn build:windows
$ yarn build:linux

# Starts the server (js from dist/)
$ yarn start

```

## API Routes

### EcoleDirecte

**Headers:** Content-Type: text/plain

**Available users**

- _login:_ john.doe / _password:_ 123456 / _token:_ a95fd30b-ca20-467b-8128-679f48e1498e

#### Login

`POST` `/ecoledirecte/login`

```raw
data={
    "identifiant": "<login>",
    "motdepasse": "<password>"
}
```

For any other route, token in data is required like:

```raw
data={
    "token": "<token>",
}
```

#### Grades

`POST` `/ecoledirecte/grades`

#### Homework

- All upcoming: `POST` `/ecoledirecte/homework`
- By date: `POST` `/ecoledirecte/homework/:date` (yyyy-mm-dd)

#### Workspaces

`POST` `/ecoledirecte/workspaces`

#### Contacts

`POST` `/ecoledirecte/contacts`

#### School life

`POST` `/ecoledirecte/schoollife`

### Agenda

`POST` `/ecoledirecte/agenda`

`<date>` as `yyyy-mm-dd` format. Example: 2021-07-10

Returns events between two dates. Never returns anything on Saturdays and Sundays.


```raw
data={
    "token": "<token>",
    "dateDebut": "<date>",
    "dateFin": "<date>"
}
```

#### Mails

- All : `POST` `/ecoledirecte/mails`
- By id: `POST` `/ecoledirecte/mails/:id` (int)

### Pronote

Not implemented yet.
