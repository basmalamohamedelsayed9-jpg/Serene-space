let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let userNameInput = document.querySelector(".inName");
    let userNameValue = userNameInput.value;
    let userName = userNameValue.trim();
    let userNameRegex = /^[A-Z][a-z]{3,10}$/;
    let isUserNameValid = userNameRegex.test(userName);

    let emailInput = document.querySelector(".inEmail");
    let emailValue = emailInput.value;
    let email = emailValue.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isEmailValid = emailRegex.test(email);

    if (isUserNameValid && isEmailValid) {
        window.location.href = "index.html";
    } else {
        alert("Please enter valid data.");
    }
});