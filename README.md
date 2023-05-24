# Sequelize GPs API
This API allows you to perform CRUD operations on a database of F1 Grands Prix!

GP(s) = Grand(s) Prix

## Endpoints
The following section provides information on the available endpoints for this API.

### Create a GP

**Method**: ```POST```

**Endpoint**: ```/api/gps```

**Description**: This endpoint creates a new GP with the provided information in the request body.

Request Body:
```
{
  "circuit": "string",
  "laps": integer,
  "winner": "string",
  "winningCnstrc: "string"
}
```

Response:
```
{
  "id": integer,
  "circuit": "string",
  "laps": integer,
  "winner": "string",
  "winningCnstrc: "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Get All GPs

**Method**: GET

**Endpoint**: ```/api/gps```

**Description**: This endpoint retrieves all the GPs stored in the database.

Response:
```
[
  {
    "id": integer,
    "circuit": "string",
    "laps": integer,
    "winner": "string",
    "winningCnstrc: "string",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
]
```

### Update a GP

**Method**: ```PUT```

**Endpoint**: ```/api/gps/:id```

**Description**: This endpoint updates the GP with the specified id using the information in the request body.

Request Body:
```
{
  "circuit": "string",
  "laps": integer,
  "winner": "string",
  "winningCnstrc: "string"
}
```

Response:
```
{
  "id": integer,
  "circuit": "string",
  "laps": integer,
  "winner": "string",
  "winningCnstrc: "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Delete a GP

**Method**: ```DELETE```

**Endpoint**: ```/api/gps/:id```

**Description**: This endpoint deletes the GP with the specified id from the database.

Response:
```
{
  "id": integer,
  "circuit": "string",
  "laps": integer,
  "winner": "string",
  "winningCnstrc: "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```