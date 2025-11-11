# Backend API Documentation

## /users/register Endpoint

**Description**
Registers a new user by creating a user account with the provided information.

**HTTP Method**
POST

### Request Body (JSON)

* fullname (object):

  * firstname (string, required): User's first name (minimum 3 characters).
  * lastname (string, optional): User's last name (minimum 3 characters).
* email (string, required): User's email address (must be a valid email).
* password (string, required): User's password (minimum 6 characters).

### Example Response

```
user (object):
  fullname (object)
    firstname (string)
    lastname (string)
  email (string)
  password (string)
token (String)
```

---

## /users/login Endpoint

**Description**
Authenticates a user using their email and password, returning a JWT token upon successful login.

**HTTP Method**
POST

### Request Body

* email (string, required)
* password (string, required)

### Example Response

```
user (object):
  fullname (object)
    firstname (string)
    lastname (string)
  email (string)
  password (string)
token (String)
```

---

## /users/profile Endpoint

**Description**
Retrieves the profile information of the currently authenticated user.

**HTTP Method**
GET

**Authentication**
Requires `Authorization: Bearer <token>`

### Example Response

```
user (object):
  fullname (object)
    firstname (string)
    lastname (string)
  email (string)
```

---

## /users/logout Endpoint

**Description**
Logout the current user and blacklist the token.

**HTTP Method**
GET

**Authentication**
Requires valid JWT token.

### Example Response

```
user (object):
  fullname
  email
  password
token
```

---

# Captain APIs

## /captains/register Endpoint

**Description**
Registers a new captain with vehicle details.

**HTTP Method**
POST

### Request Body

* fullname (object)

  * firstname (string, required)
  * lastname (string)
* email (string, required)
* password (string, required)
* vehicle (object)

  * color (string, required)
  * plate (string, required)
  * capacity (number, required)
  * vehicleType (string, required: car/motorcycle/auto)

### Example Response

```
captain (object):
  fullname
  email
  password
  vehicle
    color
    plate
    capacity
    vehicleType
token
```

---

## /captains/login Endpoint

**Description**
Authenticates captain and returns token.

**HTTP Method:** POST

### Request Body

* email (string)
* password (string)

### Example Response

```
captain object with fullname, email, vehicle details
token
```

---

## /captains/profile Endpoint

**Description**
Returns authenticated captain profile.

**HTTP Method:** GET

**Auth:** Bearer Token

### Example Response

```
captain object + vehicle details
```

---

## /captains/logout Endpoint

**Description:** Logout captain.

**HTTP Method:** GET

### Example Response

```
message: "Logout successfully"
```

---

# Maps APIs

## /maps/get-coordinates

**Description:** Get latitude and longitude for address.

**Method:** GET

### Example Response

```
{
  "ltd": 37.4224764,
  "lng": -122.0842499
}
```

---

## /maps/get-distance-time

**Description:** Distance + Travel time.

**Method:** GET

### Example Response

```
{
  "distance": { "text": "2,789 miles", "value": 4486540 },
  "duration": { "text": "1 day 18 hours", "value": 154800 }
}
```

---

## /maps/get-suggestions

**Description:** Autocomplete suggestions.

**Method:** GET

### Example Response

```
[
  "1600 Amphitheatre Parkway, Mountain View, CA, USA",
  "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA"
]
```

---

# Ride APIs

## /rides/create

**Description:** Creates a new ride.

**Method:** POST
**Auth:** Bearer Token

### Request Body

* pickup (string)
* destination (string)
* vehicleType (auto/car/moto)

### Example Response

```
ride object including pickup, destination, distance, duration, otp, fare
```

---

## /rides/get-fare

**Description:** Returns fare estimate.

**Method:** GET

### Example Response

```
{
  "auto": 50.0,
  "car": 75.0,
  "moto": 40.0
}
```

---
