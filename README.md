# Frontend Development Project

# Counter App

This is a frontend application built with Next.js. The application includes a Counter Component, Debounced Search Input, and a Theme Toggler, leveraging Next.js' features like code splitting and lazy loading for improved performance.

## Objective

The project integrates the following features into a single-page application:

### Counter Component:

- Increment and decrement a counter using buttons.
- Store each counter value in a list and maintain a history of counts.

### Debounced Search Input:

- Search through the list of counter values with a debounce effect (500ms delay).
- Display the filtered list based on the search term.

### Theme Toggler:

- Toggle between light and dark themes.
- The theme persists across sessions.

### Code Splitting and Lazy Loading:

- Implement code splitting and lazy load the search component when accessed.

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/your-username/frontend-development.git
cd frontend-development
```

Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## CI/CD Pipeline

To set up a CI/CD pipeline for this project, follow these steps:

1. <b>Version Control:</b>
   Push code to a GitHub repository and use meaningful commit messages.
   Create branches for feature development or bug fixes.
2. <b>Testing:</b>
   Use a testing framework like Jest or React Testing Library to write unit and integration tests.
   Configure GitHub Actions or CircleCI for continuous testing on each pull request.
3. <b>Building:</b>
   Use Next.js' built-in next build command to create an optimized production build.
4. <b>Deployment:</b>
   Deploy on Vercel, the official platform for Next.js apps, or use Netlify.
   Set up automatic deployment from your GitHub repository by linking it to Vercel or Netlify.
5. <b>Tools:</b>
   GitHub Actions for automation of tests and builds.
   Vercel or Netlify for easy deployment.

## How to Use

- <b>Counter Component: </b>Increment or decrement the counter using buttons. The current count and history of counts are displayed.
- <b>Search Input: </b>Type in the search input field to filter through the list of counter values. The search is debounced by 500ms to optimize performance.
- <b>Theme Toggler: </b>Switch between light and dark modes using the theme toggle button. The selected theme will persist across browser sessions.

## Contributing

If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Make your changes and commit (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature-name).
5. Create a Pull Request.

## License

This project is open-source and available under the MIT License.
