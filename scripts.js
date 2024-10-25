// Message submission confirmation
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from actually submitting

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (name && message) {
        alert(`Thank you, ${name}! Your message for Mr. Coffey has been sent.`);
        // Optionally, clear the form after submission
        document.getElementById("name").value = '';
        document.getElementById("message").value = '';
    } else {
        alert("Please fill out both fields before submitting.");
    }
});
