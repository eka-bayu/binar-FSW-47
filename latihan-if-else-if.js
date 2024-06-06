const readlineSync = require('readline-sync');

const suhu = readlineSync.question('berapa suhu oven?');

if(suhu < 100){
    console.log('tidak panas')
} else if(suhu == 100){
    console.log('suhu panas')
}
else{
    console.log('inikah neraka???')
}