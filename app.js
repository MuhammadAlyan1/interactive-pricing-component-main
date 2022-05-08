let rangeSelector = document.querySelector("#pageViewsRange");
let pageviews = document.querySelector("#pageviews");
let price = document.querySelector("#price");
let monthlyOrYearly = document.querySelector("#month");
let monthlyBtn = document.querySelector("#monthly");

let userPrice = 0;

window.addEventListener("DOMContentLoaded", () => {
  getRangeValue();
  updatePrice();
});

monthlyBtn.addEventListener("click", updatePrice);
monthlyBtn.addEventListener("touchend", updatePrice);

rangeSelector.addEventListener("click", getRangeValue);
rangeSelector.addEventListener("touchend", getRangeValue);

function updatePrice() {
  if (!monthly.checked) {
    price.innerText = `$${userPrice * 12 * 0.75}`;
    monthlyOrYearly.innerText = "/ year";
  } else {
    price.innerText = `$${userPrice}`;
    monthlyOrYearly.innerText = "/ month";
  }
}

function getRangeValue() {
  switch (rangeSelector.value) {
    case "1":
      pageviews.innerText = "10K pageviews";
      userPrice = 8;
      updatePrice();
      break;
    case "2":
      pageviews.innerText = "50K pageviews";
      userPrice = 12;
      updatePrice();
      break;
    case "3":
      pageviews.innerText = "100K pageviews";
      userPrice = 16;
      updatePrice();
      break;
    case "4":
      pageviews.innerText = "500K pageviews";
      userPrice = 24;
      updatePrice();
      break;
    case "5":
      pageviews.innerText = "1M pageviews";
      userPrice = 36;
      updatePrice();
      break;
  }
}
