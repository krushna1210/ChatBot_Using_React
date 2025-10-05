# ChatBot_Using_React

A simple yet modern chatbot built using **React** and **CSS**, connected to a **Large Language Model (LLM)** through an API key for intelligent responses.

---

## 🚀 Overview
This project demonstrates how to build an interactive chatbot interface using **React** for the frontend and **CSS** for styling. The chatbot communicates with a **Language Model (LLM)** (like OpenAI, Hugging Face, or Groq) through an **API key** for secure access.

---

## ✨ Features
- 🧠 AI-powered chatbot using LLM API
- ⚛️ Built with React (Vite for fast development)
- 🎨 Styled with simple and clean CSS
- 🔒 Secure API key usage through `.env`
- 📱 Fully responsive UI for desktop and mobile

---

## 🛠️ Tech Stack
- **Frontend:** React + Vite
- **Styling:** CSS3
- **Backend (External):** LLM API (accessed via API key)

---

## 📂 Project Structure
```
ChatBot_Using_React/
│
├── public/                # Static assets
├── src/
│   ├── components/        # Chat components (UI + logic)
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── App.css            # Styling
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/krushna1210/ChatBot_Using_React.git
cd ChatBot_Using_React
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the root directory:
```
VITE_API_URL=https://your-llm-endpoint.example.com
VITE_API_KEY=your_api_key_here
```
> ⚠️ **Note:** `.env` is ignored by Git — never commit it.

### 4️⃣ Run the development server
```bash
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧩 How It Works
1. User sends a message in the chat box.
2. Message is sent to the backend (LLM API) via the API key.
3. LLM processes the query and returns a response.
4. Chatbot displays the response instantly in the UI.

---

## 🧠 Example Backends
You can integrate any LLM backend such as:
- **OpenAI GPT models** (via OpenAI API)
- **Groq / Mistral / Hugging Face Inference API**
- **Custom FastAPI or Node.js API** proxying requests

---

## 🖼️ UI Preview (Optional)
> Add a screenshot or demo GIF of your chatbot interface here.

---

## 📄 Future Enhancements
- Add conversation memory for multi-turn chats.
- Include typing indicators and message animations.
- Add support for multiple LLMs via dropdown.

---

## 👨‍💻 Author
**Krushna Dhadge**  
Developer & AI Enthusiast  
Feel free to connect or contribute!

---

## 📜 License
This project is licensed under the **MIT License** — free to use and modify.
