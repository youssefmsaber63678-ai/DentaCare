// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });

});


// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


// ================= DOCTOR BUTTON =================

const doctorButtons = document.querySelectorAll(".doctor-btn");

doctorButtons.forEach(button => {

    button.addEventListener("click", () => {

        const doctor = button.dataset.doctor;

        document.getElementById("doctor").value = doctor;

        document
            .getElementById("booking")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// ================= SERVICE BUTTON =================

const serviceButtons = document.querySelectorAll(".book-service");

serviceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const service = button.dataset.service;

        document.getElementById("service").value = service;

        document
            .getElementById("booking")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// ================= BOOKING =================

const bookingForm = document.getElementById("bookingForm");

const bookingSuccess =
    document.getElementById("bookingSuccess");

const appointmentDetails =
    document.getElementById("appointmentDetails");

bookingForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("patientName").value;

    const phone =
        document.getElementById("phone").value;

    const doctor =
        document.getElementById("doctor").value;

    const service =
        document.getElementById("service").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;


    appointmentDetails.innerHTML = `
        Thank you <strong>${name}</strong>.<br><br>

        Doctor: <strong>${doctor}</strong><br>
        Service: <strong>${service}</strong><br>
        Date: <strong>${date}</strong><br>
        Time: <strong>${time}</strong><br>
        Phone: <strong>${phone}</strong>
    `;


    bookingForm.style.display = "none";

    bookingSuccess.classList.add("show");

    localStorage.setItem(
        "dentaCareAppointment",
        JSON.stringify({
            name,
            phone,
            doctor,
            service,
            date,
            time
        })
    );

});


// ================= NEW BOOKING =================

const newBooking =
    document.getElementById("newBooking");

newBooking.addEventListener("click", () => {

    bookingForm.reset();

    bookingForm.style.display = "grid";

    bookingSuccess.classList.remove("show");

});


// ================= FAQ =================

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector("button");

    button.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});


// ================= BEFORE / AFTER =================

const comparisonSlider =
    document.getElementById("comparisonSlider");

const before =
    document.querySelector(".before");

const sliderLine =
    document.getElementById("sliderLine");

comparisonSlider.addEventListener("input", () => {

    const value = comparisonSlider.value;

    before.style.width = `${value}%`;

    sliderLine.style.left = `${value}%`;

});


// ================= DATE =================

const dateInput =
    document.getElementById("date");

const today =
    new Date().toISOString().split("T")[0];

dateInput.min = today;