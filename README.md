# Calculator App

This is a simple Calculator application built with React. The app allows users to input two numbers and add them together. The project follows Test-Driven Development (TDD) principles and includes tests to ensure functionality.

## Table of Contents
- [Calculator App](#calculator-app)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Running Tests](#running-tests)
  - [File Structure](#file-structure)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/calculator-app.git
   cd calculator-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

Open your web browser and navigate to `http://localhost:3000` to see the application in action. Enter two numbers in the input fields and click the `+` button to see the result.

## Running Tests

To run the tests, use the following command:
```bash
npm test
```

This will run the tests and display the results, showing you which tests passed and which failed.

## File Structure

The project structure is as follows:

```
calculator-app/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Calc.js
│   │   └── Calc.test.js
│   ├── App.js
│   ├── App.test.js
│   ├── App.css
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── ...
```

- **src/components/Calc.js**: The Calculator component.
- **src/components/Calc.test.js**: Tests for the Calculator component.
- **src/App.js**: Main application component.
- **src/App.test.js**: Tests for the main application component.
- **src/App.css**: Styles for the main application component.
- **src/index.js**: Entry point for the React application.

## Technologies Used

- React
- Jest
- React Testing Library

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
