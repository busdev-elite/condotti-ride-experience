// Fungsi untuk pindah halaman tanpa reload
function showPage(pageId) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active-page'));

    // Tunjukkan halaman yang dipilih
    document.getElementById(pageId).classList.add('active-page');

    // Ubah status aktif pada menu navigasi
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });
}

// Logika Form Registrasi
document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil data input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Di sini Anda bisa menyambungkan ke Google Sheets / Email Sender nanti.
    console.log(`Pendaftaran: ${name} - ${email}`);

    // Tampilkan pesan sukses
    document.getElementById('regForm').reset();
    document.getElementById('successMessage').classList.remove('hidden');
});
