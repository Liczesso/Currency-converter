let amountElement = document.querySelector(".js-form__amount");
let rateElement = document.querySelector(".js-form__rate");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-form__result");
let currencyElement = document.querySelector(".js-form__currency");

currencyElement.addEventListener("change", (event) => {

  switch (currencyElement.value) {
    case 'USD':
      rateElement.value = '0,2566';
      break;
    case 'EUR':
      rateElement.value = '0,2333';
      break;
    case 'CHF':
      rateElement.value = '0,2218';
      break;
    case 'GBP':
      rateElement.value = '0,1994';
      break;
    default:
      rateElement.value = '';
      break;
  }
})

formElement.addEventListener("submit", (event) => {
  event.preventDefault();


  let amount = amountElement.value;
  let rate = rateElement.value;
  let currency = currencyElement.value;

  let result = amount * rate;

  resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});