# SnapShare

SnapShare is a modern social media application built with React, TypeScript, and Vite. It allows users to create, edit, and delete posts with text and images. The application features a sleek dark UI and utilizes local storage for data persistence.

## Features

- **Create Posts**: Users can create posts with text and optional images.
- **Edit Posts**: Users can edit their existing posts.
- **Delete Posts**: Users can delete their posts.
- **State Management**: The application uses Redux Toolkit for efficient state management, allowing for predictable state updates and easy debugging.
- **Responsive Design**: The application is designed to be responsive and user-friendly.
- **Local Storage**: All posts are stored locally in the browser's storage, ensuring data persistence across sessions.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast build tool and development server for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Redux Toolkit**: A library for managing application state.

## Installation

To get started with SnapShare, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/snap-share.git
   cd snap-share
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` (or the port specified in the terminal).

## Usage

- **Creating a Post**: Fill in the text area and optionally upload an image, then click "Post".
- **Editing a Post**: Click the "Edit" button on a post to modify its content.
- **Deleting a Post**: Click the "Delete" button to remove a post.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the creators of React, TypeScript, Vite, and Tailwind CSS for their amazing tools and libraries.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
	extends: [
		// Remove ...tseslint.configs.recommended and replace with this
		...tseslint.configs.recommendedTypeChecked,
		// Alternatively, use this for stricter rules
		...tseslint.configs.strictTypeChecked,
		// Optionally, add this for stylistic rules
		...tseslint.configs.stylisticTypeChecked,
	],
	languageOptions: {
		// other options...
		parserOptions: {
			project: ['./tsconfig.node.json', './tsconfig.app.json'],
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
	plugins: {
		// Add the react-x and react-dom plugins
		'react-x': reactX,
		'react-dom': reactDom,
	},
	rules: {
		// other rules...
		// Enable its recommended typescript rules
		...reactX.configs['recommended-typescript'].rules,
		...reactDom.configs.recommended.rules,
	},
});
```
