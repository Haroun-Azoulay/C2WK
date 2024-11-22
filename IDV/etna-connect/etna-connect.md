# [header] Etna-Connect

# [module] Modalities

| Type | Description |
| - | - |
| Dépôt | $$RENDU$$ |
| Correction | Exam |
| Duration | 1 Week |
| Staff | Only |


Develop a RESTful API for a travel management platform using TypeScript, Express.js, PSQL, and Sequelize. The platform will allow users to:


# [project] Instructions

## [exercice] Step 1: Setup the Project
- Node.js: https://nodejs.org/
- Express: https://expressjs.com/
- TypeScript: https://www.typescriptlang.org/docs/handbook/- - typescript-in-5-minutes.html
- Sequelize: https://sequelize.org/

## [exercice] Step 2: Define the Database Schema with ORM with Seequelize 
## [forbidden] Don't forget cardinality

## [exercice] Step 3: Create SQL script to insert data on DB 

## [exercice] Step 4: Add Zod for Request Validation
- Zod: https://zod.dev/

Zod is a TypeScript-first schema declaration and validation library. I'm using the term "schema" to broadly refer to any data type, from a simple string to a complex nested object. Zod is designed to be as developer-friendly as possible. The goal is to eliminate duplicative type declarations.

## [exercice] Step 5: Create API Endpoints

**Create a Post for exemple**

POST /api/posts

**Request Body:**
```
{
 "user_id": 1,
 "content": "Excited to share this amazing update with everyone!",
 "image_url": "https://example.com/image.jpg"
}



```

**Response**
```
{
 "post_id": 101,
 "user_id": 1,
 "content": "Excited to share this amazing update with everyone!",
 "image_url": "https://example.com/image.jpg",
 "created_at": "2024-11-21",
 "updated_at": "2024-11-21"
}


```


GET /api/posts

**Response :**
```
[
 {
   "post_id": 101,
   "user_id": 1,
   "content": "Excited to share this amazing update with everyone!",
   "image_url": "https://example.com/image.jpg",
   "created_at": "2024-11-21",
   "updated_at": "2024-11-21"
 },
 {
   "post_id": 102,
   "user_id": 2,
   "content": "Had a fantastic time at the beach today!",
   "image_url": "https://example.com/beach.jpg",
   "created_at": "2024-11-20",
   "updated_at": "2024-11-20"
 }
]


```

GET /api/posts/:id



**Response :**
```
{
 "post_id": 101,
 "user_id": 1,
 "content": "Excited to share this amazing update with everyone!",
 "image_url": "https://example.com/image.jpg",
 "created_at": "2024-11-21",
 "updated_at": "2024-11-21"
}



```

PUT /api/posts/:id


**Request Body:**

```
 
{
 "content": "Updated content for my post!",
 "image_url": "https://example.com/updated-image.jpg"
}


```
**Response**

```
{
 "post_id": 101,
 "user_id": 1,
 "content": "Updated content for my post!",
 "image_url": "https://example.com/updated-image.jpg",
 "created_at": "2024-11-21",
 "updated_at": "2024-11-22"
}



```

DELETE /api/posts/:id

**Response**
```
204 No Content
```

## [exercice] Step 6:Create JWT & add Middleware for Validation

## [exercice] Step 7: The Admin mode

Now the admin wants to delete any information on the website, for example, imagine you want delete any informations ? so you must use middleware !


example :

POST /api/posts/ad (Admin Only)

Authorization Header: When accessing protected routes, the client must include the token _in the header:
```
Authorization: Bearer <token>


```

**Request body:**
```
{
 "content": "We are excited to announce a new feature launching next week!",
 "image_url": "https://example.com/announcement.jpg"
}


```


**Response**

```
{
 "post_id": 101,
 "admin_id": 1,
 "content": "We are excited to announce a new feature launching next week!",
 "image_url": "https://example.com/announcement.jpg",
 "created_at": "2024-11-21",
 "updated_at": "2024-11-21"
}


```

Let's go!










