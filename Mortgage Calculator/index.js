const btnEl = document.getElementById('btn')
btnEl.addEventListener('click', calculate);

const homeEl = document.getElementById('home-value');
const downPayEl = document.getElementById('downpayment');
const interestRateEl = document.getElementById('interest-rate');
const durationEl = document.getElementById('duration');
const paymentEl = document.getElementById('payment-monthly');
const paymentAnnEl = document.getElementById('payment-annual');

const apiKey = "USE YOUR PERSONAL API KEY";

let mortgageObj = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey
  }
}

async function calculate(){

  let homeVal = homeEl.value;
  const downPayVal = downPayEl.value;
  const interestRateVal = interestRateEl.value;
  const durationVal = durationEl.value;

  let apiURL = `https://api.api-ninjas.com/v1/mortgagecalculator?home_value=${homeVal}&downpayment=${downPayVal}&interest_rate=${interestRateVal}&duration_years=${durationVal}`;

    try {
      btnEl.innerText = "Loading..."
      btnEl.disabled = true;
      const response = await fetch(apiURL, mortgageObj);
      const data = await response.json();
      console.log(data);
  
      paymentEl.innerText = `Monthly Payment: £${data['monthly_payment'].total}/mo`;
      paymentAnnEl.innerText = `Annual Payment: £${data['annual_payment'].total}/yr`;
      btnEl.disabled = false;
      btnEl.innerText = "Calculate";
  
    } catch (error) {
      console.log(error);
      btnEl.innerText = "Calculate";
      btnEl.disabled = true;
      paymentEl.innerText = "Error has occured, likely downpayment was higher than house value";
      paymentAnnEl.innerText = "Refresh the page";
    }
  }