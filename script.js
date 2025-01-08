// Accordion Functionality
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        // Close all other accordion items
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) item.style.maxHeight = null;
        });

        // Toggle the clicked item
        content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
    });
});

// Lightbox Functionality
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', event => {
        const lightbox = document.getElementById('lightbox');
        lightbox.innerHTML = `<img src="${event.target.src}" alt="Lightbox Image">`;
        lightbox.style.display = 'flex';
    });
});
document.getElementById('lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});

// Age Verification with Cookies
document.getElementById('verify-age').addEventListener('click', () => {
	const password = document.getElementById('age-password').value;
   	if (password === 'legalAgePass123') {
       	    document.cookie = "ageVerified=true; max-age=86400"; // Valid for 1 day
            alert('Access granted!');
            window.location.href = '#sexual-diary';
       } else {
            alert('Incorrect password. Access denied.');
       }
});

// Check for Age Verification Cookie
window.onload = () => {
    if (document.cookie.includes('ageVerified=true')) {
        alert('Welcome back! Age verification remembered.');
    }
};

// Age Confirmation Modal
document.getElementById('confirm-age').addEventListener('click', () => {
    document.cookie = "ageVerified=true; max-age=86400";
    document.getElementById('warning-modal').style.display = 'none';
});  
