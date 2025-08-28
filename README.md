# 📈 Stock Analysis App

A modern Stock Analysis Web Application that allows users to search stock quotes, view historical price trends, and analyze real-time data using the Yahoo Finance API.
This project is built using React, Redux, Vite, Node.js, and Express, offering a clean, responsive, and user-friendly dashboard for stock market enthusiasts and traders.

---

## ✨ **Key Features**

✅ **Stock Search** → Search any stock by its symbol (e.g., AAPL, TSLA, MSFT)  
✅ **Real-time Data** → Fetch live stock prices from **Yahoo Finance API**  
✅ **Interactive Charts** → Visualize historical stock prices with **Recharts**  
✅ **Date-wise Filtering** → Filter data by specific date ranges  
✅ **Dark & Light Mode** → Sleek **theme toggle** for better UX  
✅ **Responsive Dashboard** → Optimized for **desktop, tablet, and mobile**  
✅ **Optimized API Handling** → Backend caching with **Axios + Express**  
✅ **State Management** → Powered by **Redux Toolkit**  
✅ **Secure & Scalable** → Well-structured backend using **Node.js + Express**

---

## 🛠 **Tech Stack**

### **Frontend** 🖥️

- ⚛️ React.js (Vite)
- 📊 Recharts (Stock Visualization)
- 🌗 Light/Dark Mode with Context API
- ⚡ Redux Toolkit (State Management)
- 🔗 Axios for API Calls

### **Backend** 🔧

- 🟢 Node.js
- 🚀 Express.js
- 🔗 Yahoo Finance API Integration
- 📦 CORS + Dotenv
- 🔄 Axios for API Handling

---

## 🚀 **Deployment**

🔗 **Frontend**: [Stock Analysis App](https://stock-analysis-app-nine.vercel.app/)  
🔗 **Backend**: [Stock Analysis Server](https://stock-analysis-server.vercel.app/)

🎥 **Demo Video**: [Watch Here](https://drive.google.com/file/d/1B4H8-4v-S3pZ7V2VwoaawrRmYTpscDGu/view?usp=sharing)

---

## 📂 **Project Folder Structure**

### Root Directory

```
stock-analysis-app/
├── client/            # React + Vite frontend
├── server/            # Node + Express backend
└── README.md
```

### Client (Frontend) Folder Structure

```
client/
├── public/
│   └── index.html
│
├── src/
│   ├── assets/                 # Images & icons
│   ├── components/             # Reusable UI components
│   │   ├── Chart
│   │   |   └── StockChart.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── StockCard.jsx
│   │   ├── StockDetails.jsx
│   │   └── StockList.jsx
│   │
│   ├── context/                # Theme Context API
│   │   ├── ThemeContext.js
│   │   └── ThemeProvider.jsx
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── useTheme.js
│   │
│   ├── redux/                  # Redux state management
│   │   ├── slices/
│   │   │   └── stockSlice.js
│   │   └── store.js
│   │
│   ├── styles/                 # Global & Component-specific styles
│   │   ├── Dashboard.css
│   │   ├── Loader.css
│   │   ├── Navbar.css
│   │   ├── SearchBar.css
│   │   ├── SearchCard.css
│   │   ├── SearchDetails.css
│   │   └── StockList.css
│   │
│   ├── pages/                  # Application pages
│   │   └── Dashboard.jsx
│   │
│   ├── App.jsx                 # Root App component
│   ├── App.css
│   ├── main.jsx                # Entry point
│   ├── index.css
│   └── vite.config.js
│
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js

```

### Server (Backend) Folder Structure

```
server/
├── src/
│   ├── routes/
│   │   └── stockRoutes.js      # Routes for fetching stock data
│   ├── controllers/
│   │   └── stockController.js
│   └── app.js                  # Server entry point
│
├── .env                        # Environment variables
├── package-.json
└── package.json

```

---

## 📦 Installation & Setup

### **1️⃣ Clone the repository**

```sh
git clone https://github.com/souravpl8092/Stock-Analysis-App.git
cd Stock-Analysis-App
```

### **2️⃣ Install dependencies**

#### **Frontend**

```sh
cd client
npm install
```

#### **Backend**

```sh
cd server
npm install
```

---

## ⚙️ Configuration

### **1️⃣ Backend Environment Variables**

Create a `.env` file in the `server/` directory and configure the following:

```env
PORT=8080

```

### **2️⃣ Frontend Environment Variables**

Create a `.env` file in the `client/` directory and configure the following:

```env
VITE_BASE_URL=http://localhost:8080/api/stocks
```

---

## 🚀 Running the Project

### **1️⃣ Start Backend**

```sh
cd server
npm run dev
```

### **2️⃣ Start Frontend**

```sh
cd client
npm run dev
```

The frontend will be accessible at `http://localhost:5173`

---

## 📸 UI Preview

| **Preview**                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Product List](https://i.ibb.co/gbVpgpfV/Screenshot-2025-08-29-031336.png) |

---

## 👨‍💻 Author

**Sourav Paul**

- 💼 [LinkedIn](https://www.linkedin.com/in/sourav-paul-276ba323a/)
- 🐙 [GitHub](https://github.com/souravpl8092)

---

## 📌 License

This project is **open-source** and available under the **MIT License**.

---

Made with ❤️ by [Sourav Paul](https://github.com/souravpl8092) 🚀

---
