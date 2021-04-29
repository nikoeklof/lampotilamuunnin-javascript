var maara = document.querySelector('#maara')
var laskebtn = document.getElementById('laske')
var muuntaja = document.getElementById('lampotilalista')
var lomake = document.forms['lampotilamuunnin']
laskebtn.addEventListener('click', laske)
document.getElementsByName('desimaaliin')[0].checked = true


function laske() {
    let muunnettu = maara.value

    if (muunnettu == 0) {
        alert('Syötä summa!')
        return
    }
    for (var i = 0; i < document.getElementsByName('desimaaliin').length; i++) {
        if (document.getElementsByName('desimaaliin')[i].checked == true) {
            break;
        }
    }
    if (muuntaja.value == 'c to f') {
        muunnettu = (muunnettu * 1.8 + 32).toFixed(i + 1)
    }
    if (muuntaja.value == 'c to k') {
        muunnettu = (Number(muunnettu) + Number(273.15)).toFixed(i + 1)
    }
    if (muuntaja.value == 'f to c') {
        muunnettu = ((muunnettu - 32) / 1.8).toFixed(i + 1)
    }
    if (muuntaja.value == 'f to k') {
        muunnettu = ((Number(muunnettu) + Number(459.67)) / 1.8).toFixed(i + 1)
    }
    if (muuntaja.value == 'k to c') {
        muunnettu = (Number(muunnettu) - Number(273.15)).toFixed(i + 1)
    }
    if (muuntaja.value == 'k to f') {
        muunnettu = (Number(muunnettu) * 1.8 - Number(459.67)).toFixed(i + 1)
    }

    tulos(muunnettu)
}

function tulos(tulos) {
    document.getElementById('muunnos').innerText = 'Muunnos: ' + tulos

}