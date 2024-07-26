// Core Module
// File System
const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk');
const validator = require('validator');



// cek directory
const dirPath = "./data"
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}


const simpanContact = (nama, email, noHp)=>{
    const contact = {nama, email, noHp};
    const fileBuffer = fs.readFileSync('./data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    // cek nama duplikat
    const duplikat = contacts.find((contact) => contact.nama == nama);
    if(duplikat){
        console.log(
            chalk.bgRed.inverse.bold('Nama sudah ada, masukan data yang lain!')
        );
        return false;
    }

    // cek email
    if(email){
        if(!validator.isEmail(email)){
            console.log(
                chalk.bgRed.inverse.bold('Email tidak valid')
            );
            return false;
        }
    }

    if(!validator.isMobilePhone(noHp, 'id-ID')){
        console.log(
            chalk.bgRed.inverse.bold('No HP tidak valid')
        );
        return false;
    }
    contacts.push(contact);

    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts, null, 2));
    console.log("terimakasih sudah memasukan data");
}

module.exports = {
    tulisPertanyaan, simpanContact
};