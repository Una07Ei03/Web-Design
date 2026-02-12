// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Index Page: Secure Upload Simulation ---
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadStatus = document.getElementById('uploadStatus');

    if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
            // Step 1: Initialize
            uploadStatus.innerText = "🔒 Initializing patent-protected encryption...";
            uploadStatus.style.color = "#2b12be";

            // Step 2: Encrypting (1 second later)
            setTimeout(() => {
                uploadStatus.innerText = "⏳ Processing data with AES-256 standards...";
            }, 1500);

            // Step 3: Success (3 seconds later)
            setTimeout(() => {
                uploadStatus.innerText = "✅ Report securely uploaded and encrypted (21 CFR Part 11 Compliant).";
                uploadStatus.style.color = "#228B22"; // Forest Green
            }, 3500);
        });
    }

    // --- 2. Contact Page: Form Submission Handling ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Prevent the actual page reload
            event.preventDefault();

            // Simulate the secure sending process
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerText;
            
            submitBtn.disabled = true;
            submitBtn.innerText = "Encrypting & Sending...";

            setTimeout(() => {
                alert("Thank you for your inquiry. Your message has been encrypted and sent to the ClinkNote Licensing Team.");
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;
                contactForm.reset(); // Clear the form fields
            }, 2000);
        });
    }
});