const form = document.getElementById("appointmentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;

    message.innerHTML = `
        Appointment Booked Successfully!<br>
        <strong>${name}</strong><br>
        Doctor: <strong>${doctor}</strong><br>
        Date: <strong>${date}</strong>
    `;

    form.reset();
});