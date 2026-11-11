
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value;

    formStatus.textContent =
        "Thank you, " + customerName + "! Your message has been recorded in this demo.";

    formStatus.style.color = "green";

    contactForm.reset();
});
