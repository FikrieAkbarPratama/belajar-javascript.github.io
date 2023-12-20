// 1. Mencari keliling parsegi panjang
// Memasukkan nilai panjang dan lebar
// Menghitung rumus: 2*p + 2*l
// Menampilkan hasil


// Membuat variable nilai
let panjang = 150;
let lebar = 40;

// Menghitung rumus
let hasil =  2*panjang + 2*lebar;

// Menampilkan hasil
console.log("Keliling persegi panjang adalah " +  hasil);

let lp = 64;
let akarKuadrat = Math.sqrt(lp);

let Hasilnya = 4 * akarKuadrat;

console.log(Hasilnya);


// Algoritma membuat KTP

let umur = 17;


if (umur >= 17) {
    result = "Diperbolehkan membuat KTP";
}else {
    result = "Tidak diperbolehkan membuat KTP";
}

console.log(result);


// Iqbalagi

let pabp = 86; 
let mtk = 82;
let dpk = 77;

let rata2 = (pabp + mtk + dpk) / 3 ;

if (rata2 >= 80 && rata2 <= 100) {
    grade = "A";
}else if (rata2 >= 75 && rata2 >= 80) {
    grade = "B";
}else if (rata2 >= 65 && rata2 <= 75) {
    grade = "C"
}else if (rata2 >= 45 && rata2 <= 65) {
    grade = "D"
}else if (rata2 >= 0 && rata2 <= 45) {
    grade = "E"
}else {
    grade = "K"
}

console.log(rata2)
console.log(grade);


// Menentukan bilangan ganjil genap

// variable bilangan dengan value 21
// keyword let/const
// keyword namaVariable = value;
// input
let bilangan = 20;

// proses
if (bilangan % 2 == 0) {
    hasil = 'bilangan genap';
} else {
    hasil = 'bilangan ganjil';
}

// output
console.log('hasil');


// menghitung luas segitiga
// input
let a = 12;
let t = 15;

// proses
const lSegitiga = 1/2 * a * t ;

//output
console.log(lSegitiga);


// menghitung keliling lingkaran
// input
let phi = 3.14;
let r = 10;

// proses
 const luasLingkaran = Math.round(phi * r * r) ;

// output
console.log(luasLingkaran);


// menghitung luas persegi panjang
// input
let p = 40;
let l = 25

// proses
const lPersegiPanjang = p * l; 

// output
console.log(lPersegiPanjang);

// menentukan jumlah umur 
// input
let tahunLahir = 2007;
let tahunSekarang = 2023;

// proses
let umurSaya = tahunSekarang - tahunLahir;

// output
console.log(`Umur saya saat ini adalah ${umurSaya} tahun`);


//* percabangan atau selection algoritma
// hanya kondisi yang bernilai true yang akan dijalankan atau dieksekusi

//* penjumlahan 2 angka
// input
let bilangan1 = 8911;
let bilangan2 = 1116;

// proses
let hasilPenjumlahan = bilangan1 + bilangan2;

// output
console.log(hasilPenjumlahan);

//* konverensi jam ke detik dan konverensi jam ke menit
// input
let jam = 8;

// proses
let hasilKonverensiKeDetik = jam * 3600 + ' detik';
let hasilKonverensiKeMenit = jam * 60 + ' menit';

// output
console.log(hasilKonverensiKeDetik);
console.log(hasilKonverensiKeMenit);


//* konverensi kg ke gram
// input
let kg = 62;

// proses
let hasilKonverensiKeGram = kg * 1000 + ' gram';

// output
console.log(hasilKonverensiKeGram);

//* konverensi km ke meter
// input
let km = 36;

// proses
let hasilKonverensiKeMeter = km * 1000 + ' meter';

// output
console.log(hasilKonverensiKeMeter);





//* 1. membuat angka perbandingan lebih besar/kecil

let A = 110;
let B = 111;
let C = 112;

if (A>B && A>C) {
    hsl = 'A lebih besar';
} else if (B>A && B>C) {
    hsl = 'B lebih besar';
} else if(C>A && C>B) {
    hsl = 'C lebih besar';
}

console.log(hsl);

//* 2.membuat pemeriksaan bilangan genap/ganjil dan positif/negatif
let bilanganGG = -7;

if (bilanganGG % 2 == 0 && bilanganGG > 0){
    bilangan = 'genap' + ' dan' +' positif';
} else {
    bilangan = 'ganjil' + ' dan' + ' negatif';
}

console.log(`hasil pemeriksaan adalah bilangan ${bilangan}`)

//* 3.menentukan nyala/matinya lampu
let nilai = prompt('Masukkan angka 1 untuk menyalakan lampu dan 0 untuk mematikan lampu!');

if (nilai == 1) {
    lampu = 'lampu nyala';
    alert('Buka console untuk melihat hasil..');
} else if (nilai == 0){
    lampu = 'lampu mati';
    alert('Buka console untuk melihat hasil..');
} else if(nilai == no) {
    alert('Mohon hanya memasukkan angka 1 atau 0!');
} else {
    alert('Mohon hanya memasukkan angka 1 atau 0!');
}

console.log(lampu);

//* 4. menjumlahkan harga barang yang dibeli dan diberi diskon

let sepatu = 1320000;
let celana = 79000;
let tShirt = 183000;

let total = sepatu + celana + tShirt;

if (total > 100000) {
    diskon = total * (10/100);
    bayar = total - diskon;
} else {
    bayar = total;
}

console.log(bayar);

//* 5. gaji jam lebur

let jamLembur = 6;

if (jamLembur < 6) {
    gajiLembur = 'gaji lembur anda berjumlah Rp 100.000';
} else if (jamLembur == 6) {
    gajiLembur = 'gaji lembur anda berjumlah Rp 200.000';
} else if (jamLembur > 6) {
    gajiLembur = 'gaji lembur anda berjumlah Rp 300.000';
}

console.log(gajiLembur);

//* 6. peringatan ketinggian pada air
let tinggiAir = 600.1;

if (tinggiAir <= 500.0) {
    kondisi = 'Aman';
} else if (tinggiAir <= 600.0) {
    kondisi = 'Waspada';
} else if (tinggiAir <= 650.0) {
    kondisi = 'Siaga 2';
} else if (tinggiAir > 650) {
    kondisi = 'Siaga 1';
}

console.log(kondisi);

