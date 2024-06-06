const name = 'eka';
const pekerjaan = 'fullstack developer';

const pesan = `Hallo nama aku ${name}, aku bekerja sebagai ${pekerjaan}`;

console.log(pesan.replace('Hallo', 'Hi'));

console.log(pesan.substring(0,4));

console.log(pesan.toLocaleLowerCase());

console.log(pesan.toUpperCase());

const pesanDenganSpasi = `   Hallo nama aku ${name}, aku bekerja sebagai ${pekerjaan}`;

console.log(pesanDenganSpasi.trim());

console.log(pesanDenganSpasi.length);

console.log(pesanDenganSpasi.slice(0, 23));
