//Header and Footer ------------------>
const h1Container = document.getElementById("h1");
const header = document.getElementById("header");
const pFooter = document.getElementById("footer");
const date = document.getElementById("date");
//Animations-->
const animationsHeader = [
  {transform: "translateY(-100%)"},
  {transform: "translateY(0)"},
];
const animationsFooter = [
  {transform: "translateY(100%)"},
  {transform: "translateY(0)"},
];
const animationsTiming = {
  duration: 800,
  iteration: 1,
  easing: "ease-out",
};
let newDate = new Date();
date.innerText = newDate.getFullYear();

header.addEventListener("animationend", () => {
  h1Container.classList.remove("hidden");
  pFooter.classList.remove("hidden");
  h1Container.animate(animationsHeader, animationsTiming);
  pFooter.animate(animationsFooter, animationsTiming);
});
//OLD CODE FOR ANOTHER PURPOSE:
// setTimeout(function () {
//     spanElement.forEach(function (element, index) {
//         setTimeout(function () {
//             element.classList.remove('hidden');
//             element.animate(animations, animationsTiming);
//         }, 400 * index);
//     })
// }, 500)

//Remember this is equal to write.
// spanElement.forEach((element, index) => {
//     setTimeout(() => {
//         some code.
//     }, index*1000);
// });

// <-------------------------End

//Main ->>>>>>>>>>>>>>>>>>>>>>
const record = document.getElementById("record");
const currentText = document.getElementById("current");
const lowerPart = document.getElementById('lowerPart');
const upperpart = document.getElementById('upperpart');
const main = document.getElementById('Container');

//Buttons->
const Cbtn = document.getElementById("Cbtn");
const CEbtn = document.getElementById("CEbtn");
const ParentesisBtn = document.getElementById("ParentesisBtn");

const deleteBtn = document.getElementById("deleteBtn");
const squareBtn = document.getElementById("squareBtn");
const rootBtn = document.getElementById("rootBtn");
const plusMinusBtn = document.getElementById("plusMinusBtn");

const divideBtn = document.getElementById("divideBtn");
const mulBtn = document.getElementById("mulBtn");
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");

const dotBtn = document.getElementById("dotBtn");
const equalBtn = document.getElementById("equalBtn");

//Animation.
const calcMovement = [
    { transform: 'translateX(-1000%)' },
    {transform: 'translateX(0%)'}
];
const calcTime = {
    duration: 1000,
    iteration: 1,
    easing: "ease-out",
}
setTimeout(function () {
    main.classList.remove("hidden2");
    main.animate(calcMovement, calcTime);
}, 4000)


//Operands.
let operand1;
let operand2;
let firstType = true;
let bracketsOpen = false;
let secondCalcul = false;
let secondOperand = false;
let op;

deleteBtn.onclick = () => {
    if (currentText.innerText.length > 0) {
        currentText.innerText = currentText.innerText.slice(0, currentText.innerText.length - 1);
        if (currentText.innerText.length == 0) {
            currentText.innerText = 0;
            firstType = true;
        }
    }
};
plusMinusBtn.onclick = () => {
    if (parseFloat(currentText.innerText) > 0) {
        currentText.innerText = '-' + currentText.innerText;
        operand1 = operand1 * -1;
    }
    else if(currentText.innerText == '0') {
        currentText.innerText = currentText.innerText;
    }
    else {
        currentText.innerText = currentText.innerText.slice(1, currentText.innerText.length);
    }
};
rootBtn.onclick = () => {
    if (current.innerText !== '0') {
        currentText.innerText = Math.sqrt(parseFloat(currentText.innerText)).toPrecision(17);
    }
};
squareBtn.onclick = () => {
    currentText.innerText = (parseFloat(currentText.innerText)) * (parseFloat(currentText.innerText));
};
dotBtn.onclick = () => {
    currentText.innerText += '.';
};
CEbtn.onclick = () => {
    if (secondOperand) {
        currentText.innerText = '0';
    }
    else {
        currentText.innerText = '0';
        operand1 = 0;
    }
}
Cbtn.onclick = () => {
    currentText.innerText = '0';
    record.innerText = '';
    operand1 = 0;
    firstType = true;
    secondOperand = false;
    secondCalcul = false;
    operand2 = 0;
};
ParentesisBtn.onclick = () => {
    if (!bracketsOpen) {
        currentText.innerText += '(';
        bracketsOpen = true;
    }
    else {
        currentText.innerText += ')';
        bracketsOpen = false;
    }
}

divideBtn.onclick = () => { 
    operand1 = parseFloat(currentText.innerText);
    record.innerText = currentText.innerText + ' ' + "\u00F7";
    firstType = true;
    secondOperand = true;
    secondCalcul = false;
    op = 3;
}
mulBtn.onclick = () => {
    operand1 = parseFloat(currentText.innerText);
    record.innerText = currentText.innerText + ' ' + 'x';
    firstType = true;
    secondOperand = true;
    secondCalcul = false;
    op = 2;
}
minusBtn.onclick = () => {
    operand1 = parseFloat(currentText.innerText);
    record.innerText = currentText.innerText + ' ' + '-';
    firstType = true;
    secondOperand = true;
    secondCalcul = false;
    op = 1;
}
plusBtn.onclick = () => {
    operand1 = parseFloat(currentText.innerText);
    record.innerText = currentText.innerText + ' ' + '+';
    firstType = true;
    secondOperand = true;
    secondCalcul = false;
    op = 0;
}

equalBtn.onclick = () => {
    if (op == 0) {
        if (secondCalcul) {
            record.innerText = operand1 + ' + ' + operand2 + ' =';
        }
        else {
            operand2 = parseFloat(currentText.innerText);
            record.innerText += ' ' + currentText.innerText + ' =';
        }
        operand1 = operand1 + operand2;
        currentText.innerText = operand1;
    }
    else if (op == 1) {
        if (secondCalcul) {
            record.innerText = operand1 + ' - ' + operand2 + ' =';
        }
        else {
            operand2 = parseFloat(currentText.innerText);
            record.innerText += ' ' + currentText.innerText + ' =';
        }
        operand1 = operand1 - operand2;
        currentText.innerText = operand1;
    }
    else if (op == 2) {
        if (secondCalcul) {
            record.innerText = operand1 + ' x ' + operand2 + ' =';
        }
        else {
            operand2 = parseFloat(currentText.innerText);
            record.innerText += ' ' + currentText.innerText + ' =';
        }
        operand1 = (operand1 * operand2);
        currentText.innerText = operand1;
    }
    else if(op == 3) {
        if (secondCalcul) {
            record.innerText = operand1 + "\u00F7" + operand2 + ' =';
        }
        else {
            operand2 = parseFloat(currentText.innerText);
            record.innerText += ' ' + currentText.innerText + ' =';
        }
        operand1 = (operand1 / operand2);
        currentText.innerText = operand1;
    }
    else {
        record.innerText = currentText.innerText + ' =';
        operand1 = parseFloat(currentText.innerText);
    }
    secondCalcul = true;
    firstType = true;
    let aux = operand1.toString();
    if (aux.length >= 15) {
        lowerPart.style.fontSize = '2.6rem';
        upperpart.style.fontSize = '2rem';
    }
}

function numpad(value) {
    if (currentText.innerText.length < 17) {
        if (firstType) {
            currentText.innerText = value;
            firstType = false;
        }
        else if (currentText.innerText == '0') {
            currentText.innerText = value;
        }
        else
        {
            currentText.innerText += value;
        }
    }
}
