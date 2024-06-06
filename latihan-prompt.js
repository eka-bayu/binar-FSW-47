var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!')

const umur = readlineSync.question('berapa umur kalian?');

if(umur > 18){
    console.log('sudah cukup umur');
    }else{
        console.log('belum cukup umur');
}
