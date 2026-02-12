// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Index Page: Secure File Selection & Encryption Simulation ---
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadStatus = document.getElementById('uploadStatus');
    const fileInput = document.getElementById('fileInput');

    if (uploadBtn && fileInput) {
    
        // Trigger the hidden file input when the styled button is clicked
    uploadBtn.addEventListener('click', () => {
        fileInput.click();
    });

    // Handle the file selection event for multiple files
    fileInput.addEventListener('change', () => {
    const fileCount = fileInput.files.length; // Get the number of files selected

    if (fileCount > 0) {
        // Step 1: Show the number of files being processed
        uploadStatus.innerText = `🔒 ${fileCount} files selected. Initializing multi-layer patent protection...`;
        uploadStatus.style.color = "#2b12be";

        // Step 2: Encrypting (simulating batch processing)
        setTimeout(() => {
            uploadStatus.innerText = `⏳ Batch encrypting ${fileCount} files with AES-256 standards...`;
        }, 1500);

        // Step 3: Success
        setTimeout(() => {
            uploadStatus.innerText = `✅ All ${fileCount} reports securely uploaded (21 CFR Part 11 Compliant).`;
            uploadStatus.style.color = "#228B22"; 
        }, 3500);
    }
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