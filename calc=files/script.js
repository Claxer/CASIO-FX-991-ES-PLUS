let expression = "";
let answer = 0;
let memory = 0;
let angleMode = "DEG";
let currentMode = "COMP";

let history = JSON.parse(localStorage.getItem("fxHistory") || "[]");

const expressionDisplay = document.getElementById("expressionDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const modeDisplay = document.getElementById("modeDisplay");
const angleDisplay = document.getElementById("angleDisplay");
const memoryDisplay = document.getElementById("memoryDisplay");

function updateDisplay() {
    expressionDisplay.textContent = expression;
    modeDisplay.textContent = currentMode;
    angleDisplay.textContent = angleMode;

    if (memory !== 0) {
        memoryDisplay.textContent = "M";
    } else {
        memoryDisplay.textContent = "";
    }
}

function insertText(text) {
    expression += text;
    updateDisplay();
}

function insertFunction(func) {
    expression += func;
    updateDisplay();
}

function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function clearCalculator() {
    expression = "";
    resultDisplay.textContent = "0";
    updateDisplay();
}

function calculate() {

    if (!expression.trim()) {
        return;
    }

    try {

        let prepared = prepareExpression(expression);

        let result = math.evaluate(prepared);

        if (typeof result === "number") {
            result = formatNumber(result);
        } else if (result && result.toString) {
            result = result.toString();
        }

        answer = result;

        resultDisplay.textContent = result;

        addHistory(expression, result);

    } catch (error) {

        resultDisplay.textContent = "Syntax ERROR";

    }
}

function prepareExpression(input) {

    let expr = input;

    expr = expr.replace(/π/g, "pi");

    expr = expr.replace(/√/g, "sqrt");

    expr = expr.replace(/×/g, "*");

    expr = expr.replace(/÷/g, "/");

    expr = expr.replace(/−/g, "-");

    expr = expr.replace(/%/g, "/100");

    expr = expr.replace(/factorial\(([^()]*)\)/g, "factorial($1)");

    expr = convertTrigFunctions(expr);

    return expr;
}

function convertTrigFunctions(expr) {

    if (angleMode === "RAD") {
        return expr;
    }

    const trigFunctions = [
        "sin",
        "cos",
        "tan",
        "asin",
        "acos",
        "atan"
    ];

    for (let func of trigFunctions) {

        let regex = new RegExp(func + "\\(([^()]*)\\)", "g");

        expr = expr.replace(regex, function(match, value) {

            if (func.startsWith("a")) {
                return inverseTrig(func, value);
            }

            let radians =
                "(" + value + ")*pi/180";

            return func + "(" + radians + ")";

        });
    }

    return expr;
}

function inverseTrig(func, value) {

    let result = func + "(" + value + ")";

    return "(" + result + ")*180/pi";
}

function formatNumber(number) {

    if (!isFinite(number)) {
        return "Math ERROR";
    }

    if (Math.abs(number) < 1e-10) {
        return "0";
    }

    if (
        Math.abs(number) >= 1e10 ||
        Math.abs(number) < 1e-9
    ) {
        return Number(number).toExponential(8);
    }

    return Number(number.toFixed(10)).toString();
}

function toggleAngle() {

    if (angleMode === "DEG") {
        angleMode = "RAD";
    } else if (angleMode === "RAD") {
        angleMode = "GRA";
    } else {
        angleMode = "DEG";
    }

    updateDisplay();
}

function setMode(mode) {

    currentMode = mode;

    if (mode === "COMP") {
        expression = "";
        resultDisplay.textContent = "0";
    }

    if (mode === "CMPLX") {
        openComplexMode();
    }

    if (mode === "STAT") {
        openStatisticsMode();
    }

    if (mode === "BASE") {
        openBaseMode();
    }

    if (mode === "EQN") {
        openEquationMode();
    }

    if (mode === "MATRIX") {
        openMatrixMode();
    }

    if (mode === "TABLE") {
        openTableMode();
    }

    if (mode === "VECTOR") {
        openVectorMode();
    }

    updateDisplay();
}

function useAnswer() {

    expression += answer;

    updateDisplay();
}

function memoryClear() {

    memory = 0;

    updateDisplay();
}

function memoryRecall() {

    expression += memory;

    updateDisplay();
}

function memoryAdd() {

    try {

        let value = Number(math.evaluate(
            prepareExpression(expression)
        ));

        memory += value;

        updateDisplay();

    } catch {

        resultDisplay.textContent = "Math ERROR";

    }
}

function memorySubtract() {

    try {

        let value = Number(math.evaluate(
            prepareExpression(expression)
        ));

        memory -= value;

        updateDisplay();

    } catch {

        resultDisplay.textContent = "Math ERROR";

    }
}

function randomNumber() {

    expression += Math.random().toFixed(10);

    updateDisplay();
}

function addHistory(expr, result) {

    history.unshift({
        expression: expr,
        result: result,
        time: new Date().toLocaleTimeString()
    });

    history = history.slice(0, 50);

    localStorage.setItem(
        "fxHistory",
        JSON.stringify(history)
    );

    renderHistory();
}

function renderHistory() {

    const container =
        document.getElementById("historyList");

    container.innerHTML = "";

    history.forEach((item, index) => {

        const div = document.createElement("div");

        div.className = "history-item";

        div.innerHTML = `
            <div class="history-expression">
                ${item.expression}
            </div>

            <div class="history-result">
                = ${item.result}
            </div>

            <small>${item.time}</small>
        `;

        div.onclick = function() {

            expression = item.expression;

            resultDisplay.textContent =
                item.result;

            updateDisplay();

        };

        container.appendChild(div);

    });
}

function toggleHistory() {

    document
        .getElementById("historyPanel")
        .classList.toggle("hidden");

    renderHistory();
}

function clearHistory() {

    history = [];

    localStorage.removeItem("fxHistory");

    renderHistory();
}

function openModal(title, body) {

    document.getElementById("modalTitle")
        .textContent = title;

    document.getElementById("modalBody")
        .innerHTML = body;

    document.getElementById("modal")
        .classList.remove("hidden");
}

function closeModal() {

    document
        .getElementById("modal")
        .classList.add("hidden");
}

function showAdvanced() {

    openModal(
        "Advanced Functions",
        `
        <div class="modal-grid">

            <button onclick="insertFunction('floor(')">
                Floor
            </button>

            <button onclick="insertFunction('ceil(')">
                Ceiling
            </button>

            <button onclick="insertFunction('round(')">
                Round
            </button>

            <button onclick="insertFunction('gcd(')">
                GCD
            </button>

            <button onclick="insertFunction('lcm(')">
                LCM
            </button>

            <button onclick="insertFunction('mod(')">
                MOD
            </button>

            <button onclick="insertFunction('nthRoot(')">
                Root
            </button>

            <button onclick="insertFunction('sqrt(')">
                √
            </button>

            <button onclick="insertFunction('cbrt(')">
                ∛
            </button>

            <button onclick="insertFunction('exp(')">
                eˣ
            </button>

            <button onclick="insertFunction('log10(')">
                log
            </button>

            <button onclick="insertFunction('log2(')">
                log₂
            </button>

        </div>
        `
    );
}

function showConstants() {

    openModal(
        "Scientific Constants",
        `
        <div class="modal-grid">

            <button onclick="insertText('299792458')">
                Speed of Light
            </button>

            <button onclick="insertText('6.67430e-11')">
                Gravitational
            </button>

            <button onclick="insertText('6.62607015e-34')">
                Planck
            </button>

            <button onclick="insertText('1.602176634e-19')">
                Electron Charge
            </button>

            <button onclick="insertText('9.80665')">
                Gravity
            </button>

            <button onclick="insertText('8.314462618')">
                Gas Constant
            </button>

            <button onclick="insertText('1.380649e-23')">
                Boltzmann
            </button>

            <button onclick="insertText('9.1093837e-31')">
                Electron Mass
            </button>

            <button onclick="insertText('1.6726219e-27')">
                Proton Mass
            </button>

        </div>
        `
    );
}

function showConversions() {

    openModal(
        "Conversions",
        `
        <div class="modal-grid">

            <button onclick="convertLength()">
                Length
            </button>

            <button onclick="convertMass()">
                Mass
            </button>

            <button onclick="convertTemperature()">
                Temperature
            </button>

            <button onclick="convertSpeed()">
                Speed
            </button>

            <button onclick="convertArea()">
                Area
            </button>

            <button onclick="convertVolume()">
                Volume
            </button>

        </div>
        `
    );
}

function convertLength() {

    openModal(
        "Length Conversion",
        `
        <div class="input-group">
            <label>Value</label>
            <input id="lengthValue" type="number">
        </div>

        <div class="input-group">
            <label>From</label>

            <select id="lengthFrom">
                <option value="m">Meter</option>
                <option value="km">Kilometer</option>
                <option value="cm">Centimeter</option>
                <option value="mm">Millimeter</option>
                <option value="mi">Mile</option>
                <option value="ft">Foot</option>
                <option value="in">Inch</option>
            </select>
        </div>

        <div class="input-group">
            <label>To</label>

            <select id="lengthTo">
                <option value="m">Meter</option>
                <option value="km">Kilometer</option>
                <option value="cm">Centimeter</option>
                <option value="mm">Millimeter</option>
                <option value="mi">Mile</option>
                <option value="ft">Foot</option>
                <option value="in">Inch</option>
            </select>
        </div>

        <button class="action-button"
            onclick="performLengthConversion()">
            Convert
        </button>

        <div id="conversionResult"></div>
        `
    );
}

function performLengthConversion() {

    const value =
        Number(document.getElementById("lengthValue").value);

    const from =
        document.getElementById("lengthFrom").value;

    const to =
        document.getElementById("lengthTo").value;

    const factors = {

        m: 1,
        km: 1000,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.344,
        ft: 0.3048,
        in: 0.0254

    };

    const meters = value * factors[from];

    const result = meters / factors[to];

    document.getElementById(
        "conversionResult"
    ).innerHTML =
        `<br><strong>${result}</strong>`;
}

function convertMass() {

    openModal(
        "Mass Conversion",
        `
        <div class="input-group">
            <label>Value</label>
            <input id="massValue" type="number">
        </div>

        <div class="input-group">
            <label>From</label>
            <select id="massFrom">
                <option value="kg">Kilogram</option>
                <option value="g">Gram</option>
                <option value="lb">Pound</option>
                <option value="oz">Ounce</option>
            </select>
        </div>

        <div class="input-group">
            <label>To</label>
            <select id="massTo">
                <option value="kg">Kilogram</option>
                <option value="g">Gram</option>
                <option value="lb">Pound</option>
                <option value="oz">Ounce</option>
            </select>
        </div>

        <button class="action-button"
            onclick="performMassConversion()">
            Convert
        </button>

        <div id="massResult"></div>
        `
    );
}

function performMassConversion() {

    const value =
        Number(document.getElementById("massValue").value);

    const from =
        document.getElementById("massFrom").value;

    const to =
        document.getElementById("massTo").value;

    const factors = {
        kg: 1,
        g: 0.001,
        lb: 0.45359237,
        oz: 0.0283495231
    };

    const kg = value * factors[from];

    const result = kg / factors[to];

    document.getElementById(
        "massResult"
    ).innerHTML =
        `<br><strong>${result}</strong>`;
}

function convertTemperature() {

    openModal(
        "Temperature Conversion",
        `
        <div class="input-group">
            <label>Value</label>
            <input id="tempValue" type="number">
        </div>

        <div class="input-group">
            <label>From</label>
            <select id="tempFrom">
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
                <option value="K">Kelvin</option>
            </select>
        </div>

        <div class="input-group">
            <label>To</label>
            <select id="tempTo">
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
                <option value="K">Kelvin</option>
            </select>
        </div>

        <button class="action-button"
            onclick="performTemperatureConversion()">
            Convert
        </button>

        <div id="tempResult"></div>
        `
    );
}

function performTemperatureConversion() {

    let value =
        Number(document.getElementById("tempValue").value);

    const from =
        document.getElementById("tempFrom").value;

    const to =
        document.getElementById("tempTo").value;

    let celsius;

    if (from === "C") {
        celsius = value;
    } else if (from === "F") {
        celsius = (value - 32) * 5 / 9;
    } else {
        celsius = value - 273.15;
    }

    let result;

    if (to === "C") {
        result = celsius;
    } else if (to === "F") {
        result = celsius * 9 / 5 + 32;
    } else {
        result = celsius + 273.15;
    }

    document.getElementById(
        "tempResult"
    ).innerHTML =
        `<br><strong>${result}</strong>`;
}

function convertSpeed() {

    openModal(
        "Speed Conversion",
        `
        <div class="input-group">
            <label>km/h</label>
            <input id="speedValue" type="number">
        </div>

        <button class="action-button"
            onclick="speedConvert()">
            Convert
        </button>

        <div id="speedResult"></div>
        `
    );
}

function speedConvert() {

    const value =
        Number(document.getElementById("speedValue").value);

    document.getElementById(
        "speedResult"
    ).innerHTML =
        `<br>
        m/s: <strong>${value / 3.6}</strong><br>
        mph: <strong>${value * 0.621371}</strong>`;
}

function convertArea() {

    openModal(
        "Area Conversion",
        `
        <div class="input-group">
            <label>Square meters</label>
            <input id="areaValue" type="number">
        </div>

        <button class="action-button"
            onclick="areaConvert()">
            Convert
        </button>

        <div id="areaResult"></div>
        `
    );
}

function areaConvert() {

    const value =
        Number(document.getElementById("areaValue").value);

    document.getElementById(
        "areaResult"
    ).innerHTML =
        `<br>
        ft²: <strong>${value * 10.7639}</strong><br>
        cm²: <strong>${value * 10000}</strong>`;
}

function convertVolume() {

    openModal(
        "Volume Conversion",
        `
        <div class="input-group">
            <label>Liters</label>
            <input id="volumeValue" type="number">
        </div>

        <button class="action-button"
            onclick="volumeConvert()">
            Convert
        </button>

        <div id="volumeResult"></div>
        `
    );
}

function volumeConvert() {

    const value =
        Number(document.getElementById("volumeValue").value);

    document.getElementById(
        "volumeResult"
    ).innerHTML =
        `<br>
        m³: <strong>${value / 1000}</strong><br>
        ml: <strong>${value * 1000}</strong><br>
        US gallons: <strong>${value * 0.264172}</strong>`;
}

function openComplexMode() {

    openModal(
        "Complex Number Mode",
        `
        <p class="mode-title">
            Enter a complex number using a + bi.
        </p>

        <div class="input-group">
            <label>Complex Number</label>
            <input id="complexInput"
                   placeholder="3 + 4i">
        </div>

        <button class="action-button"
            onclick="calculateComplex()">
            Calculate
        </button>

        <div id="complexResult"></div>
        `
    );
}

function calculateComplex() {

    const input =
        document.getElementById("complexInput").value;

    try {

        const value = math.evaluate(input);

        const magnitude = math.abs(value);

        const arg = math.arg(value);

        document.getElementById(
            "complexResult"
        ).innerHTML = `
            <br>
            Value: <strong>${value}</strong><br>
            Magnitude: <strong>${magnitude}</strong><br>
            Argument: <strong>${arg}</strong>
        `;

    } catch {

        document.getElementById(
            "complexResult"
        ).textContent = "Math ERROR";

    }
}

function openStatisticsMode() {

    openModal(
        "Statistics",
        `
        <p class="mode-title">
            Enter numbers separated by commas.
        </p>

        <div class="input-group">
            <label>Data</label>
            <input id="statData"
                   placeholder="10,20,30,40,50">
        </div>

        <button class="action-button"
            onclick="calculateStatistics()">
            Calculate
        </button>

        <div id="statResult"></div>
        `
    );
}

function calculateStatistics() {

    const data =
        document.getElementById("statData")
            .value
            .split(",")
            .map(Number)
            .filter(x => !isNaN(x));

    if (!data.length) {
        return;
    }

    const mean = math.mean(data);

    const median = math.median(data);

    const min = Math.min(...data);

    const max = Math.max(...data);

    const sum = math.sum(data);

    const variance = math.variance(data);

    const std = math.std(data);

    document.getElementById(
        "statResult"
    ).innerHTML = `
        <br>
        Count: <strong>${data.length}</strong><br>
        Σx: <strong>${sum}</strong><br>
        Mean: <strong>${mean}</strong><br>
        Median: <strong>${median}</strong><br>
        Minimum: <strong>${min}</strong><br>
        Maximum: <strong>${max}</strong><br>
        Variance: <strong>${variance}</strong><br>
        Standard Deviation: <strong>${std}</strong>
    `;
}

function openBaseMode() {

    openModal(
        "BASE-N",
        `
        <div class="input-group">
            <label>Number</label>
            <input id="baseValue" type="text">
        </div>

        <div class="input-group">
            <label>Current Base</label>

            <select id="baseFrom">
                <option value="10">Decimal</option>
                <option value="2">Binary</option>
                <option value="8">Octal</option>
                <option value="16">Hexadecimal</option>
            </select>
        </div>

        <button class="action-button"
            onclick="convertBase()">
            Convert
        </button>

        <div id="baseResult"></div>
        `
    );
}

function convertBase() {

    const value =
        document.getElementById("baseValue").value;

    const base =
        Number(document.getElementById("baseFrom").value);

    try {

        const decimal =
            parseInt(value, base);

        document.getElementById(
            "baseResult"
        ).innerHTML = `
            <br>
            DEC: <strong>${decimal}</strong><br>
            BIN: <strong>${decimal.toString(2)}</strong><br>
            OCT: <strong>${decimal.toString(8)}</strong><br>
            HEX: <strong>${decimal.toString(16).toUpperCase()}</strong>
        `;

    } catch {

        document.getElementById(
            "baseResult"
        ).textContent = "Math ERROR";

    }
}

function openEquationMode() {

    openModal(
        "Equation Solver",
        `
        <div class="input-group">
            <label>Equation</label>

            <input id="equationInput"
                   placeholder="x^2 - 5*x + 6">
        </div>

        <button class="action-button"
            onclick="solveEquation()">
            Solve
        </button>

        <div id="equationResult"></div>
        `
    );
}

function solveEquation() {

    const equation =
        document.getElementById("equationInput").value;

    try {

        const expr =
            math.parse(equation);

        const derivative =
            math.derivative(expr, "x");

        let roots = [];

        for (let guess = -20; guess <= 20; guess++) {

            try {

                let x = guess;

                for (let i = 0; i < 50; i++) {

                    const fx =
                        expr.evaluate({x});

                    const dfx =
                        derivative.evaluate({x});

                    if (Math.abs(dfx) < 1e-12) {
                        break;
                    }

                    x =
                        x - fx / dfx;
                }

                if (isFinite(x)) {

                    if (
                        !roots.some(
                            r => Math.abs(r - x) < 0.0001
                        )
                    ) {
                        roots.push(x);
                    }

                }

            } catch {}

        }

        roots.sort((a,b) => a-b);

        document.getElementById(
            "equationResult"
        ).innerHTML =
            `<br>Solutions:<br>` +
            roots.map(
                r => `<strong>x = ${r}</strong>`
            ).join("<br>");

    } catch {

        document.getElementById(
            "equationResult"
        ).textContent =
            "Unable to solve equation.";

    }
}

function openMatrixMode() {

    openModal(
        "Matrix Calculator",
        `
        <div class="input-group">
            <label>Matrix A</label>

            <input id="matrixA"
                placeholder="[[1,2],[3,4]]">
        </div>

        <div class="input-group">
            <label>Matrix B</label>

            <input id="matrixB"
                placeholder="[[5,6],[7,8]]">
        </div>

        <button class="action-button"
            onclick="matrixCalculate('add')">
            A + B
        </button>

        <button class="action-button"
            onclick="matrixCalculate('multiply')">
            A × B
        </button>

        <button class="action-button"
            onclick="matrixCalculate('det')">
            det(A)
        </button>

        <button class="action-button"
            onclick="matrixCalculate('inverse')">
            A⁻¹
        </button>

        <div id="matrixResult"></div>
        `
    );
}

function matrixCalculate(operation) {

    try {

        const A =
            math.evaluate(
                document.getElementById("matrixA").value
            );

        let result;

        if (operation === "add") {

            const B =
                math.evaluate(
                    document.getElementById("matrixB").value
                );

            result = math.add(A, B);

        }

        if (operation === "multiply") {

            const B =
                math.evaluate(
                    document.getElementById("matrixB").value
                );

            result = math.multiply(A, B);

        }

        if (operation === "det") {
            result = math.det(A);
        }

        if (operation === "inverse") {
            result = math.inv(A);
        }

        document.getElementById(
            "matrixResult"
        ).innerHTML =
            `<br><strong>${result}</strong>`;

    } catch {

        document.getElementById(
            "matrixResult"
        ).textContent = "Matrix ERROR";

    }
}

function openTableMode() {

    openModal(
        "TABLE",
        `
        <div class="input-group">
            <label>Function</label>

            <input id="tableFunction"
                placeholder="x^2 + 2*x">
        </div>

        <div class="input-group">
            <label>Start</label>
            <input id="tableStart" value="-5">
        </div>

        <div class="input-group">
            <label>End</label>
            <input id="tableEnd" value="5">
        </div>

        <div class="input-group">
            <label>Step</label>
            <input id="tableStep" value="1">
        </div>

        <button class="action-button"
            onclick="generateTable()">
            Generate
        </button>

        <div id="tableResult"
             class="table-result"></div>
        `
    );
}

function generateTable() {

    const functionText =
        document.getElementById("tableFunction").value;

    const start =
        Number(document.getElementById("tableStart").value);

    const end =
        Number(document.getElementById("tableEnd").value);

    const step =
        Number(document.getElementById("tableStep").value);

    let html = `
        <table>
            <tr>
                <th>x</th>
                <th>f(x)</th>
            </tr>
    `;

    for (
        let x = start;
        x <= end;
        x += step
    ) {

        try {

            const y =
                math.evaluate(
                    functionText,
                    {x}
                );

            html += `
                <tr>
                    <td>${x}</td>
                    <td>${formatNumber(y)}</td>
                </tr>
            `;

        } catch {

            html += `
                <tr>
                    <td>${x}</td>
                    <td>ERROR</td>
                </tr>
            `;

        }

    }

    html += "</table>";

    document.getElementById(
        "tableResult"
    ).innerHTML = html;
}

function openVectorMode() {

    openModal(
        "Vector Calculator",
        `
        <div class="input-group">
            <label>Vector A</label>

            <input id="vectorA"
                   placeholder="[1,2,3]">
        </div>

        <div class="input-group">
            <label>Vector B</label>

            <input id="vectorB"
                   placeholder="[4,5,6]">
        </div>

        <button class="action-button"
            onclick="vectorCalculate('add')">
            A + B
        </button>

        <button class="action-button"
            onclick="vectorCalculate('dot')">
            Dot Product
        </button>

        <button class="action-button"
            onclick="vectorCalculate('cross')">
            Cross Product
        </button>

        <div id="vectorResult"></div>
        `
    );
}

function vectorCalculate(operation) {

    try {

        const A =
            math.evaluate(
                document.getElementById("vectorA").value
            );

        const B =
            math.evaluate(
                document.getElementById("vectorB").value
            );

        let result;

        if (operation === "add") {
            result = math.add(A, B);
        }

        if (operation === "dot") {
            result = math.dot(A, B);
        }

        if (operation === "cross") {
            result = math.cross(A, B);
        }

        document.getElementById(
            "vectorResult"
        ).innerHTML =
            `<br><strong>${result}</strong>`;

    } catch {

        document.getElementById(
            "vectorResult"
        ).textContent =
            "Vector ERROR";

    }
}

function openSettings() {

    openModal(
        "Calculator Setup",
        `
        <div class="modal-grid">

            <button onclick="setAngle('DEG')">
                DEG
            </button>

            <button onclick="setAngle('RAD')">
                RAD
            </button>

            <button onclick="setAngle('GRA')">
                GRAD
            </button>

            <button onclick="showAbout()">
                About
            </button>

        </div>
        `
    );
}

function setAngle(mode) {

    angleMode = mode;

    updateDisplay();

    closeModal();
}

function showAbout() {

    openModal(
        "About",
        `
        <p>
            FX-991ES PLUS Web Calculator
        </p>

        <br>

        <p>
            A browser-based scientific calculator
            inspired by the Casio FX-991ES PLUS.
        </p>

        <br>

        <p>
            Built with HTML, CSS and JavaScript.
        </p>
        `
    );
}

function toggleTheme() {

    document.body.classList.toggle("light-theme");
}

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key >= "0" &&
            event.key <= "9"
        ) {
            insertText(event.key);
        }

        if (
            "+-*/().".includes(event.key)
        ) {
            insertText(event.key);
        }

        if (event.key === "Enter") {
            calculate();
        }

        if (event.key === "Backspace") {
            deleteLast();
        }

        if (event.key === "Escape") {
            clearCalculator();
        }

    }
);

updateDisplay();
renderHistory();
