const hotelPriceMin = document.getElementById("hotels-filter-options-pricing-range-input-min");
const hotelPriceMax = document.getElementById("hotels-filter-options-pricing-range-input-max");
const hotelsFilterForm = document.getElementById("hotels-filter-form");

hotelsFilterForm.addEventListener("submit", function (evt) {
  if (!hotelPriceMin.value
      || !hotelPriceMax.value
      || hotelPriceMin.value < 0
      || Number.parseInt(hotelPriceMin.value) > Number.parseInt(hotelPriceMax.value)){
    evt.preventDefault();
  }
});
