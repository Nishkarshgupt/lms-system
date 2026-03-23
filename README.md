# Learning Management System (LMS)

A **Learning Management System (LMS)** web application built using **Node.js, Express.js, MongoDB, and EJS**.

This system provides **role-based authentication** where **Students and Teachers** can log in and access different dashboards and features.

The frontend is rendered using **EJS View Engine**, while **Node.js and Express** handle backend logic and routing.

---

# 📂 GitHub Repository

Project Source Code:

https://github.com/Nishkarshgupt/lms-system.git

Clone the repository using:

```
git clone https://github.com/Nishkarshgupt/lms-system.git
```

---

# 🚀 Features

* Student Login
* Teacher Login
* Role-based authentication
* Secure login system
* Server-side rendering using EJS
* MongoDB database integration
* Organized project folder structure

---

# 🛠 Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* EJS (View Engine)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

---

# 📁 Project Structure

```
lms-system
│
├── config
│   └── db.js
│
├── models
│   └── user.model.js
│
├── routes
│   └── application routes
│
├── views
│   ├── student
│   │   └── student dashboard and pages
│   │
│   ├── teacher
│   │   └── teacher dashboard and pages
│   │
│   └── auth
│       └── login / register pages
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env.example
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root folder.

Example:

```
MONGO_URI=
SESSION_SECRET=
PORT=3000
```

⚠️ `.env` file is ignored in `.gitignore` for security reasons.

---

# 📦 Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/Nishkarshgupt/lms-system.git
```

---

### 2️⃣ Move to project folder

```
cd lms-system
```

---

### 3️⃣ Install dependencies

```
npm install
```

---

# ▶️ Run the Project

Start the server:

```
node app.js
```

or

```
npm start
```

---

# 🌐 Open in Browser

```
http://localhost:3000
```

---

# 🔐 Authentication

This project implements **role-based authentication**.

Two types of users:

### Student

Students can:

* Login to the system
* Access student dashboard
* View learning content

### Teacher

Teachers can:

* Login to the system
* Access teacher dashboard
* Manage learning content

---

# 🗄 Database

The application uses **MongoDB** to store user data.

Database connection is handled in:

```
config/db.js
```

User schema is defined in:

```
models/user.model.js
```

---

# 🎨 Views

All frontend pages are rendered using **EJS View Engine**.

Views are located inside:

```
views/
 ├── student/
 ├── teacher/
 └── auth/
```

---

# 📈 Future Improvements

* Course management system
* Assignment submission
* Quiz system
* Admin dashboard
* File uploads
* Notifications

---

# 👨‍💻 Author

**Nishkarsh Gupta**

MCA Student | Web Developer

Skills:

* JavaScript
* Node.js
* Express.js
* MongoDB
* HTML / CSS
* EJS

---

# ⭐ Support

If you like this project, please give it a **Star ⭐ on GitHub**.
