# Ecommerce Project

This is a full-stack **Ecommerce Application** built with **Next.js** for the frontend and a **Node.js/Express** backend. The project is designed to provide a seamless shopping experience with features like product browsing, adding to cart, and managing inventory.

---

## Features

### Frontend
- Built with **Next.js** for server-side rendering and optimized performance.
- Styled with **Tailwind CSS** and **DaisyUI** for pre-designed, customizable components.
- Responsive design for mobile, tablet, and desktop devices.
- Product listing and detailed product pages.
- Add-to-cart functionality.
- **User Authentication**: Users can register, log in, and manage their profiles.


### Backend
- Built with **Node.js** and **Express**.
- RESTful API for managing products.
- MongoDB database for storing product and user data.
- Sequential product IDs for better readability.
- **Authentication and Authorization**:
  - Users must log in to perform actions like creating, updating, or deleting products.
  - Protected routes ensure only authenticated users can modify the database.


---

## Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (MongoDB Atlas)

---

### Installation

1. Clone the repository:

```bash
git clone git@github.com:odai-dh/ecommerce.git
cd ecommerce-project
```

2. Install dependencies for both the frontend and backend:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```
Environment Variables

### BackEnd
Create a .env file in the backend directory and add the following:

MONGO_URI= Connect with me so I can give you the URL
PORT=5001

### FrontEnd
For the frontend, create a .env file in the frontend directory and add:

** Connect with me so I can give you the URL

## Running the Application

1. Start the backend server:

```bash
cd backend
npm run dev
```
2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

3. Open your browser and navigate to:

Frontend: http://localhost:3000
Backend API: http://localhost:5001



### API Endpoints
### Products
 - GET /api/products - Fetch all products.
 - GET /api/products/:id - Fetch a single product by ID.
 - POST /api/products - Add a new product.
 - PUT /api/products/:id - Update a product by ID.
 - DELETE /api/products/:id - Delete a product by ID.

### Users
 - GET /api/auth/products - Fetch the product so it could be updated or deleted.
 - POST /api/auth/register - Register a new user.
 - POST /api/auth/login - Log in a user and receive a JWT token.
 - PUT /api/auth/profile - Update user profile (requires authentication).


### Technologies Used

### Frontend
- **Next.js** - React framework for server-side rendering and static site generation.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **DaisyUI** - Tailwind CSS-based component library for pre-styled UI components.

### Backend
- **Node.js** - JavaScript runtime for building the backend.
- **Express** - Web framework for building RESTful APIs.
- **MongoDB** - NoSQL database for storing product and user data.
- **Mongoose** - ODM for MongoDB.
- JWT (JSON Web Tokens) - For secure user authentication and authorization.



### User Authentication
- Users can register and log in to the application.
- A JWT token is issued upon successful login and is stored in the browser's localStorage.
- The token is used to authenticate requests to protected routes.

### Authorization
- Only authenticated users can perform the following actions:
    ・ Add a new product.
    ・ Update an existing product.
    ・ Delete a product.
- Unauthorized users attempting to access protected routes will receive a 401 Unauthorized response.

### Security
-  Passwords are hashed using bcrypt before being stored in the database.
- Protected routes are secured using a custom authenticate middleware that verifies the JWT token.

### Deployment

### Frontend

The frontend can be deployed on platforms like Vercel or Netlify.

### Backend

The backend can be deployed on platforms like Heroku, Render, or AWS.

### Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2 .Create a new branch:
```bash
git checkout -b feature-name
```

3. Commit your changes:
```bash
git commit -m "Add feature-name"
```
4. Push to your branch:
```bash
git push origin feature-name
```
5. Open a pull request.

License
This project is licensed under the MIT License.

Acknowledgments
❣ Next.js Documentation
❣ MongoDB Documentation
❣ Tailwind CSS Documentation
