// Core Module
// File System
const fs = require('node:fs');

// menuliskan string ke file (Synchronous) 
// try{
//     fs.writeFileSync('data/test.txt', "Hello World dengan Synchronous!")
// }catch(e){
//     console.log(e)
// }

// menulikan string ke file (asynchronous)
// fs.writeFile('data/test.txt',"Hello world dengan asychronous", (e)=>{
//     console.log(e);
// })

// membaca file dengan synchronous
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data)

// membaca file dengan synchronous
// const data = fs.readFile('data/test.txt','utf-8',(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addContact() {
    rl.question("Masukan nama anda: ", (nama) => {
        rl.question("Masukan no hp anda: ", (noHp) => {
            const contact = { nama, noHp };
            const fileBuffer = fs.readFileSync("data/contacts.json", "utf8");
            const contacts = JSON.parse(fileBuffer);
            contacts.push(contact);
            
            fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null,2));

            console.log("Kontak berhasil ditambahkan!");
            // Tanya user apakah ingin menambah kontak lagi
            rl.question("Apakah anda ingin menambahkan kontak lagi? (yes/no): ", (answer) => {
                if (answer.toLowerCase() === 'yes') {
                    addContact();
                } else {
                    rl.close();
                }
            });
        });
    });
}

addContact();















