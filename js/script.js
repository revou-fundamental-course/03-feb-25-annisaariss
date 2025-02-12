function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        alert("Masukkan suhu dalam Celsius!");
        return;
    }
    let fahrenheit = (parseFloat(celsius) * 9) / 5 + 32;

    document.getElementById("explanation").innerHTML = `
        <strong>Cara mengonversi Celsius ke Fahrenheit</strong><br>
        0 derajat Celcius sama dengan 32 derajat Fahrenheit:<br>
        0 °C = 32 °F<br><br>
        Suhu T dalam derajat Fahrenheit (°F) sama dengan suhu T dalam derajat Celsius (°C) kali 9/5 ditambah 32:<br>
        <strong>T (°F) = T (°C) × 9/5 + 32</strong><br>
        atau<br>
        <strong>T (°F) = T (°C) × 1.8 + 32</strong><br><br>
        <strong> Hasil </strong><br>
        Mengubah ${celsius} derajat Celsius menjadi derajat Fahrenheit:<br>
        <strong>T (°F) = ${celsius}°C × 9/5 + 32 = ${fahrenheit.toFixed(2)}°F</strong>
    `;
}

function convertToCelsius() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit === "") {
        alert("Masukkan suhu dalam Fahrenheit!");
        return;
    }
    let celsius = ((parseFloat(fahrenheit) - 32) * 5) / 9;
    document.getElementById("explanation").innerHTML = `
        <strong>Cara mengonversi Fahrenheit ke Celsius</strong><br>
        32 derajat Fahrenheit sama dengan 0 derajat Celsius:<br>
        32 °F = 0 °C<br><br>
        Suhu T dalam derajat Celsius (°C) sama dengan suhu T dalam derajat Fahrenheit (°F) dikurangi 32 lalu dikali 5/9:<br>
        <strong>T (°C) = (T (°F) - 32) × 5/9</strong><br><br>
        atau<br>
        <strong>T (°C) = (T (°F) - 32) / (9/5)</strong><br><br>
        atau<br>
        <strong>T (°C) = (T (°F) - 32) / 1,8</strong><br><br>
        <strong> Hasil </strong><br>
        Mengubah ${fahrenheit} derajat Fahrenheit menjadi derajat Celsius:<br>
        <strong>T (°C) = (${fahrenheit}°F - 32) × 5/9 = ${celsius.toFixed(2)}°C</strong>
    `;
}