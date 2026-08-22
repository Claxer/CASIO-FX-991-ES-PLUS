# 🧮 Casio FX-991ES Plus Web Calculator

A modern **scientific calculator web application** inspired by the design and functionality of the **Casio FX-991ES Plus**. This project is built using **HTML, CSS, and JavaScript** and combines a realistic calculator interface with useful scientific functions.

The project can also run as a **desktop application using Electron**, allowing the calculator to run in its own application window instead of only inside a web browser.

## 📌 Description

This project recreates the look and feel of a Casio scientific calculator in a web browser and as a desktop application.

The calculator includes basic arithmetic, scientific functions, trigonometry, logarithms, powers, factorials, percentage calculations, keyboard controls, calculation history, answer memory, and DEG/RAD modes.

The project is designed as a beginner-friendly web development project for practicing **HTML, CSS, JavaScript, DOM manipulation, event handling, mathematical programming, and Electron desktop application development**.

The calculator interface was also optimized so that the **entire calculator remains visible when the application window is resized**, preventing the layout from becoming cut off or displaying only part of the calculator.

## ✨ Features

### 🔢 Basic Calculations

* Addition
* Subtraction
* Multiplication
* Division
* Decimal numbers
* Parentheses
* Exponents
* Pi (π)
* Euler's number (e)
* Percentage
* Absolute value

### 🧮 Scientific Functions

* Square (`x²`)
* Cube (`x³`)
* Square root (`√`)
* Cube root (`∛`)
* Reciprocal (`1/x`)
* Factorial (`x!`)
* Power (`xʸ`)
* Logarithm (`log`)
* Natural logarithm (`ln`)

### 📐 Trigonometry

* Sine (`sin`)
* Cosine (`cos`)
* Tangent (`tan`)
* Inverse sine (`sin⁻¹`)
* Inverse cosine (`cos⁻¹`)
* Inverse tangent (`tan⁻¹`)

### 📏 Angle Modes

The calculator supports:

* DEG – Degrees
* RAD – Radians

You can switch between the two modes using the **DEG/RAD** button.

### 💾 Answer & History

* `ANS` button for recalling the previous answer
* Calculation history
* Clear calculation history
* Previous calculation shown above the main display

### ⌨️ Keyboard Support

The calculator can also be controlled using the computer keyboard.

| Key         | Function       |
| ----------- | -------------- |
| `0-9`       | Enter numbers  |
| `+`         | Addition       |
| `-`         | Subtraction    |
| `*`         | Multiplication |
| `/`         | Division       |
| `.`         | Decimal        |
| `(` `)`     | Parentheses    |
| `Enter`     | Calculate      |
| `Backspace` | Delete         |
| `Escape`    | Clear          |

### 🎛️ Calculator Controls

The interface includes several Casio-inspired controls:

* SHIFT
* ALPHA
* DEL
* AC
* DEG/RAD
* ANS
* HISTORY
* CLR HIST

The **SHIFT** indicator also appears on the calculator display when activated.

## 🖥️ Desktop Application

The calculator can be packaged and launched as a **desktop application using Electron**.

Electron allows the HTML, CSS, and JavaScript calculator to run inside its own application window.

### Electron Features

* Runs as a standalone desktop application
* Dedicated calculator window
* Custom application window size
* Responsive calculator layout
* Calculator remains visible when resizing the window
* Prevents the calculator from being cut off on smaller window sizes
* Uses a secure preload script
* Uses Electron's main process to create and manage the application window

## 📐 Responsive Window Layout

The calculator was updated to properly handle different window sizes.

Previously, resizing the application could cause the calculator to become partially hidden or positioned incorrectly.

The updated layout uses responsive CSS and Electron window settings to keep the calculator properly centered and visible.

This allows the application to maintain the calculator's proportions while adapting to different screen and window sizes.

The calculator can therefore be used in:

* Normal desktop windows
* Maximized windows
* Smaller resized windows
* Different screen resolutions

## 🎨 Design Features

The calculator has been designed to resemble a modernized Casio scientific calculator.

Features include:

* Casio-inspired layout
* Dark calculator body
* LCD-style green display
* Solar-panel design
* Rounded calculator body
* Realistic button shadows
* Button press animations
* Hover effects
* Responsive layout
* Mobile-friendly design
* Electron desktop window support
* Automatic responsive scaling
* Orbitron digital-style display font
* Modern gradient background

## 🛠️ Technologies Used

### HTML5

Used to create the calculator structure, display, buttons, and controls.

### CSS3

Used for:

* Calculator styling
* Grid layouts
* Colors
* Shadows
* Gradients
* Animations
* Responsive design
* LCD display styling
* Calculator scaling
* Window resizing behavior

### JavaScript

Used to implement:

* Calculator operations
* Scientific calculations
* Trigonometric functions
* DEG/RAD conversion
* Factorials
* Powers
* Square and cube calculations
* Answer memory
* Calculation history
* Keyboard controls
* Error handling
* SHIFT and ALPHA states
* Dynamic calculator interactions

### Electron

Used to convert the web calculator into a desktop application.

Electron handles:

* Creating the application window
* Loading the calculator interface
* Window sizing
* Window resizing
* Desktop application behavior
* Communication between the Electron process and web application

### Google Fonts

The **Orbitron** font is used to create a digital calculator-style display.

## 📂 Project Structure

```text
casio-calculator/
│
├── index.html
├── style.css
├── script.js
├── main.js
├── preload.js
├── package.json
└── README.md
```

### `index.html`

Contains the calculator's structure, including:

* Calculator body
* Brand section
* Solar panel
* LCD display
* Status indicators
* Scientific buttons
* Number keypad
* Function buttons

### `style.css`

Controls the appearance of the calculator, including:

* Dark body design
* LCD display
* Button colors
* Button shadows
* Hover effects
* Press animations
* Responsive layout
* Mobile support
* Calculator scaling
* Window resizing behavior

### `script.js`

Contains the calculator's main functionality, including:

* Basic arithmetic
* Scientific operations
* Trigonometric calculations
* Inverse trigonometry
* Logarithms
* Factorials
* Percentage
* Square and cube functions
* Square and cube roots
* DEG/RAD modes
* Answer memory
* Calculation history
* Keyboard support
* Error handling

### `main.js`

Contains the main Electron process.

It is responsible for:

* Creating the Electron application window
* Loading `index.html`
* Setting the initial window size
* Controlling window resizing
* Managing the desktop application lifecycle
* Configuring Electron security settings

### `preload.js`

Provides a secure bridge between the Electron application and the calculator interface.

The preload script is loaded before the web page and allows the application to safely expose selected Electron functionality when needed.

### `package.json`

Contains the project's Node.js and Electron configuration.

It includes:

* Project information
* Electron dependency
* Application start script
* Project metadata

## 🚀 How to Run

### 🌐 Run as a Web Calculator

1. Download or clone this repository.

2. Open the project folder.

3. Open:

```text
index.html
```

4. The calculator will launch in your default web browser.

No server or database is required for the browser version.

### 🖥️ Run as an Electron Desktop Application

Make sure **Node.js** and **npm** are installed.

1. Open the project folder in a terminal.

2. Install the project dependencies:

```bash
npm install
```

3. Start the Electron application:

```bash
npm start
```

4. The calculator will open in its own desktop application window.

### 🔄 Running the Application Again

After the project has already been installed, you normally only need to run:

```bash
npm start
```

There is no need to reinstall the dependencies every time unless the project dependencies have changed.

## 🧪 Example Calculations

### Basic Arithmetic

```text
25 + 15 = 40
```

### Square Root

```text
√144 = 12
```

### Power

```text
2 ^ 8 = 256
```

### Factorial

```text
5! = 120
```

### Percentage

```text
50% = 0.5
```

### Trigonometry

In DEG mode:

```text
sin(30) = 0.5
```

### Logarithm

```text
log(100) = 2
```

## 🎯 Purpose of the Project

This project was created to practice and demonstrate:

* HTML5 development
* CSS3 styling
* JavaScript programming
* DOM manipulation
* Event handling
* Functions
* Conditional statements
* Mathematical operations
* Arrays
* Keyboard events
* Responsive web design
* User interface design
* Electron application development
* Desktop application structure
* Basic Node.js project configuration

It also demonstrates how a physical calculator can be recreated as an interactive web application and converted into a standalone desktop application.

## 🔮 Future Improvements

The project can continue to be expanded with more advanced Casio-style features:

* [ ] Complete SHIFT functionality
* [ ] Complete ALPHA functionality
* [ ] MODE menu
* [ ] SETUP menu
* [ ] Fraction calculations
* [ ] Mixed fractions
* [ ] Decimal ↔ fraction conversion
* [ ] `S↔D`
* [ ] EXP / scientific notation
* [ ] ENG notation
* [ ] M+ / M− memory functions
* [ ] STO / RCL memory functions
* [ ] Statistics mode
* [ ] Regression calculations
* [ ] Equation solver
* [ ] Simultaneous equations
* [ ] Polynomial equations
* [ ] Matrix calculations
* [ ] Vector calculations
* [ ] Complex numbers
* [ ] Random number generation
* [ ] Permutations and combinations
* [ ] Prime factorization
* [ ] More realistic FX-991ES Plus button layout
* [ ] Two-line LCD display
* [ ] Calculator sound effects
* [ ] Theme customization
* [ ] Improved calculation history
* [ ] Local storage for saved calculations
* [ ] Package the calculator into an installable `.exe`
* [ ] Create an application icon
* [ ] Add automatic application updates
* [ ] Add a dedicated settings menu

## ⚠️ Disclaimer

This project is **inspired by the Casio FX-991ES Plus** for educational and personal development purposes.

It is **not an official Casio product** and is not affiliated with or endorsed by Casio.

## 👨‍💻 Author

**Jose Navoa**

Created as a web development, JavaScript, and Electron practice project.

---

⭐ If you like this project, consider giving the repository a **star** on GitHub!
