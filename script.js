/**
 * ClinkNote Project - Main Script
 * Handles responsive navigation, secure file upload simulation, and contact form submission.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. NAVIGATION: HAMBURGER MENU LOGIC --- */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // Toggle the visibility of the mobile menu
            navMenu.classList.toggle('active');
        });
    }

    /* --- 2. INDEX PAGE: SECURE FILE SELECTION --- */
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadStatus = document.getElementById('uploadStatus');
    const fileInput = document.getElementById('fileInput');

    if (uploadBtn && fileInput) {
        uploadBtn.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', () => {
            const fileCount = fileInput.files.length;
            if (fileCount > 0) {
                // Emoji icons provide visual feedback for the user
                uploadStatus.innerText = `🔒 ${fileCount} files selected. Initializing protection...`;
                
                setTimeout(() => {
                    uploadStatus.innerText = `⏳ Batch encrypting ${fileCount} files (AES-256)...`;
                }, 1500);

                setTimeout(() => {
                    uploadStatus.innerText = `✅ Success: ${fileCount} reports securely uploaded.`;
                    uploadStatus.classList.add('success-text'); 
                }, 3500);
            }
        });
    }

    /* --- 3. CONTACT PAGE: FORM SUBMISSION --- */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const submitBtn = contactForm.querySelector('.submit-btn');
            
            submitBtn.disabled = true;
            submitBtn.innerText = "Encrypting & Sending...";

            setTimeout(() => {
                // Standard browser alert for confirmation
                alert("Message sent securely to the ClinkNote Licensing Team.");
                submitBtn.disabled = false;
                submitBtn.innerText = "Send Message";
                contactForm.reset();
            }, 2000);
        });
    }
});