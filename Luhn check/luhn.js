function luhnCheck(cardNumber) {
    let sum = 0;
    let doubleDigit = false;

    for(let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i], 10);

        if (isNaN(digit)) continue;

        if (doubleDigit) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        doubleDigit = !doubleDigit;
    }
    return sum % 10 === 0;
}

function validateForm() {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let card = document.getElementById("card").value.trim();
    let result = document.getElementById("result");

    if (name === "" || card === "") {
        alert("Please fill in all fields.");
        return false;
    }
    if(luhnCheck(card)) {
        result.textContent ="Card number is valid.";
        result.className = "valid";
        return true;
    } else {
        result.textContent = "Card number is invalid.";
        result.className = "invalid";
        return false;
    }
}