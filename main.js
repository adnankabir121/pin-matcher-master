//Generate PIN
const generatePinBtn = document.getElementById('generate-pin-btn');
const pinGeneratorField = document.getElementById('pin-generator-field');

function generatePin(id) {
    let number = Math.random() * 9999;
    number = Math.round(number);

    if (number >= 1000 && number <= 9999) {
        number.toString();
        id.value = number;
    }
}
generatePinBtn.addEventListener('click', function () {

    generatePin(pinGeneratorField);
});

// Submiting PIN
const submitField = document.getElementById('submit-field');

function setButtonValue(id) {
    let buttonValue = id.innerText;
    let submitFieldValue = submitField.value;
    let finalValue = submitFieldValue + buttonValue;
    submitField.value = finalValue;
}

//All Button
const one = document.getElementById('one');
one.addEventListener('click', function () {
    setButtonValue(one);
});

const two = document.getElementById('two');
two.addEventListener('click', function () {
    setButtonValue(two);
});

const three = document.getElementById('three');
three.addEventListener('click', function () {
    setButtonValue(three);
});

const four = document.getElementById('four');
four.addEventListener('click', function () {
    setButtonValue(four);
});

const five = document.getElementById('five');
five.addEventListener('click', function () {
    setButtonValue(five);
});

const six = document.getElementById('six');
six.addEventListener('click', function () {
    setButtonValue(six);
});

const seven = document.getElementById('seven');
seven.addEventListener('click', function () {
    setButtonValue(seven);
});

const eight = document.getElementById('eight');
eight.addEventListener('click', function () {
    setButtonValue(eight);
});

const nine = document.getElementById('nine');
nine.addEventListener('click', function () {
    setButtonValue(nine);
});

const zero = document.getElementById('zero');
zero.addEventListener('click', function () {
    setButtonValue(zero);
});

//Angle Button
const angle = document.getElementById('angle');
angle.addEventListener('click', function () {
    let submitFieldValue = submitField.value;
    let sliced = submitFieldValue.slice(0,-1);
    submitField.value = sliced;
});

//Clear Button
const clear = document.getElementById('clear');
clear.addEventListener('click', function () {
    submitField.value = "";
});


//Submit Button
const submitButton = document.getElementById('submit-btn');
const pinMatched = document.getElementById('pin-matched');
const pinNotMatched = document.getElementById('pin-not-matched');

submitButton.addEventListener('click', function () {
    const tryCount = document.getElementById('try-count');
    const noTry = document.getElementById('no-try');
    let tryCountValue = parseInt(tryCount.innerText);

    if (pinGeneratorField.value === submitField.value) {
        pinNotMatched.style.display = "none";
        pinMatched.style.display = "block";
    } else {
        tryCountValue = tryCountValue - 1;
        if (tryCountValue == 0) {
            submitButton.style.display = "none";
            noTry.style.display = "none";
        } else {
            tryCountValue.toString();
            tryCount.innerText = tryCountValue;
        }
        pinMatched.style.display = "none";
        pinNotMatched.style.display = "block";
    }
});