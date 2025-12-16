# Mohammed Abu-Shqear - Portfolio

Welcome to my personal portfolio source code! This project is a showcase of my skills as a Full-Stack Developer, built with a focus on clean architecture, performance, and best practices.

## 🚀 Built With

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/) for type safety.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first responsive design.
- **Font:** [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) & Sans.

## 🛠️ Engineering Highlights

This isn't just a static template. It's engineered to be scalable and maintainable:

1.  **Separation of Concerns:**

    - Content is decoupled from UI components.
    - All personal data lives in `app/data.tsx`, making updates instant without touching JSX.

2.  **Optimized Performance:**

    - Zero client-side JavaScript for static content (Server Components by default).
    - Fonts are optimized using `next/font` with CSS variables to prevent layout shift.

3.  **Responsive Design:**
    - Fluid layout that transforms from a single column (Mobile) to a split-screen dashboard (Desktop).

## 📂 Project Structure

```bash
├── app/
│   ├── data.tsx        # Single source of truth for Bio, Projects, and Experience
│   ├── layout.tsx      # Global font and metadata configuration
│   ├── page.tsx        # Main UI rendering engine
│   └── globals.css     # Tailored utilities (e.g., scrollbar hiding)
├── public/             # Static assets (Images)
└── README.md           # You are here
```

## 🏃‍♂️ Getting Started

Want to run this locally?

1.  **Clone the repo:**

    ```bash
    git clone https://github.com/abushqear-dev/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## � Contact

- **LinkedIn:** [Mohammed Abu-Shqear](https://www.linkedin.com/in/abushqear-dev/)
- **GitHub:** [@abushqear-dev](https://github.com/abushqear-dev)
- **Email:** m.abushqear.dev@gmail.com
