# [header] Books

# [module] Modalities

| Type | Description |
| - | - |
| Deposit | $$RENDERED$$ |
| Folder | folder/ |
| Required file | books.csv |
| Correction | Exam |
| Days | 2 Days |
| Effective | Alone |

# [project] Instructions
You must realize all steps. Good luck !

## [exercice] Step 1
- Load data from an existing CSV file ```(book.csv)```.
-Check if the file exists before attempting to read it (if the file is missing or corrupted, display an appropriate error message).

## [exercice] Step 2
- Display a menu with the following options:

```
1. Display all authors 
2. Search an author by name 
3. Display works by genre 
4. Add a new author 
5. Calculate the average age of deceased authors 
6. Save and exit 
7. Exit without saving
```

- Add an option to exit the program without saving (7. Exit without saving).
- The menu should reappear after each action (except when the user chooses to exit).


## [exercice] Step 3 - 1
- Display a list of authors' names along with their id.
- Add pagination if the list contains more than 10 authors.

### [exercice] Step 3 - 2
- Allow the user to enter a full name or keyword
- Display all the information (works, genres, dates, etc.) for authors matching the keyword.
- Make the search case-insensitive.

### [exercice] Step 3 - 3
- Ask the user to enter a genre 
- Display a list of works matching that genre along with the associated author's name.
- if no results are found, display an appropriate message..


### [exercice] Step 3 - 4
- Prompt the user for the following details:
- id: Automatically generate a unique number (max(id) + 1).
- name: The author's name (required).
works: A list of works (accept comma-separated input and convert it into an array).
- genres: A list of genres (similar to works).
birthYear: The year of birth (validate it as a number).
- deathYear: The year of death (optional, validate that it is greater than birthYear)
- Add the new author to the main array.


### [exercice] Step 3 - 5

- Save the updated data to the file (books.csv), overwriting the old content.
- Display a confirmation message upon successful save.

### [exercice] Step 3 - 6
- Add an option that allows the user to quit the program without modifying the CSV file.
