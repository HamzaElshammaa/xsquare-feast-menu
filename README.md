<div align="center">

# Xsquare Feast Menu 🍔✨

### **Interactive Digital Menu & Brand Experience for Xsquare Artisanal Food Truck**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-000000?style=for-the-badge)](https://ui.shadcn.com/)

*A mobile-first, appetite-driven digital menu and brand showcase crafted for fast QR-code ordering, instant category filtering, and fluid micro-interactions.*

</div>

---

## ✨ Overview & Features

**Xsquare Feast Menu** transforms a traditional static PDF food-truck menu into an interactive web experience optimized for on-the-go mobile customers:

- ⚡ **Sub-Second Mobile Load:** Built on Vite + React with optimized assets and zero layout shift for customers scanning QR codes on cellular connections.
- 🍟 **Interactive Category Navigation:** Sticky category pills, dietary & spice tags, combo builders, and instant item search.
- 🎨 **Custom Brand Identity:** Tailored typography, warm street-food color palette, and responsive item cards with high-resolution photography.
- 🔄 **Automated Menu Extraction Utility:** Includes a custom script (`scripts/extract-menu.cjs`) to parse structured menu items and pricing from source PDFs.

---

## 📂 Project Structure

```text
├── public/                 # Custom brand fonts & static imagery
├── scripts/
│   └── extract-menu.cjs    # PDF-to-JSON menu extraction utility
├── src/
│   ├── assets/             # Dish photography & brand illustrations
│   ├── components/         # Reusable UI primitives (shadcn/ui) & menu cards
│   ├── hooks/              # Mobile viewport & scroll-spy hooks
│   ├── lib/                # Utility helpers
│   └── pages/              # Main interactive menu & brand story views
└── tailwind.config.ts      # Brand color tokens & animation keyframes
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build
```
