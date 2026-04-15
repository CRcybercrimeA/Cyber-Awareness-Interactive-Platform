# Cyber-Awareness-Interactive-Platform
An educational platform with quizzes, chatbot, and phishing simulations. Engages users through interactive learning and real-life cyber scenarios. Improves cyber safety awareness through practical experience.

## Project Structure
```
/frontend
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/                 # images, icons, logos
│   │   ├── icons/
│   │   ├── images/
│   │   └── logo.svg
│
│   ├── components/             # reusable UI components
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   │
│   │   ├── Hero/
│   │   │   └── Hero.jsx
│   │   │
│   │   ├── Features/
│   │   │   ├── Features.jsx
│   │   │   └── FeatureCard.jsx
│   │   │
│   │   ├── Tools/
│   │   │   ├── Tools.jsx
│   │   │   ├── EmailAnalyzer.jsx
│   │   │   └── UrlChecker.jsx
│   │   │
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.jsx
│   │   │   └── StatsCard.jsx
│   │   │
│   │   ├── Alerts/
│   │   │   ├── Alerts.jsx
│   │   │   └── AlertCard.jsx
│   │   │
│   │   ├── ThreatFeed/
│   │   │   ├── ThreatFeed.jsx
│   │   │   └── ThreatCard.jsx
│   │   │
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   │
│   │   └── Chatbot/
│   │       └── Chatbot.jsx
│
│   ├── pages/                  # full pages (if routing added later)
│   │   └── Home.jsx
│
│   ├── hooks/                  # custom hooks
│   │   └── useFetch.js
│
│   ├── utils/                  # helper functions
│   │   └── api.js
│
│   ├── data/                   # static data (alerts, features etc.)
│   │   ├── featuresData.js
│   │   ├── alertsData.js
│   │   └── threatsData.js
│
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Tailwind import
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.js
