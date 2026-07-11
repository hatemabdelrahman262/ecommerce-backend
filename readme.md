# Shopping Website

An e-commerce web application that allows users to browse products, search for items, manage their cart, and place orders through a simple and responsive interface.

## Features

* Product browsing and searching
* Product categories and filtering
* Order creation and management
* Admin product management
* Responsive user interface
* REST API backend

## Technologies Used

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Frontend

* HTML
* CSS
* JavaScript

### Additional Tools

* dotenv
* Git and GitHub
* path
* mongo-sanitize
* express

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

## API Endpoints

### Products

* `GET /admin/products`/search - Get all products
* `GET /admin/products/:id` - Get a product by ID
* GET /products/find-GET CERTAIN OBJECT
*  `POST /`admin`/products` - Create a product
* `PUT `/products/edit/`:id` - Update a product
* `DELETE /`admin`/products/delete/:id` - Delete a product
* `if something goes wrong check the corect route in admin routers`

### Search

* `GET /admin/products/searchByName?product=laptop` - Search for products by name

### Users

##

## Future Improvements

* Payment integration
* Product reviews and ratings
* Wishlist support
* Image uploads
* Order history
* Email notifications
* Admin dashboard
* Inventory management

## Author

Created by Abdelrahman Hatem.
totally NOT Ai README

