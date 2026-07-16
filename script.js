// Fungsi untuk pindah halaman tanpa reload
function showPage(pageId) {
    // Sembunyikan semua halaman terlebih dahulu
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active-page'));

    // Tampilkan halaman yang dipilih
    document.getElementById(pageId).classList.add('active-page');

    // Ubah status garis bawah aktif pada menu navigasi
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });
}

// Logika penanganan form registrasi
document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Untuk sementara data masuk ke log browser console
    console.log(`Pendaftaran Baru: ${name} - ${email}`);

    // Bersihkan form dan tampilkan notifikasi sukses
    document.getElementById('regForm').reset();
    document.getElementById('successMessage').classList.remove('hidden');
});
