document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("credit-card-form");
    const nameInput = document.getElementById("name");
    const cardNumberInput = document.getElementById("card-number");
    const expiryDateInput = document.getElementById("expiry-year");
    const securityCodeInput = document.getElementById("security-code");
    const messageContainer = document.getElementById("message-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const nameValue = nameInput.value.trim();
        const cardNumberValue = cardNumberInput.value.trim();
        const expiryDateValue = expiryDateInput.value.trim();
        const securityCodeValue = securityCodeInput.value.trim();

        let isValid = true;

        if (nameValue === "") {
            setError(nameInput, "Por favor, insira o nome no cartão");
            isValid = false;
        } else {
            setSuccess(nameInput);
        }

        if (cardNumberValue === "") {
            setError(cardNumberInput, "Por favor, insira o número do cartão");
            isValid = false;
        } else {
            setSuccess(cardNumberInput);
        }

        if (expiryDateValue === "") {
            setError(expiryDateInput, "Por favor, insira a data de vencimento");
            isValid = false;
        } else {
            setSuccess(expiryDateInput);
        }

        if (securityCodeValue === "") {
            setError(securityCodeInput, "Por favor, insira o código de segurança");
            isValid = false;
        } else {
            setSuccess(securityCodeInput);
        }

        if (isValid) {
            showMessage("success", "Cartão de crédito confirmado com sucesso!");
            form.reset();
        }
    });

    function setError(input, message) {
        input.classList.add("error");
        const errorElement = document.createElement("p");
        errorElement.classList.add("error-message");
        errorElement.innerText = message;
        input.parentNode.insertBefore(errorElement, input.nextSibling);
    }

    function setSuccess(input) {
        input.classList.remove("error");
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains("error-message")) {
            errorElement.remove();
        }
    }

    function showMessage(type, message) {
        const messageElement = document.createElement("p");
        messageElement.classList.add(type + "-message");
        messageElement.innerText = message;
        messageContainer.innerHTML = "";
        messageContainer.appendChild(messageElement);
    }
});
