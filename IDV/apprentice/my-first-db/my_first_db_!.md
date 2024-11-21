# [header] My first DB !

# [module] Modalities


| Type | Description |
| - | - |
| Dépôt | $$Rendu$$ |
| Correction | Exam |
| Duration | Two day |
| Effective | Alone |




# [project] instructions



## [exercice] Step 1

**The cinema is called Etna-movie and it is open near you and wants to manage its film, its rooms and its stages.**

You must create UML. You want to see step 2 to look informations 

## [info] Documentation
[Uml Documentation](https://sparxsystems.com/resources/tutorials/uml/datamodel.html)


## [exercice] Step 2

The company provides this information: 

**Films :**

| column name  | desc |
|--------|--------|
| id | Unique identifier for the film |
| title    | Title of the film |
| genre | Genre of the film (e.g., Action, Drama) |
| duration | Duration of the film (HH:MM:SS) |
| director | Name of the director |
| release date | Release date of the film |

**Rooms :**

| column name | desc |
|--------|--------|
| id | Unique identifier for the room |
| number | Room number |
| capacity | Maximum capacity of the room |
| type | Type of the room (normal, IMAX, 3D) |

**Screenings :**

| column name | desc |
|--------|--------|
| id | Unique identifier for the screening |
| film_id | Reference to the film (Films) |
| room_id | Reference to the room (Rooms) |
| times | Time of the screening |
| date | Date of the screening |
| price | Ticket price |

**Reservations :**


| column name | desc |
|--------|--------|
| id | Unique identifier for the reservation |
| client | Name of the client |
| session | Reference to the screening (Screenings) |
| number of places | Number of reserved seats |
| price paid | Total price paid |

With the information provided, create an SQL script to generate the different tables with the specified fields.

**Relationships:**

- Films and Screenings: A film can have multiple screenings (1:N relationship).
- Rooms and Screenings: A room can be used for multiple screenings (1:N relationship).
- Screenings and Reservations: A screening can have multiple reservations (1:N relationship).

**Primary and Foreign Keys:**

- **_film_id_** is a foreign key in Screenings referenced from Films.
- **_room_id_** is a foreign key in Screenings referenced from Rooms.
- **_screening_id_** is a foreign key in Reservations referenced from Screenings.



## [info] Documentation

[SQL documentation](https://www.w3schools.com/sql/)



