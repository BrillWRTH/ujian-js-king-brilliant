function tentukankelulusan(nilai) {
    let grade = "";
    let status = "";

    if (nilai >=80 && nilai <=100) {
        grade = "A";
        status = "Lulus";
    }
    else if (nilai >=70 && nilai <80) {
        grade = "B";
        status = "Lulus";
    }
    else if (nilai <70 && nilai >=0) {
        grade = "C";
        status = " tidak Lulus";
    }

    return { grade, status };
}

// Contoh penggunaan
alert("Masukkan nilai Anda:");
let nilai = parseFloat(prompt("Nilai:"));
let hasil = tentukankelulusan(nilai);
alert(`Grade: ${hasil.grade}\nStatus: ${hasil.status}`);
console.log(`Grade: ${hasil.grade}, Status: ${hasil.status}`);