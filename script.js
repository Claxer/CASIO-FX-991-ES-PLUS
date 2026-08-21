const screen = document.getElementById("screen");
const historyDisplay = document.getElementById("history");

let answer = 0;

let isShift = false;
let isAlpha = false;

let angleMode = "DEG";

let calculationHistory = [];

function press(value) {

    if (
        screen.value === "0" ||
        screen.value === "Error"
    ) {

        screen.value = value;

    } else {

        screen.value += value;

    }

}

function clearScreen() {

    screen.value = "0";

    historyDisplay.textContent = "";

}

function deleteLast() {

    if (
        screen.value === "Error" ||
        screen.value.length <= 1
    ) {

        screen.value = "0";

    } else {

        screen.value =
            screen.value.slice(0, -1);

    }

}

function calculate() {

    try {

        let expression =
            screen.value;

        expression =
            expression.replace(
                /\^/g,
                "**"
            );

        expression =
            expression.replace(
                /π/g,
                "Math.PI"
            );

        expression =
            expression.replace(
                /\be\b/g,
                "Math.E"
            );

        historyDisplay.textContent =
            screen.value + " =";

        let result =
            Function(
                `"use strict"; return (${expression})`
            )();

        if (
            typeof result !== "number" ||
            !Number.isFinite(result)
        ) {

            throw new Error();

        }

        answer = result;

        screen.value =
            formatNumber(result);

        calculationHistory.push({
            expression: expression,
            result: result
        });

    }

    catch {

        screen.value = "Error";

    }

}

function formatNumber(number) {

    if (
        Number.isInteger(number)
    ) {

        return number.toString();

    }

    return Number(
        number.toFixed(10)
    ).toString();

}

function square() {

    let value =
        parseFloat(screen.value);

    if (isNaN(value)) return;

    answer = value ** 2;

    screen.value =
        formatNumber(answer);

}

function cube() {

    let value =
        parseFloat(screen.value);

    if (isNaN(value)) return;

    answer = value ** 3;

    screen.value =
        formatNumber(answer);

}

function squareRoot() {

    let value =
        parseFloat(screen.value);

    if (value < 0) {

        screen.value = "Error";

        return;

    }

    answer = Math.sqrt(value);

    screen.value =
        formatNumber(answer);

}

function cubeRoot() {

    let value =
        parseFloat(screen.value);

    answer =
        Math.cbrt(value);

    screen.value =
        formatNumber(answer);

}

function reciprocal() {

    let value =
        parseFloat(screen.value);

    if (value === 0) {

        screen.value = "Error";

        return;

    }

    answer = 1 / value;

    screen.value =
        formatNumber(answer);

}

function factorial() {

    let number =
        parseInt(screen.value);

    if (
        number < 0 ||
        !Number.isInteger(number)
    ) {

        screen.value = "Error";

        return;

    }

    let result = 1;

    for (
        let i = 2;
        i <= number;
        i++
    ) {

        result *= i;

    }

    answer = result;

    screen.value =
        formatNumber(result);

}

function percentage() {

    let value =
        parseFloat(screen.value);

    answer = value / 100;

    screen.value =
        formatNumber(answer);

}

function absolute() {

    let value =
        parseFloat(screen.value);

    answer =
        Math.abs(value);

    screen.value =
        formatNumber(answer);

}

function convertToRadians(value) {

    if (angleMode === "DEG") {

        return value * Math.PI / 180;

    }

    return value;

}


function trig(type) {

    let value =
        parseFloat(screen.value);

    let radians =
        convertToRadians(value);

    let result;

    if (type === "sin") {

        result = Math.sin(radians);

    }

    if (type === "cos") {

        result = Math.cos(radians);

    }

    if (type === "tan") {

        result = Math.tan(radians);

    }

    answer = result;

    screen.value =
        formatNumber(result);

}

function inverseTrig(type) {

    let value =
        parseFloat(screen.value);

    let result;

    if (type === "sin") {

        result = Math.asin(value);

    }

    if (type === "cos") {

        result = Math.acos(value);

    }

    if (type === "tan") {

        result = Math.atan(value);

    }

    if (angleMode === "DEG") {

        result =
            result * 180 / Math.PI;

    }

    answer = result;

    screen.value =
        formatNumber(result);

}

function logFunction() {

    let value =
        parseFloat(screen.value);

    if (value <= 0) {

        screen.value = "Error";

        return;

    }

    answer =
        Math.log10(value);

    screen.value =
        formatNumber(answer);

}

function lnFunction() {

    let value =
        parseFloat(screen.value);

    if (value <= 0) {

        screen.value = "Error";

        return;

    }

    answer =
        Math.log(value);

    screen.value =
        formatNumber(answer);

}

function insertPi() {

    if (screen.value === "0") {

        screen.value = "π";

    } else {

        screen.value += "π";

    }

}

function insertE() {

    if (screen.value === "0") {

        screen.value = "e";

    } else {

        screen.value += "e";

    }

}

function useAnswer() {

    screen.value =
        formatNumber(answer);

}

function toggleShift() {

    isShift = !isShift;

    document.getElementById(
        "shiftIndicator"
    ).textContent =
        isShift ? "SHIFT" : "";

}

function toggleAlpha() {

    isAlpha = !isAlpha;

}

function toggleAngle() {

    if (angleMode === "DEG") {

        angleMode = "RAD";

    } else {

        angleMode = "DEG";

    }

    document.getElementById(
        "angleIndicator"
    ).textContent =
        angleMode;

}

function showHistory() {

    if (
        calculationHistory.length === 0
    ) {

        historyDisplay.textContent =
            "No history";

        return;

    }

    let last =
        calculationHistory[
            calculationHistory.length - 1
        ];

    historyDisplay.textContent =
        `${last.expression} = ${last.result}`;

}

function clearHistory() {

    calculationHistory = [];

    historyDisplay.textContent =
        "History cleared";

}

document.addEventListener(
    "keydown",
    function(event) {

        const key = event.key;

        if (
            "0123456789+-*/()."
            .includes(key)
        ) {

            press(key);

        }

        if (key === "Enter") {

            calculate();

        }

        if (key === "Backspace") {

            deleteLast();

        }

        if (key === "Escape") {

            clearScreen();

        }

    }
);
