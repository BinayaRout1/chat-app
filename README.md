# Chat App

A real-time chat application that allows users to communicate instantly with friends or groups. Built with **React**, **Node.js**, **Express**, **MongoDB**, and **Socket.io**.

---

## Table of Contents

1. [Features](#features)  
2. [Demo](#demo)  
3. [Technology Stack](#technology-stack)  
4. [Project Structure](#project-structure)  
5. [Installation](#installation)  
6. [Usage](#usage)

---

## Features

- **User Authentication**: Sign up, login, and secure password storage using JWT.  
- **Real-time Messaging**: Send and receive messages instantly using Socket.io.  
- **Private Chat**: One-on-one messaging with other users.   
- **Message History**: Messages are stored in MongoDB and persist on reload.  
- **Online Status**: Shows which users are online.  
- **Responsive Design**: Works on mobile, tablet, and desktop.  

---

## Demo

[Live Demo](https://your-demo-link.com)

---

## Technology Stack

| Layer        | Technology/Tool         |
|-------------|------------------------|
| Frontend    | React, Tailwind CSS, Context API |
| Backend     | Node.js, Express       |
| Database    | MongoDB, Mongoose      |
| Real-time   | Socket.io              |
| Authentication | JWT (JSON Web Tokens) |

---
## Project Structure

chat-app/
│
├─ backend/
│ ├─ controllers/
│ ├─ models/
│ ├─ routes/
│ ├─ middleware/
│ ├─ lib/
│ ├─ server.js
│ └─ .env
│
├─ frontend/
│ ├─ public/
│ ├─ src/
│ │ ├─ assets/
│ │ ├─ pages/
│ │ ├─ lib/
│ │ ├─ context/
│ │ ├─ App.css
│ │ ├─ index.css
│ │ ├─ main.jsx
│ │ └─ App.jsx
│ └─ package.json
│
├─.env
├─ README.md
└─ package.json


## Installation

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```
Setup Backend
```
cd backend
npm install

```
Create a .env file and add:
```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
PORT=5000
```
Setup Frontend
```
cd ../frontend
npm install
```
Usage
Run Backend
```
cd backend
npm run dev
```

Run Frontend
```
cd frontend
npm start
```

Open http://localhost:3000 in your browser.


