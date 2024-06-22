const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

function toggleMobileMenu() {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
}

btn.addEventListener('click', () => {
    toggleMobileMenu();
})

function scrollToSection(section) {
    var menuElement = document.querySelector('#menu');
    if (menuElement && !menuElement.classList.contains('hidden')) {
        toggleMobileMenu();
    }

    window.location.href = section;
};

document.getElementById('program-btn').addEventListener('click', () => {
    scrollToSection("#program");
})

document.getElementById('park-btn').addEventListener('click', () => {
    scrollToSection("#park");
})

document.getElementById('gifts-btn').addEventListener('click', () => {
    scrollToSection("#gifts");
})

document.getElementById('acc-btn').addEventListener('click', () => {
    scrollToSection("#acc");
})

document.getElementById('rsvp-btn').addEventListener('click', () => {
    scrollToSection("#rsvp");
})