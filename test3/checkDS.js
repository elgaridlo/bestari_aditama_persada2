const checkDuplikatDanSusun = (arr) => {

    let angkaDuplikat = checkDuplikat(arr);

    // arr.sort((a,b) => b-a)
    // Untuk mengurutkan dari kecil ke besar 
    for (let i = 1; i < angkaDuplikat.length; i++) {
        for (let j = 0; j < i; j++)
            if (angkaDuplikat[i] > angkaDuplikat[j]) {
                let x = angkaDuplikat[i];
                angkaDuplikat[i] = angkaDuplikat[j];
                angkaDuplikat[j] = x;
            }
    }

    return angkaDuplikat
}

// Fungsi ini digunakan untuk mengambil nilai yang duplikat
const checkDuplikat = (dup) => {
    let insertAngka = []
    let duplikat = []
    for (let i = 0; i < dup.length; i++) {
        if(insertAngka.includes(dup[i])) {
            duplikat.push(dup[i])
        } else {
            insertAngka.push(dup[i])
        }
    }
    return duplikat
}

console.log(checkDuplikatDanSusun([3, 7, 1, 2, 6, 7, 8, 9, 12, 5, 3, 12]))