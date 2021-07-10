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

https://github.com/EduWireApps/ynotes/blob/190cbb7bc4f1b163be8db62881f48dddaef2bee7/lib/core/apis/EcoleDirecte/ecoleDirecteMethods.dart#L341

#### Grades

`POST` `/ecoledirecte/grades`

https://github.com/EduWireApps/ynotes/blob/190cbb7bc4f1b163be8db62881f48dddaef2bee7/lib/core/apis/EcoleDirecte/ecoleDirecteMethods.dart#L53

#### Homework

##### Upcoming

`POST` `/ecoledirecte/homework`

https://github.com/EduWireApps/ynotes/blob/190cbb7bc4f1b163be8db62881f48dddaef2bee7/lib/core/apis/EcoleDirecte/ecoleDirecteMethods.dart#L83

##### By date

`POST` `/ecoledirecte/homework/:date` (yyyy-mm-dd)

https://github.com/EduWireApps/ynotes/blob/190cbb7bc4f1b163be8db62881f48dddaef2bee7/lib/core/apis/EcoleDirecte/ecoleDirecteMethods.dart#L136

#### Workspaces

`POST` `/ecoledirecte/workspaces`

https://github.com/EduWireApps/ynotes/blob/190cbb7bc4f1b163be8db62881f48dddaef2bee7/lib/core/apis/EcoleDirecte/ecoleDirecteMethods.dart#L151

#### Contacts

`POST` `/ecoledirecte/contacts`

https://github.com/EduWireApps/ynotes/blob/190cbb7bc4f1b163be8db62881f48dddaef2bee7/lib/core/apis/EcoleDirecte/ecoleDirecteMethods.dart#L161

#### School life

`POST` `/ecoledirecte/schoollife`

https://github.com/EduWireApps/ynotes/blob/190cbb7bc4f1b163be8db62881f48dddaef2bee7/lib/core/apis/EcoleDirecte/ecoleDirecteMethods.dart#L174

### Pronote

TBD
