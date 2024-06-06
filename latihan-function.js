function sayHiTo(name){
    let halo = `Hai ${name.toUpperCase()}`
    return halo
}

let test1 = sayHiTo("Everything")
console.log(test1)

let test2 = sayHiTo("100")
console.log(test2)

/*testDoang();
function testDoang(){
    console.log('it works');
};*/

/*const testDoang2 = function(){
    console.log('it works');
}
testDoang2();

function masakSup(){
    return 'supIga'
}

const masakan = masakSup();
console.log(masakan);
console.log(masakSup());*/

/*const testDoang2 = function(){
    console.log('it works');
}
testDoang2();

function masakSup(daging){
    return `Sup ${daging}`
}

console.log(masakSup('iga'));
console.log(masakSup('ayam'));*/


console.log(masakSup('iga'));
console.log(masakSup('ayam'));
console.log(masakSup('ibab'));

function masakSup(daging){
    const dagingYgbisaDimasak = ['iga', 'ayam', 'sapi']
    if(dagingYgbisaDimasak.includes(daging)){
        return `Sup ${daging}`;
    }
    }

