const readlineSync = require('readline-sync');

const jumlahBaris = readlineSync.question('Masukkan jumlah baris: ');

for (let i = 1; i <= jumlahBaris; i++) {
    let barisBintang = '';
    for (let j = 1; j <= i; j++) {
        barisBintang += '*';
    }
    console.log(barisBintang);
}
