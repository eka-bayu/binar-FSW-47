function racikBumbu(bumbu){
    const bumbuYgbisaDiracik = ['kari', 'asam-manis', 'miso'];
    return bumbuYgbisaDiracik.includes(bumbu.toLowerCase());
}

function periksaDaging(daging){
    const dagingYgbisaDimasak = ['ikan', 'ayam','sapi'];
    return dagingYgbisaDimasak.includes(daging.toLowerCase());
}

function periksaLevel(pedas){
    return `cek level pedas: ${pedas}`
}

function masakSup(daging, bumbu, pedas){
    if(periksaDaging(daging)){
        if(racikBumbu(bumbu)){
            console.log(periksaLevel(pedas));
            return `Sup ${daging} nikmat dengan ${bumbu} level ${pedas}`
        }
    }
}

console.log(masakSup('sapi', 'kari', 'tidak pedas'));