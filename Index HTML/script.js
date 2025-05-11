const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control');
const mainContent = document.querySelector('.main-content');
const themeBtn = document.querySelector('.theme-btn');

function PageTransitions() {
    // Button click active class
    sectBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            sectBtns.forEach(b => b.classList.remove('active-btn'));
            this.classList.add('active-btn');

            // Get the section ID from the clicked button's data-id attribute
            const sectionId = this.dataset.id;

            // Show the corresponding section and hide others
            sections.forEach(section => {
                section.classList.remove('active');
            });

            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Toggle theme
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
}

// Initialize
PageTransitions();
