# [header] Etna-trip

# [module] Modalities

| Type | Description |
| - | - |
| Dépôt | $$RENDU$$ |
| Correction | Exam |
| Duration | 1 Week |
| Staff | Only |

# [goals] Goals

The Etna school partners with a travel agency and offers low-cost trips to its students! But the director asks you to create an efficient API to call the front end so he asks you!
Good luck!



Develop a RESTful API for a travel management platform using TypeScript, Express.js, MySQL, and Sequelize. The platform will allow users to:

- User account management (registration, login, updates, and deletion). **You have two roles User or Admin.**
- Profile creation and management.
- Viewing and managing trips.
- Adding trips to a shopping cart and managing its contents.
In this project, Zod will be used to validate API request payloads to ensure data correctness before processing.



# [project] Instructions

## [exercice] Step 1: Setup the Project
- Node.js: https://nodejs.org/
- Express: https://expressjs.com/
- TypeScript: https://www.typescriptlang.org/docs/handbook/- - typescript-in-5-minutes.html
- Sequelize: https://sequelize.org/

## [exercice] Step 2: Define the Database Schema with ORM with Seequelize 
[Database Schema](https://drawsql.app/teams/haroun/diagrams/etna-trip)
## [forbidden] Don't forget cardinality

## [exercice] Step 3: Create SQL script to insert data on DB 
After that, i can write this command on your terminal i can see this for example : 



```
$ SELECT * FROM trip WHERE id = 1;

{
 "trip_id": 1,
 "destination": "Paris",
 "description": "A wonderful 5-day trip to explore the historical sites and cuisine of Paris.",
 "price": 1200.50,
 "availability": true,
 "start_date": "2024-12-15",
 "end_date": "2024-12-20",
 "create_date": "2024-11-01",
 "update_date": "2024-11-15"
}


```

## [exercice] Step 4: Add Zod for Request Validation
- Zod: https://zod.dev/

Zod is a TypeScript-first schema declaration and validation library. I'm using the term "schema" to broadly refer to any data type, from a simple string to a complex nested object. Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations.

## [exercice] Step 5: Create API Endpoints

**I want all to call the API for trips table like this:** 


POST /api/trips

**Request Body:**
```
{
 "destination": "Paris",
 "description": "A wonderful 5-day trip to explore the historical sites and cuisine of Paris.",
 "price": 1200.50,
 "availability": true,
 "start_date": "2024-12-15",
 "end_date": "2024-12-20"
}


```

**Response**
```
{
 "trip_id": 1,
 "destination": "Paris",
 "description": "A wonderful 5-day trip to explore the historical sites and cuisine of Paris.",
 "price": 1200.50,
 "availability": true,
 "start_date": "2024-12-15",
 "end_date": "2024-12-20",
 "create_date": "2024-11-21",
 "update_date": "2024-11-21"
}


```


GET /api/trips

**Response :**
```
[
 {
   "trip_id": 1,
   "destination": "Paris",
   "description": "A wonderful 5-day trip to explore the historical sites and cuisine of Paris.",
   "price": 1200.50,
   "availability": true,
   "start_date": "2024-12-15",
   "end_date": "2024-12-20",
   "create_date": "2024-11-21",
   "update_date": "2024-11-21"
 },
 {
   "trip_id": 2,
   "destination": "Tokyo",
   "description": "A cultural journey into the heart of Japan.",
   "price": 3000.00,
   "availability": true,
   "start_date": "2025-01-10",
   "end_date": "2025-01-20",
   "create_date": "2024-11-21",
   "update_date": "2024-11-21"
 }
]

```


GET /api/trips/:id



**Response :**
```
 {
   "trip_id": 1,
   "destination": "Paris",
   "description": "A wonderful 5-day trip to explore the historical sites and cuisine of Paris.",
   "price": 1200.50,
   "availability": true,
   "start_date": "2024-12-15",
   "end_date": "2024-12-20",
   "create_date": "2024-11-21",
   "update_date": "2024-11-21"
 }


```

PUT /api/trips/:id


**Request Body:**

```
 
{
 "destination": "Paris Updated",
 "description": "An updated description for this trip.",
 "price": 1300.00,
 "availability": false,
 "start_date": "2024-12-15",
 "end_date": "2024-12-20"
}


```
**Response**

```
{
 "trip_id": 1,
 "destination": "Paris Updated",
 "description": "An updated description for this trip.",
 "price": 1300.00,
 "availability": false,
 "start_date": "2024-12-15",
 "end_date": "2024-12-20",
 "create_date": "2024-11-21",
 "update_date": "2024-11-22"
}


```

DELETE /api/trips/:id

**Response**
```
204 No Content
```

## [exercice] Step 6:Create JWT & add Middleware for Validation

- You need to create a JWT token to register and temporarily save JWT to your browser's local storage.


I want see this => Example you create User :


POST /api/users/signup

**Request body:**
```
{
 "username": "john_doe",
 "password": "password123",
 "is_admin": false,
 "email": "john.doe@gmail.com",
}
```
**Response (success):**
```
{
 "user_id": 1,
 "username": "john_doe",
 "is_admin": false,
 "email": "john.doe@gmail.com",
 "create_date": "2024-01-01",
 "update_date": "2024-01-01"
"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2Vybm
FtZSI6ImpvaG5fZG9lIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE2ODAwMDAwMDB9.abcdef1234567890";
}
```

**And you connect :** 

POST /api/users/signin

Authorization Header: When accessing protected routes, the client must include the token _in the header:
```
Authorization: Bearer <token>


```

**Request body:**
```
{
 "username": "john_doe",
 "password": "password123"
}

```

**Response**

```
{
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImpvaG5fZG9
lIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE2ODAwMDAwMDB9.abcdef1234567890",
 "user_id": 1,
 "username": "john_doe",
 "is_admin": false
}


```
You create the rest of the tables and after using the Middleware, continue (JWT is your best friend)

Examples:

User with user_id = 1 can only access profil_id = 1.
To create an entry in Cards_trips (selling/reserving a trip), the token must be valid, confirming the user's identity.



## [exercice] Step 7: The Admin mode

Now the admin wants to create trips to sell, for example, so you also want to use middleware, you know? 

Before Whats is the admin role ? 

The admin role is essential for managing the trip platform efficiently. Admins have exclusive privileges that regular users don’t, such as creating, updating, and deleting trips. Middleware will be implemented to ensure these actions are restricted to admin users only.


example :

POST /api/trips/ad (Admin Only)

Authorization Header: When accessing protected routes, the client must include the token _in the header:
```
Authorization: Bearer <token>


```

**Request body:**
```
{
 "destination": "Rome",
 "description": "Explore the ancient wonders of Rome in this 7-day trip.",
 "price": 1800.00,
 "availability": true,
 "start_date": "2025-02-01",
 "end_date": "2025-02-07"
}

```


**Response**

```
{
 "trip_id": 3,
 "destination": "Rome",
 "description": "Explore the ancient wonders of Rome in this 7-day trip.",
 "price": 1800.00,
 "availability": true,
 "start_date": "2025-02-01",
 "end_date": "2025-02-07",
 "create_date": "2024-11-21",
 "update_date": "2024-11-21"
}



```

Let's go!





