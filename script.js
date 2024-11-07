const genPassSpan = document.getElementById('show-password-span')
const inputLength = document.getElementById('char-length-bar')
const uppercaseOption = document.getElementById('uppercaseOption')
const lowercaseOption = document.getElementById('lowercaseOption')
const numbersOption = document.getElementById('numbersOption')
const symbolsOption = document.getElementById('symbolsOption')
const buttonGen = document.getElementById('generate-pass-button')
const ShowPassDiv = document.getElementById('show-password')
const copyPassDiv = document.getElementById('copy-password')
const copyPassButton = document.getElementById('copy-password-icon')
const passStrengthImg = document.getElementById('pass-strength-level')

function errorStyles() {
    genPassSpan.style.color = 'red'
    genPassSpan.style.fontWeight = 'bold'
    copyPassDiv.style.display = 'none'
    ShowPassDiv.style.width = '100%'
    passStrengthImg.src = "images/password_strength_level_0.jpg"
}

function correctPassStyles() {
    genPassSpan.style.color = '#91e40d'
    genPassSpan.style.fontWeight = 'bold'
    genPassSpan.style.letterSpacing = '1px'
    copyPassDiv.style.display = 'initial'
    passStrengthImg.src = "images/password_strength_level_1.jpg"
}

function generateRandomPasword() {
    const charLength = Number(inputLength.value)
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const symbols = "!#$%&=?¿¡+*-_@-"
    let combinations = ""
    let generatedPassword = ""
    if (uppercaseOption.checked) {
        combinations = combinations + upperCase
    }
    if (lowercaseOption.checked) {
        combinations = combinations + lowerCase
    }
    if (numbersOption.checked) {
        combinations = combinations + numbers
    }
    if (symbolsOption.checked) {
        combinations = combinations + symbols
    }
    for (let i = 0; i < charLength; i++) {
        const random = Math.random()
        const randomNumber = Math.floor(random * combinations.length)
        generatedPassword += combinations[randomNumber]
    }
    if (Number(inputLength.value) < 8 && !uppercaseOption.checked && !lowercaseOption.checked && !numbersOption.checked && !symbolsOption.checked) {
        generatedPassword = "You must select at least 1) 8 characters for password length; and 2) one option from the checkboxes."
        errorStyles()
    } else if (Number(inputLength.value) >= 8 && !uppercaseOption.checked && !lowercaseOption.checked && !numbersOption.checked && !symbolsOption.checked) {
        generatedPassword = "You must select at least one option from the checkboxes."
        errorStyles()
    } else if (Number(inputLength.value) < 8) {
        generatedPassword = "You must select at least 8 characters for password length."
        errorStyles()
    } else if (Number(inputLength.value) >= 8 && (uppercaseOption.checked || lowercaseOption.checked || numbersOption.checked || symbolsOption.checked)) {
        correctPassStyles()
    }
    genPassSpan.innerText = generatedPassword
}

buttonGen.addEventListener('click', generateRandomPasword)