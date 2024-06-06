const readlineSync = require('readline-sync');

// Membaca input angka dari pengguna
const angka = readlineSync.question('Masukkan sebuah angka: ');

// Menampilkan bilangan ganjil dari 1 hingga angka yang dimasukkan
for (let number = 1; number <= angka; number++) {
    if (number % 2 !== 0) { // Memeriksa apakah bilangan ganjil
        console.log(number);
    }
}
