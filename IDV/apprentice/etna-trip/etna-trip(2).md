# [header] Etna-trip

# [module] Modalities

| Type | Description |
| - | - |
| Dépôt | $$RENDU$$ |
| Dossier | dossier/ |
| Correction | Exam |
| Duration | 4 week |
| Staff | Only |

# [goals] Objectifs

The Etna school partners with a travel agency and offers low-cost trips to its students! But the director asks you to create an efficient API to call the front end so he asks you!
Good luck!



Develop a RESTful API for a travel management platform using TypeScript, Express.js, PostgreSQL, and Sequelize. The platform will allow users to:

- User account management (registration, login, updates, and deletion). **You have two roles User or Admin.**
- Profile creation and management.
- Viewing and managing trips.
- Adding trips to a shopping cart and managing its contents.
In this project, Zod will be used to validate API request payloads to ensure data correctness before processing.



# [project] Consignes

## [exercice] Step 1: Setup the Project
- Node.js: https://nodejs.org/
- Express: https://expressjs.com/
- TypeScript: https://www.typescriptlang.org/docs/handbook/- - typescript-in-5-minutes.html
- Sequelize: https://sequelize.org/

## [exercice] Step 2: Define the Database Schema with ORM with Seequelize don't forget cardinality

## [exercice] Step 3: Create SQL script to insert on DB

## [exercice] Step 4: Add Zod for Request Validation
- Zod: https://zod.dev/

## [exercice] Step 5: Create Middleware for Validation
- You must use JWT token to login

## [exercice] Step 6: Create API Endpoints

**I want all to call the API for each table like this:**


POST /api/users
Body:

**Request :**
```
{
 "username": "john_doe",
 "password": "password123",
 "is admin": "false";
 "email": "john.doe@gmail.com"
}

```

**Response :**
```
{
 "user_id": 1,
 "username": "john_doe",
 "is admin": "false";
 "email": "john.doe@gmail.com",
 "create_date": "2024-01-01",
 "update_date": "2024-01-01"
}

```

Get User by ID

GET /api/users/:id

**Response :**

```
{
 "user_id": 1,
 "username": "john_doe",
 "email": "john.doe@gmail.com",
 "is admin": "false";
 "create_date": "2024-01-01",
 "update_date": "2024-01-01"
}

```

PUT /api/users/:id

**Request**

```
{
 "username": "john_updated",
 "is admin": "false";
 "email": "john.updated@gmail.com"
}

```
**Response**

```
{
 "user_id": 1,
 "username": "john_updated",
 "is admin": "false";	
 "email": "john.updated@gmail.com",
 "update_date": "2024-01-10"
}

```

DELETE /api/users/:id

**Response**
```
204 No Content
```





