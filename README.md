# 🚀 FlashAi — AI SaaS Platform

FlashAi is a full-stack AI-powered SaaS platform that enables users to generate content, create and edit images, and analyze resumes using modern AI APIs.

Built with a focus on scalable backend architecture, real-world API integrations, and production-ready deployment.

---

## 🌐 Live Demo

🔗 https://flashai-client.vercel.app/



---

## 🧠 Problem It Solves

Creating high-quality content, editing images, and reviewing resumes often requires multiple tools.
FlashAi brings these capabilities into a **single platform powered by AI**, improving efficiency and user experience.

---

## ✨ Key Features

### ✍️ AI Content Generation

* Generate blog articles and titles using AI
* Structured and formatted output for readability

### 🎨 AI Image Tools

* Generate images from prompts
* Remove background and unwanted objects
* Optimized image processing workflows

### 📄 Resume Analyzer

* Upload PDF resumes
* Extract and analyze content using AI
* Generate structured feedback

### 👤 User System

* Authentication and user management
* Usage-based access control (free vs premium)
* User-specific history tracking

---

## 🏗️ System Architecture

FlashAi follows a modular full-stack architecture:

* **Frontend (React)** → User interface and interaction
* **Backend (Node.js/Express)** → API layer and business logic
* **Database (PostgreSQL)** → Stores user data and generated content
* **External APIs** → Gemini (AI), Cloudinary (image processing), Stripe (payments)

Designed for:

* Scalability
* Clean API structure
* Efficient request handling

---

## 🔁 Application Flow

1. User logs in via authentication system
2. User selects AI tool (content, image, resume)
3. Request sent to backend API
4. Backend integrates with AI services (Gemini / Cloudinary)
5. Response processed and stored in database
6. Results displayed in user dashboard

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* React Router
* Tailwind CSS
* Axios
* Markdown rendering

### Backend

* Node.js
* Express.js
* PostgreSQL (Neon)
* Multer (file uploads)
* Clerk (Authentication)

### External Services

* Google Gemini API (AI content & analysis)
* Cloudinary (image processing)
* Stripe (payments & subscriptions)

### Tools

* Postman (API testing)
* Git & GitHub
* Vercel (Deployment)

---

## 🔌 API Highlights

| Feature           | Endpoint                 |
| ----------------- | ------------------------ |
| Generate Article  | /api/ai/generate-article |
| Generate Titles   | /api/ai/generate-titles  |
| Generate Image    | /api/ai/generate-image   |
| Remove Background | /api/ai/remove-bg        |
| Resume Review     | /api/ai/review-resume    |

---

## 🔐 Demo Access

**Demo User**

* Email: [demo@flashai.com](mailto:demo@flashai.com)
* Password: demo123

---

## ⚙️ Local Setup

### Clone Repository

```bash
git clone https://github.com/your-username/flashai.git
cd flashai
```

---

### Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```env
PORT=5000
DATABASE_URL=your_postgresql_url
GEMINI_API_KEY=your_key
CLOUDINARY_URL=your_cloudinary_config
CLERK_SECRET_KEY=your_key
STRIPE_SECRET_KEY=your_key
```

Run backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

---

## 🚀 Deployment

* Full-stack application deployed on Vercel
* Environment variables configured securely
* Separate client and server deployments

---

## 🧪 Testing & Debugging

* Tested API endpoints using Postman
* Handled edge cases and API failures
* Ensured proper request/response validation

---

## 📌 Future Improvements

* Advanced prompt customization
* AI chat assistant
* Improved image editing tools
* Payment plans and subscriptions enhancement

---

## 👨‍💻 Author

**Tanishq Sharma**

🔗 LinkedIn: https://www.linkedin.com/in/tanishq-sharma-377931287/

🔗 Gmail: sharmatanishq.dev@gmail.com

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
