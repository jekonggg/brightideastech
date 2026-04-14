# Brightideas Front-End Technical Exam

This project is a React-based web application developed for the Brightideas Technical Exam. It features two distinct design views (Design 1 and Design 2) with full mobile responsiveness.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [NPM](https://www.npmjs.com/)

### Installation
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm run dev
```
By default, the application will be available at `http://localhost:5173`.

---

## 🛠 Features

### Design 1
- **Hero Section**: Interactive circle expander that updates content dynamically.
- **Accordion Grid**: Functional 2x3 grid of expandable text blocks.
- **Contact Form**: Styled input fields with a custom dropdown component.
- **Feature Cards**: A 4-column (desktop) / 2-column (mobile) card grid.

### Design 2
- **Data Table**: Custom-styled table with rounded corners and themed borders.
- **Project List**: A vertical list of items with hover effects and brand colors.
- **Themed Banner**: Full-width imagery with a color overlay and typography.

### Responsive Design
- **Mobile View**: Strictly optimized for iPhone X (375px) and screens up to 480px.
- **Hamburger Menu**: A functional mobile menu that restricts Design 2 and provides an expandable "Items 1" list for mobile navigation.
- **Typography**: Responsive font sizes and weights tailored for mobile readability.

---

## 🏗 Built With
- **React 19** - Core UI Framework
- **Vite** - Build Tool & Dev Server
- **Lucide React** - Iconography
- **Vanilla CSS** - Custom implementation of the design system

## 📂 Project Structure
- `/src/components` - Reusable UI elements (Navbar, Accordion, etc.)
- `/src/views` - Main page layouts (Design1.jsx, Design2.jsx)
- `/src/index.css` - Central Design System and Responsive Overrides
