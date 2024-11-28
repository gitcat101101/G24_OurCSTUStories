document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    });

    const form = document.getElementById('guestBookForm');
    const entries = document.getElementById('entries');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        document.querySelectorAll('.error-message').forEach((msg) => {
            msg.textContent = '';
        });

        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const topic = document.getElementById('topic').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        if (fullName === '') {
            const nameError = document.getElementById('nameError');
            nameError.textContent = 'Full Name is required.';
            isValid = false;
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            const emailError = document.getElementById('emailError');
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (topic === '') {
            const topicError = document.getElementById('topicError');
            topicError.textContent = 'Please select a topic.';
            isValid = false;
        }

        if (message === '') {
            const messageError = document.getElementById('messageError');
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
                <p><strong>Topic:</strong> ${topic}</p>
                <p class="entry-email">${email}</p>
                <p>${message}</p>
            `;

            entry.appendChild(profile);
            entry.appendChild(textContainer);
            entries.appendChild(entry);

            form.reset();
        }
    });

    // Typewriter Animation
    const typewriter = document.querySelector('.typewriter h1');
    const text = "Step into the world of innovation and inspiration with us!";
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 100); // ความเร็วการพิมพ์ทีละตัวอักษร
        } else {
            setTimeout(() => {
                typewriter.textContent = ""; // ลบข้อความทั้งหมด
                i = 0;
                typeEffect(); // เริ่มใหม่
            }, 2000); // รอ 2 วินาทีก่อนเริ่มใหม่
        }
    }

    typeEffect(); // เรียกฟังก์ชัน Typewriter Animation
});