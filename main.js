// Toggle Icon Navbar (Hamburger Menu)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Ubah ikon jadi 'X'
    navbar.classList.toggle('active'); // Tampilkan menu
};

// Tutup menu saat link diklik (Scroll sections)
let navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});

// Typed JS (Efek Mengetik)
const typed = new Typed('.text', {
    strings: ['Frontend Developer', 'Student', 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});