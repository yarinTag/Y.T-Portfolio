# Y.T Portfolio

This portfolio template is perfect for showcasing your professional background and capabilities. It's more than just a static website—it's an interactive experience built with modern technologies and customizable features, making it easy for you to adapt and make it your own.

### Key Features

- **Interactive Bot Assistant:**

  - Integrated with Gemini AI to answer questions about me and my professional journey.
  - A seamless way to engage with my portfolio and explore more about my skills and projects.

- **Modern Tech Stack:**

  - **React** and **Next.js** for building a fast and interactive user interface.
  - **TypeScript** for type safety and maintainability.
  - **Tailwind CSS** for crafting a clean and responsive design.

- **Performance Optimized:**

  - Built with Next.js’s server-side rendering (SSR) and static site generation (SSG) capabilities for optimal performance.

- **Responsive Design:**
  - Mobile-first approach ensures a great experience on all devices.

## Project Structure

### Folder Overview

- **public/images:** Contains all images used in the app, including my CV.
- **src/app/context:** Manages the theme state and context for the app.
- **src/app/icons:** Includes two bulb icons for theme control.
- **src/app/globals.css:** Tailwind CSS for global styling.
- **src/app/layout.tsx:** Defines the root layout of the application.
- **src/app/page.tsx:** Wraps the app with `ThemeProvider`.

### Components Directory

- **components/section:**

  - `AboutSection.tsx`: Manages the About section of the portfolio.
  - `Section.tsx`: A reusable section component.

- **components/navbar:**

  - `MobileMenu.tsx`: Handles mobile navigation menu.
  - `Navbar.tsx`: Main navigation bar.
  - `NavLink.tsx`: Navigation link component.
  - `StyledBurger.tsx`: Styled hamburger menu for mobile navigation.

- **components/skill:**

  - `Skill.tsx`: Displays skills with an interactive design.

- **components/tab:**

  - `Tab.tsx`: Tab component for organizing content.

- **components/timeline:**

  - `TimeLineItem.tsx`: Timeline item component for showcasing milestones.

- **components/project:**

  - `Project.tsx`: Manages project showcase.

- **components/shared:**
  - `AnimatedText.tsx`: Animates text for dynamic effects.
  - `ChatBot.tsx`: Integrates the chatbot feature.

### API

- **pages/api/chat.ts:**
  - Integrates with Gemini AI to power the assistant bot, providing responses based on the data shared about me.

## Installation and Setup

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yarinTag/Y.T-Portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Y.T-Portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Technologies Used

- **React**: For building the user interface.
- **Next.js**: For server-side rendering and static site generation.
- **TypeScript**: For enhancing code quality and maintainability.
- **Tailwind CSS**: For creating a responsive and modern design.
- **Gemini AI Integration**: Enhances the bot assistant functionality.

## How It Works

- **Bot Assistant:**

  - The bot leverages Gemini AI to provide answers about my background, skills, and projects. Simply ask it a question to learn more about me.

- **Projects Section:**

  - Explore various projects I’ve worked on, presented in an engaging and visually appealing layout.

- **Responsive Design:**
  - The site adapts beautifully across devices, ensuring accessibility and a seamless experience for all users.

## Screenshots

_Coming Soon: Visual previews of the portfolio design and features._

## Contributing

Contributions are welcome! If you have ideas or improvements, feel free to fork the repository and submit a pull request. Let’s collaborate to make this portfolio even better.
