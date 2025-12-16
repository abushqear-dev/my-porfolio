# Mohammed Abu-Shqear | Full-Stack Developer Portfolio

A modern, responsive, and minimalist portfolio website built with **Next.js 15** and **Tailwind CSS**. Designed to showcase professional experience, projects, and skills with a clean split-screen layout.

![Portfolio Screenshot](public/my-photo.jpeg)
_(Note: Replace this path with a screenshot of the actual website if available later)_

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Font:** [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) & [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans)
- **Deployment:** Vercel (Recommended)

## 📂 Project Structure

This project follows a clean separation of concerns:

- `app/page.tsx`: The main UI structure (Layout & Presentation).
- `app/data.tsx`: **Content Source**. Edit this file to update the Bio, Projects, and Experience.
- `app/layout.tsx`: Global configurations (Fonts, Metadata, CSS Variables).
- `app/globals.css`: Global styles and Tailwind utilities.

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abushqear-dev/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 How to Edit Content

You don't need to dig into HTML/JSX to change your info.
Just open **`app/data.tsx`**:

```typescript
export const personalInfo = {
  name: "My New Name",
  title: "Senior Developer",
  // ...
};

export const projects = [
  // Add new projects here...
];
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
