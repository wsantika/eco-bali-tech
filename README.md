# EcoBaliTech: Smart Waste & Environmental Awareness Platform for Bali

[![Live Demo](https://img.shields.io/badge/Live-Production-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://eco-bali-tech.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

> **Live Application:** [https://eco-bali-tech.vercel.app](https://eco-bali-tech.vercel.app)
>
> **Repository:** [https://github.com/wsantika/eco-bali-tech](https://github.com/wsantika/eco-bali-tech)

---

## Abstract

EcoBaliTech is a web-based environmental information platform designed to support cleaner, greener, and smarter communities in Bali. The project combines public communication, environmental issue awareness, an ecological calculator, dashboard-style data visualization, map-based information, educational content, and interactive engagement elements into a single digital experience. The application is intended to make environmental information more accessible, understandable, and actionable for the public.

## Keywords

Environmental Informatics, Smart Waste Management, Sustainability, Bali, Web Information System, Geographic Information System, Interactive Dashboard, Eco Education, Next.js

---

## 1. Introduction

Environmental challenges such as waste accumulation, low public awareness, and fragmented information systems remain significant issues in many urban and tourism-focused regions, including Bali. A digital platform that presents environmental data, educational resources, and interactive public tools can help strengthen sustainable behavior and improve access to information.

EcoBaliTech is developed as a modern web application to bridge that gap. It provides a user-friendly interface for environmental communication while integrating visual, interactive, and educational components relevant to waste and sustainability topics.

## 2. Problem Statement

The project addresses several practical issues:

- Limited public access to integrated environmental information
- Low engagement with sustainability education in digital form
- Lack of simple tools for estimating environmental impact
- Need for visually accessible dashboards and map-based information

## 3. Objectives

The main objectives of this project are:

1. To provide a centralized web platform for environmental information.
2. To improve public awareness regarding waste and sustainability issues.
3. To offer interactive tools such as calculators, dashboards, and maps.
4. To support environmental education using a modern web interface.
5. To demonstrate how digital technology can contribute to sustainable communities in Bali.

---

## 4. System Overview

EcoBaliTech is implemented as a frontend web application built with the Next.js framework. The system presents structured content through multiple sections, including navigation, hero content, issue presentation, environmental calculator, dashboard metrics, interactive maps, educational content, and promotional or informational call-to-action sections.

### Main Functional Modules

- **Hero Section** for primary messaging and value proposition
- **Problem Section** to explain environmental issues
- **Calculator Module** for user interaction and estimation
- **Dashboard Module** for visual summaries and metrics
- **Waste Game / Interactive Section** for engagement
- **Map Section** for geospatial or location-based information
- **Eco Education Section** for learning content
- **Footer Section** for navigation and supporting links

---

## 5. Key Features

### 5.1 Public-Facing Landing Experience

The application presents a structured landing page for communicating environmental goals, platform value, and sustainability messaging.

### 5.2 Environmental Calculator

A calculator module is included to help users estimate or better understand environmental impact in a practical way.

### 5.3 Data Dashboard

Dashboard visualization provides a concise way to communicate environmental statistics and indicators.

### 5.4 Interactive Map Support

Map-based functionality helps represent location-oriented information related to environmental contexts.

### 5.5 Educational Content

The education module supports awareness-building by presenting informative and accessible material.

### 5.6 Interactive Engagement

Gamified or interactive sections help improve user engagement and make environmental learning more approachable.

---

## 6. Technology Stack

| Layer      | Technology             |
| ---------- | ---------------------- |
| Framework  | Next.js 16             |
| UI Library | React 19               |
| Language   | TypeScript             |
| Styling    | CSS / Tailwind CSS 4   |
| Charts     | Recharts               |
| Mapping    | Leaflet, React Leaflet |
| Icons      | Lucide React           |
| Linting    | ESLint                 |
| Deployment | Vercel                 |

---

## 7. System Architecture

The current implementation is primarily a modern web frontend architecture.

```text
User Browser
    |
    v
Next.js Application
    |
    +-- Navigation & Hero Interface
    +-- Problem & Education Modules
    +-- Calculator Module
    +-- Dashboard Visualization Module
    +-- Map Module
    +-- Interactive/Game Module
    |
    v
Vercel Deployment Infrastructure
```

---

## 8. Project Structure

```bash
eco-bali-tech/
├── app/
│   ├── components/
│   ├── page.tsx
│   └── ...
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
└── README.md
```

---

## 9. Installation and Local Development

### Prerequisites

- Node.js 18 or newer
- npm

### Steps

```bash
# clone repository
git clone https://github.com/wsantika/eco-bali-tech.git

# enter project directory
cd eco-bali-tech

# install dependencies
npm install

# run development server
npm run dev
```

Open `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 10. Deployment

This project is deployed on **Vercel**.

### Production URL

**[https://eco-bali-tech.vercel.app](https://eco-bali-tech.vercel.app)**

### Deployment Workflow

1. Push source code changes to the GitHub repository.
2. Connect the repository to Vercel.
3. Trigger automatic build and deployment.
4. Access the live production URL after successful deployment.

---

## 11. Research and Practical Contribution

From an IEEE-style documentation perspective, this project contributes in the following ways:

- Demonstrates the use of a modern web stack for sustainability communication
- Integrates dashboard, map, and interactive modules into one platform
- Supports public engagement with environmental information
- Provides a prototype model for smart environmental information systems in regional contexts

---

## 12. Future Work

Potential future improvements include:

- Integration with real-time waste or environmental datasets
- User authentication and personalized dashboards
- Backend services and database support
- Analytics for user behavior and environmental trends
- Multi-language support
- Mobile-first enhancement and PWA support

---

## 13. Author

**Wsantika**

GitHub: [@wsantika](https://github.com/wsantika)

---

## 14. Citation Format

If you want to cite this project in academic or report-style writing, you may use the following format:

```text
Wsantika, "EcoBaliTech: Smart Waste & Environmental Awareness Platform for Bali," 2026. [Online]. Available: https://github.com/wsantika/eco-bali-tech
```

---

## 15. License

This repository currently does not specify a license. If you plan to make the project open for reuse, consider adding an MIT License file.

---

## 16. Notes

This README is intentionally structured in an **IEEE-inspired technical format** using sections such as abstract, keywords, introduction, objectives, system overview, contribution, and citation. Although GitHub README files do not follow a strict official IEEE template, this format helps present the project in a more academic and professional style.
