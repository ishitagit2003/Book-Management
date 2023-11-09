# Book Management API

## Overview

Welcome to the Book Management System repository! This project is designed to help users manage their book collection efficiently. Whether you're a book enthusiast or running a small library, this system provides features for organizing, categorizing, and keeping track of your books.
It allows users to perform CRUD operations on a collection of books.

## Features

- **Add Books:** Easily add new books to the system, including details like title, author, genre, and publication date.

- **Search Functionality:** Quickly find books using the search functionality. Search by title, author, or any other relevant criteria.

- **Update and Delete:** Modify book details or remove entries when needed.

- **User-friendly Interface:** The system is designed with a simple and intuitive user interface to ensure a smooth experience.


  
## API Endpoints and Usage

### 1. Add a new book
- **Endpoint:** `/books`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "title": "Your Book Title",
    "author": "Author Name",
    "summary": "Brief summary of the book."
  }


### 2. View a list of all books
- **Endpoint:** `/books`
- **Method:** `GET`


### 3. View details of a specific book by its ID
- **Endpoint:** `/api/books/{bookId}`
- **Method:** `GET`

  
### 4. Update a book's details
- **Endpoint:** `/api/books/{bookId}`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
  "title": "Updated Title",
  "author": "Updated Author",
  "summary": "Updated summary of the book."
  }


### 5. Delete a book
- **Endpoint:** `/api/books/{bookId}`
- **Method:** `DELETE`


## Setting Up and Running the Application Locally

 Follow these steps to set up and run the Book Management Application locally on your machine.

 ### Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)


  
1. **Clone the Repository:**
   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/ishitagit2003/Book-Management.git
   

2. **Navigate to the Project Directory:**
    ```bash
    cd Book-Management

3. **Install Dependencies:**
     ```bash
     npm install

4. **Run the Application:**
     ```bash
     npm index.html 
The application should now be running at http://localhost:3001.
     
5. **Start Managing Your Books:**
- Add, search, update, and delete books as needed.



## Development Decisions and Assumptions

During the development of the CRUD operations API, the following decisions and assumptions were made:
* The API is built using Node.js and Express for the backend.
* The API follows RESTful conventions for CRUD operations.
* Each book has attributes such as title, author, and summary.
* Data is stored in a database (e.g., MongoDB) and is accessed via an ORM (e.g., Mongoose).
* Requests and responses are in JSON format.
* Authentication and authorization mechanisms are not included in this version for simplicity.
* Error handling is implemented for various scenarios, providing meaningful error messages.

## Contributing

If you'd like to contribute to the project, feel free to open an issue, submit a pull request, or provide feedback. Your input is highly valued!
Happy reading!
