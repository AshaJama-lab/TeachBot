# 🤖 TeachBot

TeachBot is a web-based AI assistant for higher education. It is designed to support students through group discussions, course-specific materials, and an AI assistant that can be configured by teachers.

The project uses a **React + Vite frontend** and a **Python FastAPI backend**. The architecture is designed to support locally running AI models, for example through **LM Studio**, so that sensitive course and user data can be processed in a controlled environment.

## 🎯 Project Goal

The goal of TeachBot is to provide a simple platform where:

* 👩‍🏫 Teachers can configure course information and learning objectives.
* 👩‍🎓 Students can participate in a shared group chat.
* 🤖 Students can interact with an AI assistant based on course context.
* 📄 Course documents can be uploaded and used as context.
* 🔐 AI processing can be performed locally instead of sending sensitive data to external services.

The first version focuses on the **core group chat and file upload functionality**. Additional features such as multiple courses, separate student groups, authentication, and advanced AI functionality can be added later.

## ✨ Current Features

* 💬 Real-time group chat using WebSockets
* 👤 Session-based usernames
* 📄 File upload from the frontend
* 📁 Local storage of uploaded files
* 🌐 React web interface
* ⚡ Fast development with Vite
* 🐍 Python backend using FastAPI
* 🔌 WebSocket communication between frontend and backend
* 🔄 CORS support for frontend-backend communication

## 🚀 Planned Features

* 🤖 Integration with a locally running LLM
* 🧠 AI responses based on course material
* 👩‍🏫 Teacher configuration interface
* 📚 Upload and manage course objectives and materials
* 👥 Separate groups and group-specific chat history
* 🔐 User authentication
* 🎓 Support for multiple courses
* 💾 Persistent chat history
* 📄 PDF/document processing

## 🛠️ Technology Stack

### Frontend

* **React** – User interface
* **Vite** – Frontend development and build tool
* **JavaScript / JSX** – Frontend programming language
* **Axios** – HTTP requests for file uploads
* **WebSocket API** – Real-time communication with the backend
* **HTML/CSS** – Structure and styling

### Backend

* **Python** – Backend programming language
* **FastAPI** – Web API framework
* **Uvicorn** – ASGI server
* **WebSockets** – Real-time communication
* **python-multipart** – File upload support

### AI

The planned AI architecture is based on **local language models**.

The project can use **LM Studio** to run a local LLM. A model such as Google's **Gemma** can be used depending on the available hardware and project requirements.

The AI model is intended to run locally rather than sending sensitive course or student information to an external AI service.

## 📁 Project Structure

```text
teachbot/
│
├── teachbot-client/
│   ├── src/
│   │   ├── components/
│   │   │   └── Chat.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── ...
│
├── teachbot-backend/
│   ├── main.py
│   ├── uploads/
│   ├── requirements.txt
│   └── venv/
│
├── .gitignore
└── README.md
```

> `venv/`, `node_modules/`, uploaded files, and other generated files should not be committed to GitHub.

## ⚙️ Requirements

Before running TeachBot, install:

* [Node.js](https://nodejs.org/)
* Python 3.11+
* Git
* A modern web browser

For AI functionality:

* LM Studio
* A locally supported language model

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/teachbot.git
cd teachbot
```

### 2. Install frontend dependencies

```powershell
cd teachbot-client
npm install
```

### 3. Install backend dependencies

Open another terminal:

```powershell
cd teachbot-backend
python -m venv venv
```

Activate the virtual environment on Windows:

```powershell
.\venv\Scripts\activate
```

Install the required Python packages:

```powershell
pip install fastapi uvicorn python-multipart
```

Or, if `requirements.txt` is available:

```powershell
pip install -r requirements.txt
```

## ▶️ Running TeachBot

TeachBot requires **two terminals**: one for the backend and one for the frontend.

### Terminal 1 – Backend

```powershell
cd teachbot-backend
.\venv\Scripts\activate
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend will run at:

```text
http://localhost:8000
```

The WebSocket endpoint is:

```text
ws://localhost:8000/ws/chat
```

### Terminal 2 – Frontend

```powershell
cd teachbot-client
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

Open the frontend in your browser:

```text
http://localhost:5173
```

## 🔌 Backend API

### WebSocket

```text
/ws/chat
```

Used for real-time group communication between students.

Example message:

```json
{
  "username": "Asha",
  "message": "What is the main topic of this course?"
}
```

### File Upload

```text
POST /upload
```

Used to upload course material or other files to the backend.

Uploaded files are stored locally in:

```text
teachbot-backend/uploads/
```

## 🔐 Data and Privacy

TeachBot is designed with controlled data processing in mind.

The planned architecture allows AI processing to take place locally, which can reduce the need to send course material or student information to external AI services.

The project should still be reviewed for GDPR and institutional security requirements before being used with real student or personal data.

## 🧩 Architecture

```text
                    ┌─────────────────────┐
                    │      Students       │
                    │   Web Browser       │
                    └──────────┬──────────┘
                               │
                               │ HTTP / WebSocket
                               ▼
                    ┌─────────────────────┐
                    │   React + Vite      │
                    │     Frontend        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Python + FastAPI    │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
                    ┌──────────┴──────────┐
                    │                     │
                    ▼                     ▼
             ┌─────────────┐       ┌─────────────┐
             │   Storage   │       │ Local LLM   │
             │   Uploads   │       │  LM Studio  │
             └─────────────┘       └─────────────┘
```

## 👩‍🏫 Intended Use

A teacher can provide course objectives and learning material. Students can then use the group chat to discuss course-related questions with support from the AI assistant.

The long-term goal is to make TeachBot useful across multiple courses and student groups while keeping the system simple and easy to use.

## 🔮 Future Development

Future development may include:

1. Local LLM integration
2. AI-generated answers based on uploaded course material
3. Teacher administration interface
4. Multiple student groups
5. Course management
6. Persistent database storage
7. Authentication
8. PDF and document processing
9. Course-specific AI configuration
10. Improved GDPR and security controls

## 👥 Project

TeachBot is developed as an educational software project at **University West (Högskolan Väst)**.

The project focuses on combining:

* Software development
* Artificial intelligence
* Higher education
* Human-centred design
* Secure/local data processing

## 📄 License

This project is currently developed for educational purposes.

A final open-source license can be added when the project's distribution requirements have been decided.
