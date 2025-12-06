# 🍽️ Zomato Clone – Full-Stack Food Ordering & Restaurant Discovery App

A full-stack MERN application inspired by Zomato, built with a focus on real-world features such as user authentication, restaurant partner onboarding, food management, media uploads, and an engaging video-based discovery experience.

This project demonstrates production-level backend architecture, secure authentication, media handling, and dynamic React interfaces.

---

## 🚀 Features

### 👤 User Module
- User Registration & Login (JWT + HTTP-only cookies)
- Protected pages for logged-in users
- Logout functionality(logic is written just need to add UI for it)
- After login, users are redirected to a **Reels Section**
- Users can:
  - Browse all food items
  - Watch restaurant-uploaded videos (reels)
  - Visit individual restaurant pages
  - Explore restaurant menus

---

## 🏪 Restaurant Partner Module
- Restaurant Partner Registration & Login
- Each partner has a dedicated dashboard
- Partners can:
  - Add food items with:
    - Name, price, description
    - Image upload
    - **Video upload** (stored via Cloudinary)
  - Manage their own food items
- Each restaurant has a **public restaurant page** showing:
  - All food items by that restaurant
  - A **Reels section** (similar to Instagram)

---

## 🎥 Video & Image Handling
- Integrated Cloudinary upload for:
  - Food images  
  - Food videos  
- Backend supports image and video resource types
- Frontend renders videos similarly to Reels experience
- Users see food + short videos when they log in

---

## 🖥️ Frontend (React)
- React + Axios + React Router DOM
- Clean routing with protected routes
- Dynamic pages:
  - Login/Register pages
  - Food feed page
  - Restaurant detail page
  - Reel viewer
- Upcoming UI improvements:
  - Like button feature
  - Additional icons & styling polish

---

## 🛠️ Backend (Node.js + Express)
- Secure user & restaurant partner authentication
- Multer middleware for handling file uploads
- Cloudinary integration for media storage
- Modular controllers for:
  - User auth
  - Restaurant partner auth
  - Food item creation
  - Video & image handling
- MongoDB database for:
  - Users
  - Restaurant Partners
  - Food Items
  - Media references

---
## 🔧 Tech Stack

**Frontend:**  
- React.js  
- Axios  
- React Router DOM  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Multer for uploads  
- Cloudinary for media storage  

---

## 📌 Status
✔️ 95% complete  
🎨 Minor UI polish pending  
❤️ Like feature planned  

The application is fully functional with all core features working end-to-end.

---

## 🧑‍💻 Author
**Suhas Magadum**  
Full-Stack MERN Developer  
Building real-world products & mastering full-stack engineering.













## 🗂️ Project Structure
