# Table of Contents
1. [Project Overview](#ecommerce-project)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [API Endpoints](#api-endpoints)
5. [Technologies Used](#technologies-used)
6. [Accessibility and SEO Documentation](#accessibility-and-seo-documentation)
7. [Tracking Implementation Documentation](#tracking-implementation-documentation)
8. [Security Threats and Mitigation Documentation](#security-threats-and-mitigation-documentation)
9. [Contributing](#contributing)




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


# Accessibility and SEO Documentation

To make the app accessible, I used semantic HTML elements like < header >, < main >, and < section > ecs.. for better screen reader support. All images have descriptive alt text, and buttons/links are keyboard-friendly with visible focus styles. ARIA roles were added where necessary to improve accessibility for assistive technologies. Additionally, color contrast ratios were tested to meet WCAG standards, ensuring readability for users with visual impairments.

For SEO, I added unique titles, descriptions, and Open Graph tags using Next.js’s Metadata API. I also included a sitemap and robots.txt to help search engines crawl the site. Lazy loading improves performance and user experience. Accessibility and SEO were validated using tools like Lighthouse and Axe to ensure compliance with best practices.

# Tracking Implementation Documentation

Google Analytics is set up to track user interactions and improve the site based on real usage data. IPs are anonymized, and I follow GDPR rules—users can opt out anytime via the Privacy Policy.
Next step whould be an cookie banner were it can display to inform users about tracking and provide them with the option to manage their preferences. 

Additionally, Google Tag Manager is used to manage tracking scripts efficiently, ensuring minimal impact on page performance. This setup allows me to gather insights while respecting user privacy and complying with data protection regulations.

# Security Threats and Mitigation Documentation

Passwords are securely hashed using `bcrypt` before being stored in the database, ensuring user credentials are protected even in the event of a data breach.

JWT tokens are used for authentication, and they are stored localStorage which is risky beacuse of:
XSS Vulnerability: If an attacker injects malicious JavaScript into the application, they can access the JWT stored in localStorage and use it to impersonate users.
No Automatic Protection: Unlike cookies, localStorage does not have built-in security features like HttpOnly or Secure flags.

To enhance the security of the application, several measures have been implemented. Sensitive routes like login and registration are protected using rate limiting with `express-rate-limit` to prevent brute force attacks.

What I can do in the futur is using libraries like `Joi` and `express-validator` to ensure only valid data is processed. Additionally also in the futur , `express-mongo-sanitize` could be used to prevent NoSQL injection attacks by removing malicious payloads from incoming requests.
