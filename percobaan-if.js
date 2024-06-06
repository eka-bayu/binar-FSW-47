const readlineSync = require('readline-sync');

const nilaiSiswa = readlineSync.question('Masukkan nilai siswa: ');
let grade;

if (nilaiSiswa == 100) {
    grade = 'A+';
}
else if (nilaiSiswa >= 90) {
    grade = 'A';
} else if (nilaiSiswa >= 80) {
    grade = 'B';
} else if (nilaiSiswa >= 70) {
    grade = 'C';
} else if (nilaiSiswa >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log(`Nilai siswa: ${nilaiSiswa}, Grade: ${grade}`);
