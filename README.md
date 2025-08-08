# 🚗 Uber Clone – Microservices Architecture

This is a **production-grade Uber clone** built using a **Microservices Architecture**, designed for scalability, modularity, and performance. The project is divided into individual services and a modern frontend built using React.js + MUI.

---

## 🧱 Monorepo Structure

```
main/
│
├── CLIENT/                # React.js frontend (MUI + GSAP for animations)
│
├── microservices-app/
│   ├── auth-service/      # User authentication (JWT, bcrypt, MongoDB)
│   ├── ride-service/      # Booking & trip management
│   └── ...                # (Add more services as you grow)
│
├── docker-compose.yml     # Orchestrates all services using Docker
└── README.md              # Project overview
```

---

## 🚀 Technologies Used

### 📦 Backend (Microservices)
- **Node.js**, **Express.js**
- **MongoDB** with Mongoose
- **JWT**, **bcrypt** for auth
- **Docker** + **Docker Compose** for containerization
- **Stripe/Razorpay** for payment (planned)
- **Nodemailer / Twilio** for notifications (planned)

### 🎨 Frontend
- **React.js** with **Vite**
- **Material UI (MUI)** for design
- **GSAP** for animation
- **Axios** for API calls

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js >= 18
- Docker + Docker Compose
- MongoDB
- Stripe / Razorpay keys (if using payments)
- Google API key for Places Autocomplete (if using maps)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Kashyap062004/Uber.git
cd uber-clone/main
```

### 2️⃣ Environment Configuration

Create `.env` files for each service inside their folders:

* `/microservices-app/auth-service/.env`
* `/microservices-app/ride-service/.env`
* `/CLIENT/.env`
* etc.

Sample `.env` for auth-service:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth
JWT_SECRET=your_secret_key
```

### 3️⃣ Run All Services

```bash
docker-compose up --build
```

> 🐳 This spins up all services + frontend on different containers.

---

## ✨ Frontend Preview

The frontend includes:

* ✅ Login/Register page with animations
* ✅ Location autocomplete (like Uber)
* ✅ Trip booking interface
* ✅ Booking history

To run frontend manually:

```bash
cd CLIENT
npm install
npm run dev
```

---

## 📡 API Gateway (Planned)

All services can be accessed directly or via an API Gateway (e.g. `http://localhost:8000/api/auth/login`). The gateway will handle:

* Routing
* Auth middleware
* Request forwarding

---

## 📈 Roadmap

* ✅ JWT-based Authentication
* ✅ Ride Booking & Fare Estimation
* ✅ Address Search via Google Places
* [ ] Payment Gateway Integration
* [ ] Realtime Driver Location with Sockets
* [ ] Admin Dashboard (Analytics)
* [ ] Kubernetes Deployment
* [ ] CI/CD with GitHub Actions

---

## 👨‍💻 Author

**Kashyap Trivedi**  
Feel free to connect or contribute!

---

## 📝 License

This project is licensed under the **MIT License**.