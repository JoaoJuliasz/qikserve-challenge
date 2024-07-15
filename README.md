# QikServe Challenge

## Project Overview

The QikServe Challenge consists of building a React application that presents some restaurant data and its menu. Users should be able to visualize items and build a basket. Restaurant data is consumed from the provided API endpoints.

## Accessing the Project

You can access the project at: [https://joaojuliasz.github.io/qikserve-challenge/](https://joaojuliasz.github.io/qikserve-challenge/)

## Setup and Installation

To set up and install the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/joaojuliasz/qikserve-challenge.git
   cd qikserve-challenge
   ```
2. **Install dependencies::**

   ```bash
   npm install
   ```
## Running the project

To run the project locally, use the following command:

```bash
npm run dev
 ```

This will start the development server and you can view the project by navigating to http://localhost:5137 in your web browser.

## Running Tests

To run the tests for the project, use the following command:
 ```bash
 npm run test
 ```
This will execute all the tests using Jest and React Testing Library.

## Development Process and Choices

- **React and TypeScript:** React was chosen for its component-based architecture, which allows for reusable UI components. TypeScript was used to enhance code quality with static type checking.
- **Vite:** Vite was chosen as the build tool for its fast development server and efficient build process.
- **Testing:** React Testing Library and Jest were chosen for their simplicity and effectiveness in testing React components.
- **Linting:** ESLint, along with specific plugins for React and TypeScript, was used to ensure code quality and consistency.
- **Context API:** The Context API was used to manage and share state across the application, providing a clean and efficient way to handle global state.

