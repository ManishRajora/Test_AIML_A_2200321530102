function validate(){
    var user = document.querySelector('#user').value;
    var pass = document.querySelector('#pass').value;

    if(user != 'admin' || pass != 'admin'){
        alert('login failed');
    }else{
        window.location.href = 'converter.html';
    }
}

let currency = {};

fetch('https://api.exchange-api.com/v4/latest/USD')
.then(response => response.json())
.then(data => {
    currency = data.rates;
    const currencyKeys = Object.keys(currency);
    currencyKeys.forEach((key) => {
        const option = document.createElement('option');
        option.value = key;
        option.innerText = key;
        document.getElementById('first').appendChild(option);
    });
    currencyKeys.forEach((key) => {
        const option = document.createElement('option');
        option.value = key;
        option.innerText = key;
        document.getElementById('first').appendChild(option);
    });
    const option = document.createdElement();
})

const convert = () => {
    const from = document.getElementById('first').value;
    const to = document.getElementById('second').value;
    const amount = document.getElementById('amount').value;
    const result = (amount * currency[to]) / currency[from];
    document.getElementById('other_currency').value = result;
}