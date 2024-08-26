{
  const rateElement = document.querySelector(".js-form__rate");
  const currencyElement = document.querySelector(".js-form__currency");

  const enterTheRate = () => {

    switch (currencyElement.value) {
      case 'USD':
        rateElement.value = '3.8570';
        break;
      case 'EUR':
        rateElement.value = '4.2820';
        break;
      case 'CHF':
        rateElement.value = '4.5256';
        break;
      case 'GBP':
        rateElement.value = '5.0459';
        break;
      default:
        rateElement.value = '';
        break;
    }
  }


  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-form__amount");

    const amount = amountElement.value;
    const rate = rateElement.value;
    const currency = currencyElement.value;

    const result = amount / rate;
    showResult(result, currency);

  };


  const showResult = (result, currency) => {
    const resultElement = document.querySelector(".js-form__result");
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
  }


  const init = () => {
    currencyElement.addEventListener("change", enterTheRate);

    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  }

  init();

}