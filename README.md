
# 🛒 ShopEase

A simple full-stack E-commerce application built using **React (Frontend)** and **Node.js + Express (Backend)**. It allows users to browse products, add them to a cart, and place orders.

## 📁 Project Structure
```
Task/
├── backend/
│   ├── controllers/
│   ├── data/
│   ├── routes/
│   └── server.js
└── frontend/
    ├── public/
    └── src/
```

---

## 🚀 Backend (Node.js + Express)

### 🔌 Server
- Runs on: `http://localhost:5000`
- Located at: `backend/server.js`

### 📦 Routes

#### 1. **GET /api/products**
- **Purpose:** Fetch all available products.
- **Returns:** Array of product objects `{ id, name, image, description, price }`
- **Example Response:**
```json
[
  {
    "id": 1,
    "name": "Product A",
    "image": "...",
    "description": "Description for product A",
    "price": 99
  },
  ...
]
```

#### 2. **POST /api/orders**
- **Purpose:** Submit an order.
- **Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "address": "123 Main St",
  "cart": [
    { "id": 1, "name": "Product A", "price": 99 },
    ...
  ]
}
```
- **Validations:**
  - All fields required
  - Cart must not be empty
- **Response:**
```json
{ "message": "Order placed successfully!" }
```

---

## 🎨 Frontend (React + Tailwind CSS)

### 📦 Pages

#### 1. **Home Page (`/`)**
- Displays a list of products fetched from the backend.
- Each product shows: image, name, description, price, and "Add to Cart" button.

#### 2. **Cart Page (`/cart`)**
- Shows all items in the cart with total price.
- User can enter:
  - First Name
  - Last Name
  - Address
- Clicking **Place Order** sends the data to backend via `POST /api/orders`.

### 📦 Components

- **ProductCard:** Displays individual product details and handles add to cart.
- **Header:** Navigation bar with links to Products and Cart.

### 🧠 Hooks

- **useCart.js:** Custom hook for managing cart state across components.

---

## 💻 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Udai637643/ShopEase.git
cd Task
```

### 2. Install backend dependencies
```bash
cd backend
npm install
```

### 3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

### 4. Run the apps

#### Start Backend
```bash
cd ../backend
node server.js
```

#### Start Frontend
```bash
cd ../frontend
npm start
```

---

## 📄 .gitignore (Sample)

```gitignore
# Ignore node_modules
frontend/node_modules/
backend/node_modules/

# Ignore env and build
.env
frontend/build/
backend/dist/
```

---

## ✅ Features

- Product listing
- Add to cart
- Simple checkout form
- Order placement with backend validation
- Tailwind CSS responsive UI

---
## ScreenShots
![Product List](https://github.com/user-attachments/assets/76ee0b78-30ff-4326-a92e-2036fac4a7a8)
![Carts](https://github.com/user-attachments/assets/5161b87a-9fdb-4221-a3ec-9a783f48cbbe)





## 👨‍💻 Author

Udai Lal Regar  
[LinkedIn](https://linkedin.com/in/udai-lal-regar-144806240) | [GitHub](https://github.com/udai637643)
