# vkhypernova.github.io

My personal portfolio website, built with Next.js and deployed to GitHub Pages.

🔗 **Live site:** [vkhypernova.github.io](https://vkhypernova.github.io/)

## Tech Stack

- [Next.js 15](https://nextjs.org/) — statically exported (`output: "export"`)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [ESLint](https://eslint.org/)
- GitHub Actions for CI/CD

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/VkHyperNova/vkhypernova.github.io.git
cd vkhypernova.github.io
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

## Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Starts the local development server  |
| `npm run build` | Builds and exports the static site   |
| `npm run start` | Serves the production build locally  |
| `npm run lint`  | Runs ESLint on the codebase          |

## Project Structure

```
├── .github/workflows/   # GitHub Actions deployment workflow
├── public/               # Static assets
├── src/                  # Application source code
├── next.config.mjs       # Next.js configuration (static export)
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json
```

## Deployment

This site is automatically built and deployed to GitHub Pages via a GitHub Actions workflow whenever changes are pushed to the `master` branch.

## License

This project is personal portfolio code. Feel free to browse the source for inspiration, but please don't reuse it as your own portfolio without permission.
