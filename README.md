# JS-Knowledge-Base | Interactive FAQ Dashboard

A fully interactive, tabbed FAQ dashboard built entirely with vanilla JavaScript. This project simulates a real-world "Knowledge Base" UI, allowing users to browse fundamental JavaScript questions by category and click to reveal the answers via a smooth, custom-built accordion animation.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [JavaScript Architecture](#javascript-architecture)
- [Project Structure](#project-structure)
- [Author](#author)

## Demo
[Live Demo]() 

## Features
- **Categorized Tabs:** Dynamically switch between "Variables", "DOM", "Functions", and "Advanced" categories without reloading the page.
- **State-Driven Accordion:** Click a question to smoothly slide open the answer. Opening one automatically closes the others.
- **Dynamic Height Calculation:** The accordion uses JavaScript to calculate the exact pixel height of the hidden text before animating, bypassing the CSS `height: auto` animation limitation.
- **Active State UI:** Tabs and accordion icons dynamically update their styling (red accents and rotations) based on user interaction.
- **Premium Dark UI:** Built with a custom dark slate and crimson red color palette.

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML 5 | Semantic markup & DOM structure |
| Tailwind CSS | Utility-first styling, layout, and responsive design |
| JavaScript | DOM manipulation, state management, and event handling |

## Project Structure

```text
FAQ-Accordion/
│
├── assets/
│   ├── Font/          
│   ├── StyleSheet/          
│   └── JavaScript/
│
└── index.html
```

## Author

**Ali Mirzaei** – Frontend Developer

- [GitHub](https://github.com/ali-mirzaei-dev)
- [LinkedIn](https://www.linkedin.com/in/ali-mirzaei-dev/)
- [Instagram](https://instagram.com/ali.mirzaei.dev)
- [ali.mirzaei.kt@gmail.com](mailto:ali.mirzaei.kt@gmail.com)