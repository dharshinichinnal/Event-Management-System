document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("#registrationForm");

    const resume = document.querySelector("#resume");

    const notification = document.querySelector("#notification");

    const resetBtn = document.querySelector("#resetBtn");


    // Resume upload notification

    resume.addEventListener("change", function () {

        if (resume.files.length > 0) {

            notification.style.display = "block";

            notification.textContent = "✅ Resume Uploaded Successfully";

        }

    });



    // Submit event

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        console.log("Submit button clicked");


        window.location.href = "success.html";

    });



    // Reset event

    resetBtn.addEventListener("click", function () {

        notification.style.display = "none";

        notification.textContent = "";

    });


});