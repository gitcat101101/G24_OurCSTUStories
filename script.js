document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guestBookForm');
    const entries = document.getElementById('entries');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        document.querySelectorAll('.error-message').forEach((msg) => {
            msg.style.display = 'none';
        });

        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        if (fullName === '') {
            const nameError = document.getElementById('nameError');
            nameError.style.display = 'block';
            nameError.textContent = 'Full Name is required.';
            isValid = false;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            const emailError = document.getElementById('emailError');
            emailError.style.display = 'block';
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (message === '') {
            const messageError = document.getElementById('messageError');
            messageError.style.display = 'block';
            messageError.textContent = 'Message cannot be empty.';
            isValid = false;
        }

        if (isValid) {
            const entry = document.createElement('div');
            entry.className = 'entry-item';

            
            const profile = document.createElement('div');
            profile.className = 'entry-profile';
            profile.textContent = fullName[0].toUpperCase(); 

           
            const textContainer = document.createElement('div');
            textContainer.className = 'entry-text';
            textContainer.innerHTML = `
                <h3>${fullName}</h3>
                <p class="entry-email">${email}</p> <!-- แสดงอีเมล -->
                <p>${message}</p>
            `;

            entry.appendChild(profile);
            entry.appendChild(textContainer);
            entries.appendChild(entry);

            form.reset();
        }

    });
});
