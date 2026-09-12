const form = document.getElementById("formPemesanan");
const dataPelanggan = document.getElementById("dataPelanggan");

let nomor = 1;

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telepon = document.getElementById("telepon").value;
    const produk = document.getElementById("produk").value;
    const jumlah = document.getElementById("jumlah").value;
    const alamat = document.getElementById("alamat").value;

    const baris = document.createElement("tr");

    baris.innerHTML = `
        <td>${nomor}</td>
        <td>${nama}</td>
        <td>${email}</td>
        <td>${telepon}</td>
        <td>${produk}</td>
        <td>${jumlah}</td>
        <td>${alamat}</td>
    `;

    dataPelanggan.appendChild(baris);

    nomor++;

    form.reset();

    alert("Data pelanggan berhasil ditambahkan!");

    document.getElementById("hasilPesanan").scrollIntoView({
        behavior: "smooth"
    });
});