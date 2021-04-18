# fake-apis-server

Express Typescript server

## API Routes

### EcoleDirecte

**Headers:** Content-Type: text/plain

#### Login: `POST` `/ecoledirecte/login`

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

#### Grades: `POST` `/ecoledirecte/grades`

#### Homework overview: `POST` `/ecoledirecte/homework`
#### Get homework by date: `POST` `/ecoledirecte/homework/:date` (YEAR-MONTH-DAY: 2020-05-06)

### Pronote

TBD
