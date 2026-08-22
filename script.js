const screen =
    document.getElementById("screen");

const historyDisplay =
    document.getElementById("history");


/* =====================================================
   CALCULATOR VARIABLES
===================================================== */

let answer = 0;

let isShift = false;

let isAlpha = false;

let angleMode = "DEG";

let calculationHistory = [];


/* =====================================================
   BASIC INPUT
===================================================== */

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


/* =====================================================
   CLEAR
===================================================== */

function clearScreen() {

    screen.value = "0";

    historyDisplay.textContent = "";

}


/* =====================================================
   DELETE
===================================================== */

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


/* =====================================================
   CALCULATE
===================================================== */

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

            expression:
                expression,

            result:
                result

        });

    }

    catch {

        screen.value = "Error";

    }

}


/* =====================================================
   FORMAT NUMBER
===================================================== */

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


/* =====================================================
   SQUARE
===================================================== */

function square() {

    let value =
        parseFloat(screen.value);


    if (isNaN(value)) {

        screen.value = "Error";

        return;

    }


    answer =
        value ** 2;


    screen.value =
        formatNumber(answer);

}


/* =====================================================
   CUBE
===================================================== */

function cube() {

    let value =
        parseFloat(screen.value);


    if (isNaN(value)) {

        screen.value = "Error";

        return;

    }


    answer =
        value ** 3;


    screen.value =
        formatNumber(answer);

}


/* =====================================================
   SQUARE ROOT
===================================================== */

function squareRoot() {

    let value =
        parseFloat(screen.value);


    if (
        isNaN(value) ||
        value < 0
    ) {

        screen.value = "Error";

        return;

    }


    answer =
        Math.sqrt(value);


    screen.value =
        formatNumber(answer);

}


/* =====================================================
   CUBE ROOT
===================================================== */

function cubeRoot() {

    let value =
        parseFloat(screen.value);


    if (isNaN(value)) {

        screen.value = "Error";

        return;

    }


    answer =
        Math.cbrt(value);


    screen.value =
        formatNumber(answer);

}


/* =====================================================
   RECIPROCAL
===================================================== */

function reciprocal() {

    let value =
        parseFloat(screen.value);


    if (
        isNaN(value) ||
        value === 0
    ) {

        screen.value = "Error";

        return;

    }


    answer =
        1 / value;


    screen.value =
        formatNumber(answer);

}


/* =====================================================
   FACTORIAL
===================================================== */

function factorial() {

    let number =
        parseFloat(screen.value);


    if (
        isNaN(number) ||
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


/* =====================================================
   PERCENTAGE
===================================================== */

function percentage() {

    let value =
        parseFloat(screen.value);


    if (isNaN(value)) {

        screen.value = "Error";

        return;

    }


    answer =
        value / 100;


    screen.value =
        formatNumber(answer);

}


/* =====================================================
   ABSOLUTE
===================================================== */

function absolute() {

    let value =
        parseFloat(screen.value);


    if (isNaN(value)) {

        screen.value = "Error";

        return;

    }


    answer =
        Math.abs(value);


    screen.value =
        formatNumber(answer);

}


/* =====================================================
   RADIANS
===================================================== */

function convertToRadians(value) {

    if (angleMode === "DEG") {

        return value *
            Math.PI /
            180;

    }

    return value;

}


/* =====================================================
   TRIGONOMETRY
===================================================== */

function trig(type) {

    let value =
        parseFloat(screen.value);


    if (isNaN(value)) {

        screen.value = "Error";

        return;

    }


    let radians =
        convertToRadians(value);


    let result;


    if (type === "sin") {

        result =
            Math.sin(radians);

    }


    if (type === "cos") {

        result =
            Math.cos(radians);

    }


    if (type === "tan") {

        result =
            Math.tan(radians);

    }


    if (!Number.isFinite(result)) {

        screen.value = "Error";

        return;

    }


    answer = result;


    screen.value =
        formatNumber(result);

}


/* =====================================================
   INVERSE TRIG
===================================================== */

function inverseTrig(type) {

    let value =
        parseFloat(screen.value);


    if (isNaN(value)) {

        screen.value = "Error";

        return;

    }


    let result;


    if (type === "sin") {

        result =
            Math.asin(value);

    }


    if (type === "cos") {

        result =
            Math.acos(value);

    }


    if (type === "tan") {

        result =
            Math.atan(value);

    }


    if (!Number.isFinite(result)) {

        screen.value = "Error";

        return;

    }


    if (angleMode === "DEG") {

        result =
            result *
            180 /
            Math.PI;

    }


    answer = result;


    screen.value =
        formatNumber(result);

}


/* =====================================================
   LOG
===================================================== */

function logFunction() {

    let value =
        parseFloat(screen.value);


    if (
        isNaN(value) ||
        value <= 0
    ) {

        screen.value = "Error";

        return;

    }


    answer =
        Math.log10(value);


    screen.value =
        formatNumber(answer);

}


/* =====================================================
   LN
===================================================== */

function lnFunction() {

    let value =
        parseFloat(screen.value);


    if (
        isNaN(value) ||
        value <= 0
    ) {

        screen.value = "Error";

        return;

    }


    answer =
        Math.log(value);


    screen.value =
        formatNumber(answer);

}


/* =====================================================
   PI
===================================================== */

function insertPi() {

    if (
        screen.value === "0" ||
        screen.value === "Error"
    ) {

        screen.value = "π";

    } else {

        screen.value += "π";

    }

}


/* =====================================================
   EULER
===================================================== */

function insertE() {

    if (
        screen.value === "0" ||
        screen.value === "Error"
    ) {

        screen.value = "e";

    } else {

        screen.value += "e";

    }

}


/* =====================================================
   ANSWER
===================================================== */

function useAnswer() {

    screen.value =
        formatNumber(answer);

}


/* =====================================================
   SHIFT
===================================================== */

function toggleShift() {

    isShift =
        !isShift;


    const indicator =
        document.getElementById(
            "shiftIndicator"
        );


    if (indicator) {

        indicator.textContent =
            isShift
                ? "SHIFT"
                : "";

    }

}


/* =====================================================
   ALPHA
===================================================== */

function toggleAlpha() {

    isAlpha =
        !isAlpha;

}


/* =====================================================
   DEG / RAD
===================================================== */

function toggleAngle() {

    angleMode =
        angleMode === "DEG"
            ? "RAD"
            : "DEG";


    const indicator =
        document.getElementById(
            "angleIndicator"
        );


    if (indicator) {

        indicator.textContent =
            angleMode;

    }

}


/* =====================================================
   HISTORY
===================================================== */

function showHistory() {

    if (
        calculationHistory.length === 0
    ) {

        historyDisplay.textContent =
            "No history";

        return;

    }


    const last =
        calculationHistory[
            calculationHistory.length - 1
        ];


    historyDisplay.textContent =
        `${last.expression} = ${last.result}`;

}


/* =====================================================
   CLEAR HISTORY
===================================================== */

function clearHistory() {

    calculationHistory = [];


    historyDisplay.textContent =
        "History cleared";

}


/* =====================================================
   KEYBOARD
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        const key =
            event.key;


        if (
            "0123456789+-*/()."
                .includes(key)
        ) {

            press(key);

        }


        if (key === "Enter") {

            event.preventDefault();

            calculate();

        }


        if (key === "Backspace") {

            event.preventDefault();

            deleteLast();

        }


        if (key === "Escape") {

            clearScreen();

        }

    }
);
