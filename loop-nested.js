const readlineSync = require('readline-sync');

const berapaLantai = readlineSync.question('mau ngepel lantai berapa?');
const berapaRuanganTiaplantai = readlineSync.question('berapa ruangan tiap lantai?');

for(lantai = 1; lantai <= berapaLantai; lantai++){
    console.log(lantai);
    console.log(`lagi ngepel lantai ${lantai}`);

    for(ruangan = 1; ruangan <= berapaRuanganTiaplantai; ruangan++){
        console.log(ruangan);
        console.log(`lagi ngepel ruang ${ruangan} di lantai ${lantai}`)
    }
}