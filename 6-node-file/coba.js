const cetakNama = (nama) =>{
    console.log(`Hi nama saya ${nama}`);
}

const PI = 3.14

const mahasiswa = {
    nama: "Dody",
    umur: 21,
    cetakNama(){return `Halo nama saya ${this.nama} dan umur saya ${this.umur} tahun`}
}

class Orang{
    constructor(){
        console.log("Objek orang berhasil dibuat")
    }
}
// cara 1
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI; 
// module.exports.mahasiswa = mahasiswa
// module.exports.Orang = Orang;

// cara 2
// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang
// }

// cara 3
module.exports = {cetakNama, PI, mahasiswa, Orang}