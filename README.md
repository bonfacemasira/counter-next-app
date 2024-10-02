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

<!-- ## CI/CD Pipeline using Jenkins

To set up a CI/CD pipeline for this project using Jenkins, follow these steps:

1. Set Up Jenkins Server
   - Install Jenkins on a server or use a service like Jenkins on AWS EC2.
   - Install the necessary Jenkins plugins:
     <b>NodeJS Plugin: </b>For running Node.js scripts.
     <b>Git Plugin: </b>For version control.
     <b>SSH or Publish Over SSH Plugin: </b>For deployment if needed.
2. Create a Jenkins Pipeline
   - Navigate to your Jenkins dashboard and create a new Pipeline project.
   - Configure the pipeline to pull your code from GitHub by adding your GitHub repository link.
3. Configure Jenkinsfile
   Create a Jenkinsfile at the root of your project with the following content:

```groovy
pipeline {
agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install the necessary dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the Next.js application
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run the tests (if tests are set up)
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Example: Use SSH to deploy the application (customize as needed)
                    sh '''
                    ssh user@your-server "
                    cd /path/to/your/project &&
                    git pull &&
                    npm install &&
                    npm run build &&
                    pm2 restart your-app"
                    '''
                }
            }
        }
    }

    post {
        always {
            echo 'CI/CD pipeline finished.'
        }
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }

}
```

4. Set Up Webhooks
   - Go to your GitHub repository settings.
   - In the Webhooks section, add a webhook that triggers Jenkins on every push event:
     Payload URL: http://<your-jenkins-server>/github-webhook/
     Content type: application/json
     Events: Just the push event.
5. Build and Deploy
   - When you push your code to GitHub, the Jenkins pipeline will automatically:
   - Pull the latest code.
   - Install dependencies.
   - Build the Next.js project.
   - Run tests (if any).
   - Deploy the application (using SSH or other deployment methods). -->

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

## Tools Used:

1. GitHub: For version control.
2. Node.js: For running the frontend application.
3. Jenkins: For CI/CD pipeline orchestration.
4. SSH: For deploying the application on a remote server (customizable based on your needs).

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

```

```
