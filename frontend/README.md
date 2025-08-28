# 🌿 MindConnect – AI-Powered Mental Wellness Platform  

MindConnect is an **AI-driven mental wellness platform** built with the **MERN stack** and **Gemini API**.  
It provides **empathetic chat support, peer group matching, journaling, mood tracking, and wellness exercises** — creating a safe, judgment-free space for self-reflection and emotional growth.  

---

## ✨ Features
- 🧘 **AI Counselor** – GPT-powered chatbot for 24x7 mental wellness support.  
- 🫂 **Peer Group Matching** – Connect with people facing similar life challenges.  
- 📝 **Mood Tracking & Journaling** – Private logs with emotional insights.  
- 🧠 **Wellness Exercises** – Guided mindfulness, CBT, and relaxation exercises.  
- 🔒 **Privacy First** – Journals and mood logs remain confidential.  

---

## 🛠️ Tech Stack
- **Frontend**: React (JSX), CSS/Tailwind  
- **Backend**: Node.js, Express  
- **Database**: MongoDB (Mongoose ODM)  
- **AI Layer**: OpenAI GPT API  
- **Real-time Communication**: Socket.IO (for peer groups)  

---

## 📂 Project Structure
```bash
mindconnect/
│── client/              # Frontend (React)
│   ├── src/
│   │   ├── components/  # Reusable components (Navbar, ChatBox, etc.)
│   │   ├── pages/       # Main screens (Home, Chat, Journal, Mood, Groups)
│   │   ├── App.jsx
│   │   └── index.jsx
│   └── package.json
│
│── server/              # Backend (Express + Node.js)
│   ├── models/          # MongoDB models (User, Journal, Chat, Mood, Group)
│   ├── routes/          # API routes
│   ├── controllers/     # Business logic
│   ├── server.js
│   └── package.json
│
│── README.md
