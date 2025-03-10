const addToScreen = (dato) => {
    document.getElementById("pantalla").value += dato;
}

const clearScreen = () => {
    document.getElementById("pantalla").value = "";
}

const calculate = function() {
    let pantalla = document.getElementById("pantalla");
    let operation = pantalla.value;

    if (operation.indexOf(".") != -1 || /[^0-9\-+*/]/.test(operation)) {
        pantalla.value = "E";
        return;
    }

    let num1 = "";
    let num2 = "";
    let operator = "";
    for (let i = 0; i < operation.length; i++) {
        let char = operation[i];
        if ("+-*/".indexOf(char) != -1 && i != 0) {
            operator = char;
            num1 = operation.slice(0, i);
            num2 = operation.slice(i + 1);
            break;
        }
    }

    if (!num1 || !operator || !num2 || isNaN(num1) || isNaN(num2)) {
        pantalla.value = "E";
        return;
    }

    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 == 0) {
                pantalla.value = "E"; 
                return;
            }
            result = num1 / num2;
            break;
        default:
            pantalla.value = "E";
            return;
    }

    pantalla.value = result;
};


