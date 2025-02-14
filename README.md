# Real Estate Web Application

## 📌 Project Overview
This is a **Real Estate Web Application** built using **React (Frontend)** and **PHP (Backend with MySQL Database)**. The application allows users to search, post, and manage real estate listings with features like authentication, maps, and property details.


## 🚀 Features
- **User Authentication**
  - Signup & Login (PHP & MySQL)
  - Secure password storage
    
- **Property Listings**
  - Users can post properties for rent/sale
  - View detailed property information
  - Search and filter properties based on location and price

- **Interactive Maps**
  - Uses **Leaflet.js** to display properties on a map
  - Users can explore nearby listings visually

- **Profile Management**
  - Users can update their details
  - Manage posted properties


## 🏗 Tech Stack

### **Frontend (React)**
- React.js (UI Framework)
- React Router (Navigation)
- Leaflet.js (Maps Integration)
- CSS Modules (Styling)

### **Backend (PHP & MySQL)**
- PHP (Server-side scripting)
- MySQL (Database)
- PHPMyAdmin (Database Management)

### **Other Dependencies**
- Node.js & npm (Package Management)


## Installation & Setup

### **1 Clone the Repository**
```sh
 git clone https://github.com/karthikeyan1134/Real-Estate.git
 cd real-estate
```

### **2 Backend Setup (PHP & MySQL)**
- Install **XAMPP** or **WAMP**
- Start **Apache & MySQL**
- Import `database.sql` into MySQL

### **3 Frontend Setup (React)**
```sh
 cd frontend
 npm install
 npm start
```
> Runs the frontend on `http://localhost:3000`

### **4 Run Backend**
- Place `backend/` files in `htdocs` (for XAMPP) or `www/` (for WAMP)
- Access via `http://localhost/backend/login.php`


## API Endpoints (Backend)
| Endpoint         | Method | Description          |
|-----------------|--------|----------------------|
| `/login.php`    | POST   | User Login          |
| `/signup.php`   | POST   | User Registration   |
| `/post.php`     | POST   | Create Property     |
| `/database.php` | GET    | Database Connection |


## Future Improvements
- **Chat system** for buyers & sellers
- **Payment gateway** for rental deposits
- **Advanced filters** for property search
- **Mobile-friendly UI improvements**

---
<!-- 
## \ud83e\udd1d Contributing
1. Fork the project
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Open a **Pull Request**
-->
