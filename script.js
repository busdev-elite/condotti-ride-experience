// Fungsi untuk pindah halaman tanpa reload
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active-page'));

    document.getElementById(pageId).classList.add('active-page');

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });
}

// Logika kirim data ke Google Sheets
document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Mengubah teks tombol saat loading
    const submitBtn = this.querySelector('button');
    submitBtn.innerText = "Processing...";
    submitBtn.disabled = true;

    // Ambil data dari input formulir
    const dataRegistrasi = {
        nama: document.getElementById('name').value,
        whatsapp: document.getElementById('whatsapp').value,
        instagram: document.getElementById('instagram').value
    };

    // GANTI DENGAN URL GOOGLE APPS SCRIPT ANDA
    const urlGoogleSheets = "https://script.google.com/macros/s/AKfycbyi9qxmTF5dx3vNgK6hcgLKWn6PzBygfMkH_z-fE0xtKQJ9w1SwOVTrLITgnip-Lsd3/exec";

    fetch(urlGoogleSheets, {
        method: 'POST',
        mode: 'no-cors', // Mencegah error CORS pada GitHub Pages gratisan
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataRegistrasi)
    })
    .then(() => {
        // Tampilkan notifikasi sukses
        document.getElementById('regForm').reset();
        document.getElementById('successMessage').classList.remove('hidden');
        
        submitBtn.innerText = "Register Now";
        submitBtn.disabled = false;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan, silakan coba lagi.');
        submitBtn.innerText = "Register Now";
        submitBtn.disabled = false;
    });
});
