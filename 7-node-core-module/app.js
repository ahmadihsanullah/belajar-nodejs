const {tulisPertanyaan, simpanData} = require('./contacts');

const main = async ()=>{
    const nama = await tulisPertanyaan("Masukan nama anda : ");
    const email = await tulisPertanyaan("Masukan email anda : ");
    const noHp = await tulisPertanyaan("Masukan no hp anda : ");
    
   simpanData(nama, email, noHp);
}

main();

















