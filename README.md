# Aurivus Challenge 🚀

![example branch parameter](https://github.com/wael-jaber/aurivus_challenge/actions/workflows/ci.yaml/badge.svg?branch=main)

Welcome to the **Aurivus Challenge**! This is a React-based web application that overlays an NxM raster grid on a static image, allowing users to interact with grid cells through a sleek vertical list view. 🖼️📐

---

## 🌟 Features

- **Static Image with Overlay** 🖼️:
  - Displays a predefined image with a customizable NxM grid overlay.
- **Interactive Cell List** 🎯:

  - **Hover**: Highlights the corresponding cell on the grid.
  - **Click**: Toggles the visibility of individual cells.

- **Customizable Grid Dimensions** ✨:
  - Adjust the number of rows (`N`) and columns (`M`) with ease.

---

## ⚙️ Development Workflow

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+)
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/) (for dev container users)
- [Visual Studio Code](https://code.visualstudio.com/) with **Dev Containers** extension

---

### 🛠️ Getting Started

1. **Clone the repository** 📥:

   ```bash
   git clone https://github.com/wael-jaber/aurivus_challenge.git
   cd aurivus_challenge
   ```

2. **Set up the dev container** 🐳:

   - Open the project in VS Code.
   - Reopen the workspace in a dev container: Click on the `><` (Dev Containers) icon and select **Reopen in Container**.

3. **Install dependencies** 📦:

   ```bash
   pnpm install
   ```

4. **Start the app** 🚀:

   ```bash
   pnpm dev
   ```

   Your app will be live at `http://localhost:5173`!

---

## 🧪 Testing

Run tests with `vitest` 🧪:

```bash
pnpm test
```

Run end-to-end tests using `playwright`:

```bash
pnpm test:e2e
```

---

## 📦 Available Scripts

Here are some handy commands to make your development experience smoother:

- **Start the app**: `pnpm dev`
- **Build the app**: `pnpm build`
- **Lint the code**: `pnpm lint`
- **Preview the app**: `pnpm preview`
- **Run Storybook**: `pnpm storybook`
- **Build Storybook**: `pnpm build-storybook`
- **Run tests**: `pnpm test`
- **Run E2E tests**: `pnpm test:e2e`

---

## 📂 Folder Structure

```plaintext
aurivus_challenge/
├── src/
│   ├── components/     # Reusable React components
│   ├── assets/         # Static assets like images
│   ├── styles/         # TailwindCSS styles
├── .devcontainer/      # Dev container configuration
├── tests/              # Unit and E2E tests
└── README.md           # Project documentation
```

---

## 🛡️ Code Quality & Commit Guidelines

- **Linting & Formatting**: 🧹

  - All changes are automatically linted with ESLint and formatted with Prettier via `lint-staged` and Husky pre-commit hooks.

- **Commit Guidelines**: ✏️
  - Follow the Conventional Commit format with `commitizen`. Use:
    ```bash
    pnpm commit
    ```
