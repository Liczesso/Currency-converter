let amountElement = document.querySelector(".js-form__amount");
console.log(amountElement);
let rateElement = document.querySelector(".js-form__rate")
console.log(rateElement);
let formElement = document.querySelector(".js-form")
console.log(formElement);
let resultElement = document.querySelector(".js-form__result")
console.log(resultElement);
let currencyElement = document.querySelector(".js-form__currency")
console.log(currencyElement);

formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    let amount = amountElement.value;
    let rate = rateElement.value;
    let currency = currencyElement.value;

    let result = amount * rate;

    console.log(result);
    console.log(currency);

    resultElement.innerText = `${result.toFixed(2)} ${currency}` ;
});