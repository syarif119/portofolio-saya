// Ambil elemen yang dibutuhkan
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

// Saat tombol burger diklik
menuToggle.addEventListener('click', function() {
    // Tambahkan class 'slide' ke menu (agar muncul/hilang)
    nav.classList.toggle('slide');
    
    // Tambahkan class 'active' ke tombol (agar berubah jadi X)
    menuToggle.classList.toggle('active');
});