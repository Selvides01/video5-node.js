function cetakNama(nama) {
    return `Hallo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama: 'Doddy Ferdiansyah',
    umur: 20, // tambahkan koma di sini
    cetakMhs() {
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun`;
    }
};

class Orang {
    constructor() { // tambahkan tanda kurung buka dan tutup di sini
       console.log('Objek orang telah dibuat!!');
    }
}

module.exports = { cetakNama, PI, mahasiswa, Orang };
