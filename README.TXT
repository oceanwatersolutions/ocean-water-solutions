# Project Structure for Ocean Water Solutions

```
ocean-water-solutions/
│   package.json
│   vite.config.js
│   index.html
│   tailwind.config.js
│   postcss.config.js
│   .gitignore
│   README.md
│
├── public/
│   ├── images/
│   │   ├── logo.jpg
│   │   ├── thermal_scanning.jpg
│   │   ├── water_leakage.jpg
│   │   ├── waterproofing.jpg
│   │   ├── consultation.jpg
│   │   └── blog_sample.jpg
│   └── CNAME   (only if using custom GoDaddy subdomain)
│
├── src/
│   ├── App.jsx
│   ├── HomePage.jsx
│   ├── main.jsx
│   └── index.css
│
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## 🔹 README.md (sample content)
```markdown
# Ocean Water Solutions Website

A professional website for Ocean Water Solutions, built with **React + Vite + Tailwind CSS**, and deployed using **GitHub Pages**.

## 🚀 Local Development

1. Clone the repo:
   ```bash
   git clone https://github.com/YOUR-USERNAME/ocean-water-solutions.git
   cd ocean-water-solutions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```
   Site will run at `http://localhost:5173`

4. Build for production:
   ```bash
   npm run build
   ```
   Output in `dist/`

## 🌐 Deployment

GitHub Actions automatically builds and deploys the site to GitHub Pages on every push to the **main** branch.

### Steps:
- Ensure repo is **Public** (or GitHub Pro for private).
- In repo Settings → Pages → Select **GitHub Actions** as deployment source.
- Workflow file `.github/workflows/deploy.yml` handles build & deploy.

## 📂 Folder Details
- **/src** → React components & styling.
- **/public/images** → Logo and service images.
- **/dist** → Auto-generated after build (not committed).
- **/github/workflows** → Deployment config.

---

© 2025 Ocean Water Solutions. All rights reserved.
```

---

This structure + README gives you a clean, professional repo setup ready for GitHub Pages deployment.

