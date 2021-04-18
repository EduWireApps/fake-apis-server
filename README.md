# fake-apis-server

Express Typescript server

https://still-earth-97911.herokuapp.com/

## Deploy to Heroku

[Florian LEFEBVRE](https://github.com/florian-lefebvre) can only deploy the server since the app is registered on his Heroku account.

```bash
$ git push heroku main
```

## Scripts

```bash
$ yarn dev # Starts dev server (typescript from src/)

$ yarn build # Build the project from typescript to javascript files in dist/

$ yarn start # Starts the server (js from dist/)

```

## API Routes

### EcoleDirecte

**Headers:** Content-Type: text/plain

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
