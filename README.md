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
Core features are completed, including cart flow and restaurant browsing.
Some UI polishing and optional features (payments, order tracking) are planned.
Not deployed yet, as current focus is on building more projects.
Additional improvements and feature expansions are planned for future releases.
The application is fully functional with all core features working end-to-end.

---

## 🧑‍💻 Author
**Suhas Magadum**  
Full-Stack MERN Developer  
Building real-world products & mastering full-stack engineering.


## Images
<img width="393" height="842" alt="Screenshot 2025-12-12 215853" src="https://github.com/user-attachments/assets/30c8db59-0cbe-4cde-a067-6d89a4033c16" />
<img width="387" height="830" alt="Screenshot 2025-12-12 215922" src="https://github.com/user-attachments/assets/6a367f7c-9ddf-48d9-97e3-17bdaf153573" />
<img width="393" height="835" alt="Screenshot 2025-12-12 220012" src="https://github.com/user-attachments/assets/7dc4b963-72d0-4098-a20c-5b78588d8eae" />
<img width="384" height="834" alt="Screenshot 2025-12-12 220033" src="https://github.com/user-attachments/assets/fcb69585-1c38-4987-8b83-4ad47132ff55" />
<img width="379" height="834" alt="Screenshot 2025-12-12 220042" src="https://github.com/user-attachments/assets/e5c8693c-c52e-4b93-a4e1-a79c4d263afd" />
<img width="378" height="828" alt="Screenshot 2025-12-12 220139" src="https://github.com/user-attachments/assets/4bc6f5ff-2671-45aa-b43e-58d44cd82c24" />
<img width="382" height="831" alt="Screenshot 2025-12-12 220200" src="https://github.com/user-attachments/assets/2dd306d7-24d3-48c6-af48-4a76fe678994" />


















