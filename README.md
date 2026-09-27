# 🧮 Casio FX-991ES Plus Desktop Calculator

A modern **scientific calculator application** inspired by the design and functionality of the **Casio FX-991ES Plus**.

The project was originally created as a web calculator using **HTML, CSS, and JavaScript**, and was later converted into a **standalone Windows desktop application using Electron**.

The desktop version runs in its own application window and can be packaged into an installable `.exe` file.

---

## 📌 Description

This project recreates the look and functionality of a Casio-style scientific calculator as a computer application.

It provides a calculator interface with basic arithmetic, scientific calculations, trigonometry, logarithms, powers, factorials, percentages, memory functions, calculation history, angle modes, conversions, statistics, matrices, vectors, equations, tables, and other scientific calculator features.

The project demonstrates how a normal web application can be converted into a standalone desktop application using Electron.

The calculator can be used in two ways:

- 🌐 As a web calculator
- 🖥️ As a Windows desktop application

The desktop version opens in its own application window instead of requiring the calculator to remain open in a browser tab.

---

# ✨ Features

## 🔢 Basic Calculations

The calculator supports:

- Addition
- Subtraction
- Multiplication
- Division
- Decimal numbers
- Parentheses
- Exponents
- Pi (`π`)
- Euler's number (`e`)
- Percentages
- Absolute value
- Answer recall

Example:

```text
25 + 15 = 40
```

---

## 🧮 Scientific Functions

Scientific functions include:

- Square (`x²`)
- Square root (`√`)
- Cube root (`∛`)
- Powers (`xʸ`)
- Factorial (`x!`)
- Reciprocal calculations
- Logarithm (`log`)
- Natural logarithm (`ln`)
- `10ˣ`
- `eˣ`
- Floor
- Ceiling
- Round
- GCD
- LCM
- MOD
- Random number generation

---

## 📐 Trigonometry

The calculator includes:

- Sine (`sin`)
- Cosine (`cos`)
- Tangent (`tan`)
- Inverse sine (`sin⁻¹`)
- Inverse cosine (`cos⁻¹`)
- Inverse tangent (`tan⁻¹`)
- Hyperbolic sine (`sinh`)
- Hyperbolic cosine (`cosh`)
- Hyperbolic tangent (`tanh`)

---

## 📏 Angle Modes

The calculator supports different angle modes:

- DEG – Degrees
- RAD – Radians
- GRA – Gradians

The current angle mode is displayed at the top of the calculator display.

---

# 💾 Memory Functions

The calculator includes memory functions:

- `MC` – Memory Clear
- `MR` – Memory Recall
- `M+` – Add to Memory
- `M-` – Subtract from Memory
- `ANS` – Recall Previous Answer

The calculator also displays an `M` indicator when a value is stored in memory.

---

# 📜 Calculation History

The calculator includes a calculation history system.

Features include:

- Save previous calculations
- Display previous expressions
- Display previous results
- Select previous calculations
- Clear calculation history
- Store history using browser local storage

Example:

```text
25 + 15
= 40
```

The history panel allows previous calculations to be reviewed and reused.

---

# ⌨️ Keyboard Support

The calculator can also be controlled using a computer keyboard.

| Key | Function |
|---|---|
| `0-9` | Enter numbers |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `.` | Decimal |
| `(` `)` | Parentheses |
| `Enter` | Calculate |
| `Backspace` | Delete |
| `Escape` | Clear |

This allows the calculator to be used without clicking every button with the mouse.

---

# 🧠 Calculator Modes

The calculator includes several scientific calculator modes:

- `COMP` – Standard calculations
- `CMPLX` – Complex numbers
- `STAT` – Statistics
- `BASE-N` – Number base conversions
- `EQN` – Equation solving
- `MATRIX` – Matrix calculations
- `TABLE` – Function tables
- `VECTOR` – Vector calculations

The current mode is displayed on the calculator screen.

---

# 🔢 BASE-N

The calculator includes number-base conversion between:

- Decimal
- Binary
- Octal
- Hexadecimal

Example:

```text
Decimal: 255

Binary: 11111111
Octal: 377
Hexadecimal: FF
```

---

# 📊 Statistics

The statistics mode can calculate values from a set of numbers.

Supported calculations include:

- Number of values
- Sum
- Mean
- Median
- Minimum
- Maximum
- Variance
- Standard deviation

Example:

```text
10, 20, 30, 40, 50
```

The calculator can calculate the statistical values for the data set.

---

# 🔢 Complex Numbers

The complex-number mode supports expressions such as:

```text
3 + 4i
```

It can display:

- Complex value
- Magnitude
- Argument

---

# 🧮 Matrix Calculator

The matrix mode supports matrix calculations.

Supported operations include:

- Matrix addition
- Matrix multiplication
- Determinant
- Matrix inverse

Example:

```text
A = [[1,2],[3,4]]
```

---

# ➡️ Vector Calculator

The vector mode supports:

- Vector addition
- Dot product
- Cross product

Example:

```text
A = [1,2,3]
B = [4,5,6]
```

---

# 📈 TABLE Mode

The TABLE mode allows a mathematical function to be evaluated across a range of values.

You can enter:

- Function
- Starting value
- Ending value
- Step value

Example:

```text
f(x) = x² + 2x
```

The calculator generates a table containing:

```text
x       f(x)
-5      15
-4       8
-3       3
...
```

---

# 📐 Equation Solver

The calculator includes an equation-solving mode for mathematical expressions.

Example:

```text
x² - 5x + 6
```

The calculator attempts to find the numerical solutions for `x`.

---

# 🔄 Unit Conversions

The calculator includes several conversion tools.

### Length

Supports conversions between:

- Meter
- Kilometer
- Centimeter
- Millimeter
- Mile
- Foot
- Inch

### Mass

Supports:

- Kilogram
- Gram
- Pound
- Ounce

### Temperature

Supports:

- Celsius
- Fahrenheit
- Kelvin

### Speed

Includes conversions involving:

- km/h
- m/s
- mph

### Area

Includes conversions involving:

- Square meters
- Square feet
- Square centimeters

### Volume

Includes conversions involving:

- Liters
- Milliliters
- Cubic meters
- US gallons

---

# 🔬 Scientific Constants

The calculator includes several scientific constants, including:

- Speed of light
- Gravitational constant
- Planck constant
- Electron charge
- Standard gravity
- Gas constant
- Boltzmann constant
- Electron mass
- Proton mass

These can be inserted into calculations through the constants menu.

---

# 🖥️ Desktop Application

The calculator is packaged as a **Windows desktop application using Electron**.

Instead of opening the calculator inside a normal browser tab, Electron creates a dedicated application window.

The application can be launched like a normal Windows program.

### Desktop application features

- Standalone application window
- Windows desktop support
- Custom application size
- Resizable application window
- Responsive calculator interface
- Dedicated application title
- No browser tab required
- Can be packaged into a Windows installer
- Can be installed like a normal Windows application

---

# 📦 Windows Installer

The project can be packaged into a Windows installer.

The generated installer is:

```text
FX-991ES PLUS Calculator Setup 1.0.0.exe
```

After running the installer, the calculator can be installed and launched as a normal Windows desktop application.

The installer is generated inside the project's:

```text
dist/
```

folder.

---

# 📐 Responsive Window Layout

The calculator interface is designed to work with different application window sizes.

The layout uses responsive CSS and Electron window settings to help keep the calculator visible when the application is resized.

The application can be used in:

- Normal desktop windows
- Maximized windows
- Smaller resized windows
- Different screen resolutions

The calculator interface automatically adapts to available space.

---

# 🎨 Design Features

The calculator uses a modernized scientific calculator design.

Features include:

- Casio-inspired calculator layout
- Dark calculator body
- LCD-style display
- Scientific calculator buttons
- Button shadows
- Hover effects
- Button press animations
- Responsive layout
- Desktop application window
- Modern interface
- Scientific calculator status indicators
- Calculator history panel
- Modal menus for advanced functions

The goal is to make the application feel similar to using a physical scientific calculator while taking advantage of a desktop computer interface.

---

# 🛠️ Technologies Used

## HTML5

HTML is used to create:

- Calculator structure
- Display
- Buttons
- Menus
- History panel
- Calculator controls
- Modal windows

---

## CSS3

CSS is used for:

- Calculator styling
- Grid layouts
- Colors
- Shadows
- Gradients
- Animations
- Responsive design
- LCD display styling
- Button design
- Application layout
- Window resizing behavior

---

## JavaScript

JavaScript is responsible for:

- Calculator operations
- Scientific calculations
- Trigonometric functions
- Angle conversion
- Logarithms
- Factorials
- Powers
- Percentages
- Memory functions
- Calculation history
- Keyboard controls
- Error handling
- Calculator modes
- Statistics
- Matrix calculations
- Vector calculations
- Equation solving
- Table generation
- Number-base conversions
- Unit conversions
- Scientific constants

---

## Electron

Electron is used to convert the web calculator into a desktop application.

Electron handles:

- Creating the desktop window
- Loading the calculator interface
- Application sizing
- Window resizing
- Application lifecycle
- Windows desktop packaging
- Creating the `.exe` installer

---

## Math.js

The calculator uses **Math.js** for many of its advanced mathematical calculations.

Math.js provides functionality for:

- Mathematical expressions
- Complex numbers
- Matrices
- Vectors
- Statistics
- Mathematical functions
- Numerical calculations

---

# 📂 Project Structure

```text
FX-991ES-PLUS/
│
├── index.html
├── style.css
├── script.js
├── main.js
├── package.json
├── package-lock.json
├── node_modules/
├── dist/
│   └── FX-991ES PLUS Calculator Setup 1.0.0.exe
└── README.md
```

---

## `index.html`

Contains the main structure of the calculator.

It includes:

- Calculator interface
- Display
- Status indicators
- Mode buttons
- Scientific function buttons
- Number keypad
- Memory controls
- History panel
- Advanced function menus

---

## `style.css`

Controls the visual appearance of the calculator.

It handles:

- Calculator body
- Display
- Buttons
- Button shadows
- Hover effects
- Animations
- Responsive layouts
- Application sizing
- History panel
- Modal windows

---

## `script.js`

Contains the main calculator functionality.

It handles:

- Basic arithmetic
- Scientific calculations
- Trigonometry
- Inverse trigonometry
- Hyperbolic functions
- Logarithms
- Factorials
- Powers
- Percentages
- Memory functions
- Answer recall
- Calculation history
- Angle modes
- Statistics
- Complex numbers
- Matrices
- Vectors
- Equations
- Tables
- Number-base conversions
- Unit conversions
- Scientific constants
- Keyboard input

---

## `main.js`

Contains the Electron main process.

It is responsible for:

- Creating the desktop application window
- Loading `index.html`
- Setting the initial application size
- Controlling window resizing
- Managing the Electron application lifecycle

---

## `package.json`

Contains the Node.js and Electron project configuration.

It includes:

- Project name
- Project version
- Description
- Electron configuration
- Start script
- Build script
- Electron Builder configuration

Example commands include:

```bash
npm start
```

and:

```bash
npm run build
```

---

# 🚀 How to Run

## 🌐 Run as a Web Calculator

1. Download or clone the repository.

2. Open the project folder.

3. Open:

```text
index.html
```

4. The calculator will open in your web browser.

---

# 🖥️ Run as a Desktop Application

Make sure **Node.js** and **npm** are installed.

### Step 1 — Open the Project

Open the project folder in VS Code.

### Step 2 — Open the Terminal

In VS Code, select:

```text
Terminal → New Terminal
```

### Step 3 — Install Dependencies

Run:

```bash
npm install
```

This installs the required Electron packages.

### Step 4 — Start the Application

Run:

```bash
npm start
```

The calculator will open in its own desktop application window.

---

# 📦 Build the Windows Installer

To create the Windows installer, run:

```bash
npm run build
```

After the build finishes, open:

```text
dist/
```

The installer will be located there.

Example:

```text
FX-991ES PLUS Calculator Setup 1.0.0.exe
```

Double-click the `.exe` file to install the calculator.

---

# 🔄 Running the Application Again

After the dependencies have already been installed, you normally only need:

```bash
npm start
```

You do not need to run `npm install` every time.

Only run `npm install` again if the project's dependencies have changed or the project has been installed on another computer.

---

# 🧪 Example Calculations

## Basic Arithmetic

```text
25 + 15
```

Result:

```text
40
```

---

## Square Root

```text
sqrt(144)
```

Result:

```text
12
```

---

## Power

```text
2 ^ 8
```

Result:

```text
256
```

---

## Factorial

```text
factorial(5)
```

Result:

```text
120
```

---

## Percentage

```text
50%
```

Result:

```text
0.5
```

---

## Trigonometry

In DEG mode:

```text
sin(30)
```

Result:

```text
0.5
```

---

## Logarithm

```text
log(100)
```

Result:

```text
2
```

---

# 🎯 Purpose of the Project

This project was created to practice and demonstrate:

- HTML5 development
- CSS3 styling
- JavaScript programming
- DOM manipulation
- Event handling
- JavaScript functions
- Conditional statements
- Arrays
- Mathematical programming
- Keyboard events
- Responsive web design
- User interface design
- Scientific calculator development
- Electron desktop application development
- Node.js project configuration
- Windows application packaging

The project also demonstrates how a web-based application can be converted into a standalone desktop application.

---

# 🔮 Future Improvements

The project can continue to be expanded with more advanced calculator functionality.

Possible improvements include:

- [ ] More accurate Natural Textbook Display
- [ ] Fraction input and calculations
- [ ] Mixed fraction support
- [ ] Decimal ↔ fraction conversion
- [ ] `S↔D`
- [ ] Engineering notation
- [ ] More complete `SHIFT` functionality
- [ ] More complete `ALPHA` functionality
- [ ] `STO` / `RCL` memory functions
- [ ] More advanced statistics and regression
- [ ] More equation types
- [ ] Simultaneous equation solver
- [ ] Polynomial equation solver
- [ ] More advanced matrix operations
- [ ] More advanced vector operations
- [ ] More complex-number functions
- [ ] Numerical differentiation
- [ ] Numerical integration
- [ ] `CALC` functionality
- [ ] `SOLVE` functionality
- [ ] More scientific constants
- [ ] More conversion categories
- [ ] More realistic FX-991ES PLUS button layout
- [ ] Improved LCD display
- [ ] Calculator sound effects
- [ ] Custom application icon
- [ ] Additional themes
- [ ] Improved history management
- [ ] Saved calculator sessions
- [ ] Automatic updates
- [ ] Improved Windows installer
- [ ] Portable Windows version

---

# ⚠️ Disclaimer

This project is **inspired by the Casio FX-991ES Plus** for educational and personal development purposes.

It is **not an official Casio product** and is not affiliated with or endorsed by Casio.

The purpose of this project is to practice programming, web development, mathematical programming, and desktop application development.

---

# 👨‍💻 Author

**Jose Navoa**

Created as a web development, JavaScript, mathematical programming, and Electron desktop application project.

---

⭐ If you like this project, consider giving the repository a **star** on GitHub!
