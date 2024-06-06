const readlineSync = require('readline-sync');

const dagingDimasakApa = readlineSync.question('daging mau dimasak apa?');

switch(dagingDimasakApa){
    case 'bakar':
        console.log('daging bakar');
        break;
    case 'rebus':
            console.log('daging rebus');
            break;
    case 'goreng':
            console.log('daging goreng');
            break;
    case 'panggang':
            console.log('daging panggang');
            break;    
}
