const yargs = require('yargs');
const {simpanContact} = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambah data contct baru',
    builder: {
        nama : {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        },
        email : {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        noHP : {
            describe: 'No Handphone',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        simpanContact(argv.nama, argv.email, argv.noHP)
    }
})

yargs.parse();