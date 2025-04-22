document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    let formData = new FormData(this);
    let requestData = {};
    formData.forEach((value, key) => {
        requestData[key] = value;
    });

    // Show confirmation message after submission
    alert("Booking form submitted! We will get in touch with you soon.");
});
