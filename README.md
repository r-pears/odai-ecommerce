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

### Backend
- Built with **Node.js** and **Express**.
- RESTful API for managing products.
- MongoDB database for storing product and user data.
- Sequential product IDs for better readability.

---

## Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud-based, e.g., MongoDB Atlas)

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
Create a .env file in the backend directory and add the following:

MONGO_URI=your-mongodb-connection-string
PORT=5001

For the frontend, create a .env.local file in the frontend directory and add:

NEXT_PUBLIC_API_URL=http://localhost:5001

Running the Application

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

```bash
ecommerce/
├── backend/
│   ├── src/
│   │   ├── controllers/       # API controllers
│   │   ├── models/            # Mongoose models
│   │   ├── routes/            # API routes
│   │   ├── config/            # Database and environment config
│   │   └── server.js          # Entry point for the backend
│   ├── .env                   # Backend environment variables
│   └── package.json           # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── app/               # Next.js app directory
│   │   ├── components/        # Reusable components
│   │   ├── pages/             # Static and dynamic pages
│   │   └── styles/            # Global and component-specific styles
│   ├── .env.local             # Frontend environment variables
│   └── package.json           # Frontend dependencies
├── .gitignore                 # Ignored files and directories
└── README.md                  # Project documentation
```
### API Endpoints
 # Products
GET /api/products - Fetch all products.
GET /api/products/:id - Fetch a single product by ID.
POST /api/products - Add a new product.
PUT /api/products/:id - Update a product by ID.
DELETE /api/products/:id - Delete a product by ID.

###Technologies Used

### Frontend
- **Next.js** - React framework for server-side rendering and static site generation.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **DaisyUI** - Tailwind CSS-based component library for pre-styled UI components.

### Backend
- **Node.js** - JavaScript runtime for building the backend.
- **Express** - Web framework for building RESTful APIs.
- **MongoDB** - NoSQL database for storing product and user data.
- **Mongoose** - ODM for MongoDB.

### Deployment

# Frontend

The frontend can be deployed on platforms like Vercel or Netlify.

# Backend

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
