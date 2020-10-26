const searchButton = document.querySelector(".index-hotel-search-button");
const searchButtonSubmit = document.querySelector(".index-search-hotel-form-submit");
const searchForm = document.querySelector(".index-search-hotel-form");
const searchFormHideClass = "index-search-hotel-form-hide";
const searchFormShowClass = "index-hotel-search-form-show";
const searchFormCheckin = document.querySelector(".index-search-hotel-form-control-input-checkin");
const searchFormCheckout = document.querySelector(".index-search-hotel-form-control-input-checkout");
const searchFormAdults = document.querySelector(".index-search-hotel-form-control-input-adults");
const searchFormChildren = document.querySelector(".index-search-hotel-form-control-input-children");

const checkStorageSupported = function(){
  try {
    localStorage.getItem("adults");
    return true;
  }
  catch (err) {
    console.log(err);
    return false;
  }
};

const isStorageSupported = checkStorageSupported();

searchForm.addEventListener("submit", function (evt) {
  if (!searchFormCheckin.value
      || !searchFormCheckout.value
      || !searchFormAdults.value
      || !searchFormChildren.value
      || searchFormAdults.value <= 0
      || searchFormChildren.value < 0){
    evt.preventDefault();
  }
  else {
    if(isStorageSupported){
      localStorage.setItem("adults", searchFormAdults.value);
      localStorage.setItem("children", searchFormChildren.value);
    }
  }
});

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle(searchFormHideClass);
  const isShown = searchForm.classList.toggle(searchFormShowClass);
  if(isShown){
    searchFormCheckin.focus();
    if(isStorageSupported){
      searchFormAdults.value = localStorage.getItem("adults");
      searchFormChildren.value = localStorage.getItem("children");
    }
  }
});

searchForm.classList.add(searchFormHideClass);

/* Interative map */
const mapFrame = document.getElementById("index-hotel-search-map-frame");
const mapImg = document.getElementById("index-hotel-search-map-img");
if(mapFrame && mapImg){
  mapFrame.classList.remove("visually-hidden");
  mapImg.style.zIndex = -1;
}
