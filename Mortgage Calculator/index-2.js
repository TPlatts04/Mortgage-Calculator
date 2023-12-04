const btnEl = document.getElementById('btn');
btnEl.addEventListener('click', calculate);

const downEl = document.getElementById('downpay-total');


function calculate() {
  const homeEl = document.getElementById('home-value');
  const downPayEl = document.getElementById('downpayment');
  if (downPayEl > 100) {
    alert("Downpayment entry cannot be more than House value!");
  }
  else {
    let downpayVal = downPayEl.value;
    let homeVal = homeEl.value;

    const total = homeVal * (downpayVal/100);
    downEl.innerText = `Your downpayment is: £${total}`;
  }
}