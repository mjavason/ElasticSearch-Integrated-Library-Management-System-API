/**
 * @swagger
 * /book:
 *   post:
 *     summary: Create a new book
 *     description: Create a new book with the provided data
 *     tags:
 *       - Book
 *     requestBody:
 *       description: Book object to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookCreate'
 *     responses:
 *       '200':
 *         description: Successfully created a new book
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /book/{id}:
 *   patch:
 *     summary: Update a book
 *     description: Update an existing book with the provided data
 *     tags:
 *       - Book
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the book to update
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Book object to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookUpdate'
 *     responses:
 *       '200':
 *         description: Successfully updated the book
 *       '400':
 *         description: Bad request
 *   delete:
 *     summary: Delete a book
 *     description: Find and delete a book by its ID
 *     tags:
 *       - Book
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the book to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully deleted the book
 *       '404':
 *         description: Book not found
 */

/**
 * @swagger
 * /book/search:
 *   get:
 *     summary: Search for books
 *     description: Search for books based on query parameters
 *     tags:
 *       - Book
 *     parameters:
 *       - in: query
 *         name: query
 *         description: The query parameters for book search
 *         schema:
 *           $ref: '#/components/schemas/BookQuery'
 *     responses:
 *       '200':
 *         description: Successfully retrieved books based on search
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /book/count:
 *   get:
 *     summary: Get the count of books
 *     description: Get the total count of books based on query parameters
 *     tags:
 *       - Book
 *     parameters:
 *       - in: query
 *         name: query
 *         description: The query parameters for book count
 *         schema:
 *           $ref: '#/components/schemas/BookQuery'
 *     responses:
 *       '200':
 *         description: Successfully retrieved the book count
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /book/exists:
 *   get:
 *     summary: Check if books exist
 *     description: Check if books exist based on query parameters
 *     tags:
 *       - Book
 *     parameters:
 *       - in: query
 *         name: query
 *         description: The query parameters for checking book existence
 *         schema:
 *           $ref: '#/components/schemas/BookQuery'
 *     responses:
 *       '200':
 *         description: Successfully checked book existence
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /book/{pagination}:
 *   get:
 *     summary: Get books with pagination
 *     description: Get a list of books with pagination
 *     tags:
 *       - Book
 *     security:
 *       - bearerAuth: []  # Use the "bearerAuth" security definition
 *     parameters:
 *       - in: path
 *         name: pagination
 *         description: The pagination parameters (e.g., page number)
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved books with pagination
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     BookCreate:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         author:
 *           type: string
 *         genre:
 *           type: string
 *         publicationDate:
 *           type: string
 *           format: date
 *         ISBN:
 *           type: string
 *         availableCopies:
 *           type: integer
 *         totalCopies:
 *           type: integer
 *       required:
 *         - title
 *         - author
 *         - genre
 *         - publicationDate
 *         - ISBN
 *         - availableCopies
 *         - totalCopies
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     BookUpdate:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         author:
 *           type: string
 *         genre:
 *           type: string
 *         publicationDate:
 *           type: string
 *           format: date
 *         ISBN:
 *           type: string
 *         availableCopies:
 *           type: integer
 *         totalCopies:
 *           type: integer
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     BookQuery:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         author:
 *           type: string
 *         genre:
 *           type: string
 *         publicationDate:
 *           type: string
 *           format: date
 *         ISBN:
 *           type: string
 *         availableCopies:
 *           type: integer
 *         totalCopies:
 *           type: integer
 */
