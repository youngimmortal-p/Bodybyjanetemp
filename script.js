    
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Recent sign-up popup every 8 seconds
        const names = ['Amara', 'Tolu', 'Blessing', 'Chioma', 'Ada', 'Kemi', 'Fola', 'Zara'];
        const programs = ['Absolute Meals Challenge', '10K Steps Batch', '1-on-1 Mentorship'];
        const popup = document.getElementById('popup');

        function showPopup() {
            const name = names[Math.floor(Math.random() * names.length)];
            const program = programs[Math.floor(Math.random() * programs.length)];
            popup.querySelector('p').textContent = `${name} just joined`;
            popup.querySelector('p + p').textContent = `${program} • just now`;
            popup.classList.add('show');
            setTimeout(() => popup.classList.remove('show'), 4000);
        }

        setTimeout(showPopup, 3000);
        setInterval(showPopup, 8000);