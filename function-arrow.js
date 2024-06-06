const masakSup = (daging) => {
    const dagingYgbisaDimasak = ['iga', 'ayam', 'sapi']
    if(dagingYgbisaDimasak.includes(daging)){
        return `Sup ini adalah sup ${daging}`;
        }
    }

console.log(masakSup('iga'));

const masakSup2 = (iga, bumbu, pedas) => `Sup ini terbuat dari ${iga} dengan bumbu ${bumbu}, yang rasanya ${pedas}`;
console.log(masakSup2('iga', 'royco', 'sangat pedas'));
