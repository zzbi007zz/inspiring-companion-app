# Inspiring Companion

Inspiring Companion is a React-based web application that displays inspirational quotes paired with beautiful images. It uses the Random Quote API for fetching quotes and the Pexels API for retrieving images.

## Features

- Display of inspirational quotes with accompanying images
- Navigation through multiple quote-image pairs
- Responsive design for various screen sizes
- Ability to refresh quotes and images
- Modal view for individual quotes

## Technologies Used

- React
- React Router
- Vite (for build tooling)
- Tailwind CSS (for styling)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.18+ or 16+)
- npm (comes with Node.js)

## Installation

To install Inspiring Companion, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/inspiring-companion.git
   ```

2. Navigate to the project directory:
   ```
   cd inspiring-companion
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your API keys:
   ```
   VITE_QUOTE_API_KEY=your_quote_api_key_here
   VITE_PEXELS_API_KEY=your_pexels_api_key_here
   ```

## Running the Application

To run Inspiring Companion in development mode, use the following command:

```
npm run dev
```

This will start the development server. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Building for Production

To create a production build, run:

```
npm run build
```

This will generate a `dist` folder with the production-ready files.

## Contributing

Contributions to Inspiring Companion are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Create a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

- [Random Quote API](https://rapidapi.com/divadsingh0012000-divadsingh0012000/api/random-quote-api3/) for providing inspirational quotes
- [Pexels API](https://www.pexels.com/api/) for supplying high-quality images
- All contributors who have helped with the project

## Contact

If you have any questions or feedback, please open an issue on the GitHub repository.

Happy coding!
