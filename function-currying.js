function masakSup(daging){
    const dagingYgbisaDimasak = ['iga', 'ayam', 'sapi']
    if(dagingYgbisaDimasak.includes(daging)){
        return function(bumbu){
            return function(pedas){
                return `sup ${daging} dengan ${bumbu} yang sangat ${pedas}`
                }
            };
        }
    }

console.log(masakSup('iga')('kari')('pedas'))