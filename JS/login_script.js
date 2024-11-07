function validate(){
    var user = document.querySelector("#user").value;
    var pswd = document.querySelector("#pswd").value;
    if(user != "admin" || pswd != "admin") alert("Login failed");
    else window.location.href = "convertor.html";
}

let currency = {};

fetch('https://api.exchangerate-api.com/v4/latest/USD')
.then(response => response.json())
.then(data =>{
    currency = data.rates;
    const currencyKeys = Object.keys(currency);
    currencyKeys.forEach((key) =>{
        var option = document.createElement('option');
        option.value = key;
        option.innerText = key;
        document.getElementById('first').appendChild(option);
    });
    currencyKeys.forEach((key) =>{
        var option = document.createElement('option');
        option.value = key;
        option.innerText = key;
        document.getElementById('second').appendChild(option);
    });
    const option = document.createElement()
});

const convert = () =>{
    const from = document.getElementById("first").value;
    const to = document.getElementById("second").value;
    const amount = document.getElementById('amount').value;
    const result = (amount * currency[to]) / currency[from];
    document.getElementById("other_currency").value = result;
}

