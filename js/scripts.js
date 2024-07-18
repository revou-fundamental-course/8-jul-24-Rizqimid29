// ini javascript

// Function getBMI()
function getBMI() {
    //Mengambil nilai dari inputan user atau menyimpan nilai dalam variabel
    const beratBadan = document.getElementById("input-berat-badan").value;
    const tinggiBadan = document.getElementById("input-tinggi-badan").value;

    //Menghitung BMI dari berat badan dan tinggi badan yang diinput oleh user
    const hasilBMI = parseFloat(beratBadan) / parseFloat(((tinggiBadan * tinggiBadan) / 10000));
    document.getElementById("hasil-bmi").innerHTML = hasilBMI; 
    console.log(hasilBMI);

    //Kondisi if-else sesuai hasil BMI
    if(hasilBMI < 18.5) {
        const kurang = "Anda kekurangan berat badan";
        document.getElementById("kategori-bmi").innerHTML = kurang;
        console.log(kurang);

        const penjelasanKurang = "Hasil BMI kurang dari 18,5.";
        document.getElementById("penjelasan-hasil").innerHTML = penjelasanKurang
        console.log(penjelasanKurang);

        const solusiKurang = "Dengan berkonsultasi pada profesional kesehatan, seseorang dengan BMI kurang dapat mencapai berat badan yang ideal";
        document.getElementById("solusi-hasil").innerHTML = solusiKurang;
        console.log(solusiKurang);

        const saranKurang = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.";
        document.getElementById("saran-hasil").innerHTML = saranKurang;
        console.log(saranKurang);
    } else if (hasilBMI >= 18.5 && hasilBMI <= 24.9) {
        const normal = "Anda memiliki berat badan normal";
        document.getElementById("kategori-bmi").innerHTML = normal;
        console.log(normal);

        const penjelasanNormal = "Hasil BMI antara 18,5 dan 24,9.";
        document.getElementById("penjelasan-hasil").innerHTML = penjelasanNormal;
        console.log(penjelasanNormal);

        const solusiNormal = "Menjaga berat badan ideal dapat dicapai dengan pola makan sehat dan seimbang, serta aktivitas fisik yang teratur."
        document.getElementById("solusi-hasil").innerHTML = solusiNormal;
        console.log(solusiNormal);

        const saranNormal = "Jika BMI Anda berada dalam kategori ini maka Anda harus konsisten untuk menjaganya.";
        document.getElementById("saran-hasil").innerHTML = saranNormal;
        console.log(saranNormal);
    } else if (hasilBMI >= 25) {
        const lebih = "Anda memiliki berat badan berlebih";
        document.getElementById("kategori-bmi").innerHTML = lebih;
        console.log(lebih);

        const penjelasanLebih = "Hasil BMI lebih dari 25.";
        document.getElementById("penjelasan-hasil").innerHTML = penjelasanLebih;
        console.log(penjelasanLebih);

        const solusiLebih = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.";
        document.getElementById("solusi-hasil").innerHTML = solusiLebih;
        console.log(solusiLebih);

        const saranLebih = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
        document.getElementById("saran-hasil").innerHTML = saranLebih;
        console.log(saranLebih);
    } 
}

// Mohon maaf untuk function getReset() Saya tidak bisa jalan
// function getReset() {
//     var hasilReset = 0;
//     console.log(hasilReset); 
// }

//Mohon maaf Saya juga belum bisa form validation