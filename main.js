let countdown;

function validateEmail() {
    let email = document.getElementById("email");
    let numbers = /^[A-Za-z0-9.]+@(sji.edu.sg)$/;
    document.getElementById("emailError").innerHTML = "";

    if (email.value.match(numbers)) {
        document.querySelector("#first").style.border = "solid green";
        return true;
    } else {
        document.querySelector("#first").style.border = "solid red";
        document.getElementById("emailError").innerHTML = "[Email must end with '@sji.edu.sg']";
        email.focus();
        return false;
    }
}

function validateCheckbox() {
    let checkbox = document.querySelector("#tnc");
    let checkboxError = document.querySelector("#checkboxError");
    checkboxError.innerHTML = "";

    if (checkbox.checked) {
        return true;
    } else {
        checkboxError.innerHTML = "To proceed, please agree to the Terms and Conditions";
        return false
    }
}


function formValidation() {
    let counter = 0;
    if (validateEmail()) {
        counter += 1;
    }
    if (validateCheckbox()) {
        counter += 1;
    }
    if (counter == 2) {
        scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
        countdown = setInterval(function () {
            scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
            });
        }, 1000);
        return true;
        // document.querySelector("#submit-form").click();
    } else {
        return false;
    }
}





function wrongPin() {
    document.querySelector("#second").style.border = "solid red";
}

function aftPin() {
    clearInterval(countdown);
    scrollTo({
        top: 2 * window.innerHeight,
        behavior: "smooth",
    });
    countdown = setInterval(function () {
        scrollTo({
            top: 2 * window.innerHeight,
            behavior: "smooth",
        });
    }, 1000);
    document.getElementById("emailError").innerHTML = "";
    document.querySelector("#first").style.border = "solid black";
}





function retryValidateEmail() {
    let email = document.getElementById("retryEmail");
    let numbers = /^[A-Za-z0-9.]+@(sji.edu.sg)$/;
    document.getElementById("retryEmailError").innerHTML = "";

    if (email.value.match(numbers)) {
        document.querySelector("#retryField").style.border = "solid green";
        return true;
    } else {
        document.querySelector("#retryField").style.border = "solid red";
        document.getElementById("retryEmailError").innerHTML = "[Email must end with '@sji.edu.sg']";
        email.focus();
        return false;
    }
}

function retryValidateCheckbox() {
    let checkbox = document.querySelector("#retrytnc");
    let checkboxError = document.querySelector("#retryCheckboxError");
    checkboxError.innerHTML = "";

    if (checkbox.checked) {
        return true;
    } else {
        checkboxError.innerHTML = "To proceed, please agree to the Terms and Conditions";
        return false
    }
}


function retryFormValidation() {
    let counter = 0;
    if (retryValidateEmail()) {
        counter += 1;
    }
    if (retryValidateCheckbox()) {
        counter += 1;
    }
    if (counter == 2) {
        clearInterval(countdown);
        scrollTo({
            top: 3 * window.innerHeight,
            behavior: "smooth",
        });
        countdown = setInterval(function () {
            scrollTo({
                top: 3 * window.innerHeight,
                behavior: "smooth",
            });
        }, 500);
        document.querySelector("#retrySubmit-form").click();
        document.querySelector("#downloadZip").click();
        return true;
    } else {
        return false;
    }
}

function changeImg(direction) {
    let img = document.querySelector("#instructionImg");
    let imgNo = parseInt(img.alt);
    if (direction == "prev" && imgNo > 1) {
        imgNo -= 1;
        img.src = "./Media/instructions" + imgNo.toString() + ".png";
        img.alt = imgNo.toString();
    } else if (direction == "next" && imgNo < 19) {
        imgNo += 1;
        img.src = "./Media/instructions" + imgNo.toString() + ".png";
        img.alt = imgNo.toString();
    }

    if (imgNo == 1) {
        document.querySelector("#prevImg").style.opacity = "0";
        document.querySelector("#prevImg").style.cursor = "default";
    } else {
        document.querySelector("#prevImg").style.opacity = "1";
        document.querySelector("#prevImg").style.cursor = "pointer";
    }
    if (imgNo == 19) {
        document.querySelector("#nextImg").style.opacity = "0";
        document.querySelector("#nextImg").style.cursor = "default";
    } else {
        document.querySelector("#nextImg").style.opacity = "1";
        document.querySelector("#nextImg").style.cursor = "pointer";
    }
}