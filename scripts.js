const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select-convert')
const currencySelectToConvert = document.querySelector('.currency-select-convert')
const currencySelectConverted = document.querySelector('.currency-select-converted')

function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')

    let total = 1
    const realToday = 1.00
    const dolarToday = 4.89
    const euroToday = 5.24
    const libraToday = 6.03
    const bitcoinToday = 174297.10
    const ieneToday = 0.0336


    if (currencySelectToConvert.value == 'dolar-Toselect') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * dolarToday
    }
    if (currencySelectToConvert.value == 'euro-Toselect') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * euroToday
    }
    if (currencySelectToConvert.value == 'libra-Toselect') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * libraToday
    }
    if (currencySelectToConvert.value == 'bitcoin-Toselect') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * bitcoinToday
    }
    if (currencySelectToConvert.value == 'iene-Toselect') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * ieneToday
    }
    if (currencySelectToConvert.value == 'real-Toselect') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * realToday
    }

    if (currencySelectConverted.value == 'dolar-converted') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(total / dolarToday)
    }
    if (currencySelectConverted.value == 'euro-converted') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(total / euroToday)
    }
    if (currencySelectConverted.value == 'libra-converted') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(total / libraToday)
    }
    if (currencySelectConverted.value == 'bitcoin-converted') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(total / bitcoinToday)
    }
    if (currencySelectConverted.value == 'iene-converted') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(total / ieneToday)
    }
    if (currencySelectConverted.value == 'real-converted') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(total / realToday)
    }
}

function changeCurrencyToConvert() {
    const currencyName = document.getElementById("currency-name-convert")
    const currencyImage = document.querySelector(".currency-img-convert")

    if (currencySelect.value == "real-Toselect") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }
    if (currencySelect.value == "dolar-Toselect") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro-Toselect") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra-Toselect") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if (currencySelect.value == "iene-Toselect") {
        currencyName.innerHTML = "Japan"
        currencyImage.src = "./assets/iene.png"
    }
    if (currencySelect.value == "bitcoin-Toselect") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues ()
}

function changeCurrency() {
    const currencyNameConverted = document.getElementById('currency-name-converted')
    const currencyImageConverted = document.querySelector('.currency-img-converted')

    if (currencySelectConverted.value == 'dolar-converted') {
        currencyNameConverted.innerHTML = 'Dólar Americano'
        currencyImageConverted.src = './assets/dolar.png'
    }
    if (currencySelectConverted.value == 'euro-converted') {
        currencyNameConverted.innerHTML = 'Euro'
        currencyImageConverted.src = './assets/euro.png'
    }
    if (currencySelectConverted.value == 'libra-converted') {
        currencyNameConverted.innerHTML = 'Libra'
        currencyImageConverted.src = './assets/libra.png'
    }
    if (currencySelectConverted.value == 'bitcoin-converted') {
        currencyNameConverted.innerHTML = 'Bitcoin'
        currencyImageConverted.src = './assets/bitcoin.png'
    }
    if (currencySelectConverted.value == "iene-converted") {
        currencyNameConverted.innerHTML = "Iene"
        currencyImageConverted.src = "./assets/iene.png"
    }
    if (currencySelectConverted.value == "real-converted") {
        currencyNameConverted.innerHTML = "Real"
        currencyImageConverted.src = "./assets/real.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrencyToConvert)
currencySelectConverted.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)