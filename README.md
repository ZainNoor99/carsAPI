# Cars API
I built the carsAPI to help me better understand and gain experience in building REST APIS

This API was built using:
- Node.js
- Express
- mongoDB and mongoosejs

The API is purely a backend app and does not have a front end component. I tested its functionality using Postman

# Project Overview
### Car Data Model

Property | Type | Required | Description | 
--- | --- | --- | --- |
id | integer | N/A | An automatically generated id assigned to each car | 
doors | integer | true | The number of doors the car has | 
colour | string | true | The colour of the car | 
make | string | true | The make of the car | 
model | string | true | The specific model of the car | 

# Supported requests
Endpoint | Description | 
--- | --- | 
GET /cars | Retrieves all cars in the database |
POST /cars | Creates a new car |
PUT /cars/:id | Updates an existing car |
DELETE /cars/:id | Deletes an existing car |

# Sample Requests and Responses
### Retrieve all cars
```
GET /cars
```
#### Request Params
- None

####  Request Body Sample (JSON)
- None

#### Response Sample
```
[
    {
        "_id": "614ab3d4a9b79d31b5334ad5",
        "doors": 4,
        "colour": "purple",
        "make": "Lexus",
        "model": "IS 350",
        "__v": 0
    },
    {
        "_id": "614ab544a9b79d31b5334ad8",
        "doors": 2,
        "colour": "Blue",
        "make": "BMW",
        "model": "335i",
        "__v": 0
    },
    {
        "_id": "614ab552a9b79d31b5334ada",
        "doors": 4,
        "colour": "Black",
        "make": "Toyota",
        "model": "Corolla",
        "__v": 0
    }
]
```

### Create a car
```
POST /cars
```
#### Request Params
- None

####  Request Body Sample (JSON)
```
{
    "colour": "Black",
    "make": "Toyota",
    "model": "Corolla",
    "doors": 4
}
```

#### Response Success Sample
- Status: 200
```
{
    "_id": "614ab552a9b79d31b5334ada",
    "doors": 4,
    "colour": "Black",
    "make": "Toyota",
    "model": "Corolla",
    "__v": 0
}
```

#### Response Failure Sample (missing doors attribute)
- Status: 422
```
{
    "error": "car validation failed: doors: Number of doors is required"
}
```

### Update a car
```
PUT /cars/:id
```
#### Request Params
- id

####  Request Body Sample (JSON)
```
{
    //only attributes you wish to update are required
    "colour": "White"
}
```

#### Response Success Sample
- Status: 200
```
{
    "_id": "614ab552a9b79d31b5334ada",
    "doors": 4,
    "colour": "White",
    "make": "Toyota",
    "model": "Corolla",
    "__v": 0
}
```

#### Response Failure Sample (invalid id)
- Status: 422
```
{
    "error": "Cast to ObjectId failed for value \"{ _id: 'invalidID' }\" (type Object) at path \"_id\" for model \"car\""
}
```

### Delete a car
```
PUT /cars/:id
```
#### Request Params
- id

####  Request Body Sample (JSON)
- None

#### Response Success Sample
- Status: 200
```
{
    "_id": "614ab552a9b79d31b5334ada",
    "doors": 4,
    "colour": "White",
    "make": "Toyota",
    "model": "Corolla",
    "__v": 0
}
```

#### Response Failure Sample (invalid id)
- Status: 422
```
{
    "error": "Cast to ObjectId failed for value \"{ _id: 'invalidid' }\" (type Object) at path \"_id\" for model \"car\""
}
```



