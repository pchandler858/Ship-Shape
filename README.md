# Ship-Shape E-commerce Backend

This is the backend for an e-commerce application. It provides API endpoints for managing products, categories, and tags.

## Technologies

This application was built with the following technologies:

- Node.js
- Express.js
- MySQL
- Sequelize ORM

## Installation

1.  Clone the repository.
2.  Install the dependencies with `npm install`.
3.  Create a `.env` file with your MySQL credentials.
4.  Create the database in MySQL with `source db/schema.sql`.
5.  Seed the database with `npm run seeds`.

## Usage

Start the server with `npm start` and use a tool such as Postman or Insomnia to make requests to the API endpoints.

### API Endpoints

The following API endpoints are available:

- `GET /api/products`: get all products.
- `GET /api/products/:id`: get a single product by its `id`.
- `POST /api/products`: create a new product.
- `PUT /api/products/:id`: update a product.
- `DELETE /api/products/:id`: delete a product.
- `GET /api/categories`: get all categories.
- `GET /api/categories/:id`: get a single category by its `id`.
- `POST /api/categories`: create a new category.
- `PUT /api/categories/:id`: update a category.
- `DELETE /api/categories/:id`: delete a category.
- `GET /api/tags`: get all tags.
- `GET /api/tags/:id`: get a single tag by its `id`.
- `POST /api/tags`: create a new tag.
- `PUT /api/tags/:id`: update a tag.
- `DELETE /api/tags/:id`: delete a tag.

## Video Demo

[Watch the demo video](https://www.youtube.com/watch?v=FCSCvvjBCzE)

## Contributing

Contributions are welcome! If you have any suggestions or find any bugs, please open an issue.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
