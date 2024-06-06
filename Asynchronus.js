function perkalian (a, b){
    return a * b;
}

function hitungLuaskotak(n){
    return perkalian(n, n);
}

function HasilLuasKotak(n){
    var luasKotak = hitungLuaskotak(n);
    console.log(luasKotak);
}
HasilLuasKotak(6);