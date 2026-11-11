# Muhammed Sahid VP – Personal Portfolio

A modern, high-performance developer portfolio website designed with an enlarged, in-depth focus on **Projects**, **Clean Architecture**, and **Engineering Experiences**.

---

## 🌟 Highlights & Features

- **Enlarged Case Studies**: Each project is presented with architectural breakdowns, live phone/browser mockups, technical challenges & solutions, and performance metrics (60 FPS, <1.2s cold start).
- **Interactive Deep Dive Modal**: Clicking "Enlarge Deep Dive" opens a full case-study view detailing state management, problem-solution pairs, and tech stacks.
- **Enlarged Experience & Career Journey**: Alternating timeline with filters for Engineering Roles vs. Computer Science Education.
- **Dynamic Capabilities Matrix**: Interactive skill tags covering Flutter, Dart, Android Studio, Java, Data Structures, State Management (BLoC/Riverpod), and APIs.
- **Dark & Light Mode**: Seamless theme switching with local storage persistence.
- **Zero-Build Architecture**: Runs instantly in any browser by opening `index.html` or via any static file server.
- **100% Modular Data**: All projects, skills, and bio information are cleanly organized in `data.js` for instant updates.

---

## 🚀 How to Run Locally

### Option 1: Direct File
Simply double-click [`index.html`](./index.html) to open it in your default web browser (Chrome, Edge, etc.).

### Option 2: Local HTTP Server (Node.js)
In this directory, run:
```bash
npx serve .
```
Then navigate to `http://localhost:3000`.

### Option 3: Python Server
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

---

## ✏️ How to Customize Your Content

All profile information, project details, metrics, and experiences are stored in:
👉 [`data.js`](./data.js)

To update or add new projects:
1. Open [`data.js`](./data.js).
2. Modify or add entries in the `projects` array (title, category, metrics, challenge/solution, tech stack).
3. Update your social links, email, or resume PDF link in `portfolioData.personal`.
4. Refresh your browser to see immediate changes!

---

## 🌐 Deploy to GitHub Pages (1-Click)

Since your GitHub account is `sahidvp`, you can host this for free on GitHub Pages:

1. Create a repository on GitHub named `sahidvp.github.io` (or `portfolio`).
2. Run these commands inside this folder:
```bash
git init
git add .
git commit -m "Initial portfolio commit - enlarged projects & experiences"
git branch -M main
git remote add origin https://github.com/sahidvp/sahidvp.github.io.git
git push -u origin main
```
3. Your portfolio will be live at: **`https://sahidvp.github.io`**!

---

*Crafted for **Muhammed Sahid VP** (`sahidsai071@gmail.com`).*

