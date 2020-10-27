const hotelPriceMin = document.getElementById("hotels-filter-options-pricing-range-input-min");
const hotelPriceMax = document.getElementById("hotels-filter-options-pricing-range-input-max");
const hotelsFilterForm = document.getElementById("hotels-filter-form");

if(hotelsFilterForm){
  hotelsFilterForm.addEventListener("submit", function (evt) {
    if (hotelPriceMin.value && hotelPriceMax.value && parseInt(hotelPriceMin.value, 10) <= parseInt(hotelPriceMax.value, 10)){
      // validation succeeded
    }
    else{
      evt.preventDefault();
    }
  });
}
else{
  console.log("Form was not found.");
}
