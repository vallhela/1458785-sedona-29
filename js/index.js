const searchButton = document.querySelector(".index-hotel-search-button");
const searchButtonSubmit = document.querySelector(".index-search-hotel-form-submit");
const searchForm = document.querySelector(".index-search-hotel-form");
const searchFormHideClass = "index-search-hotel-form-hide";
const searchFormShowClass = "index-hotel-search-form-show";
const searchFormCheckin = document.querySelector(".index-search-hotel-form-control-input-checkin");
const searchFormCheckout = document.querySelector(".index-search-hotel-form-control-input-checkout");
const searchFormAdults = document.querySelector(".index-search-hotel-form-control-input-adults");
const searchFormChildren = document.querySelector(".index-search-hotel-form-control-input-children");

const storage = window.localStorage;

searchForm.addEventListener("submit", function (evt) {
  if (searchFormCheckin.value
      && searchFormCheckout.value
      && searchFormAdults.value
      && searchFormChildren.value){
    if(storage){
      storage.setItem("adults", searchFormAdults.value);
      storage.setItem("children", searchFormChildren.value);
    }
  }
  else {
    evt.preventDefault();
  }
});

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle(searchFormHideClass);
  const isShown = searchForm.classList.toggle(searchFormShowClass);
  if(isShown){
    searchFormCheckin.focus();
    if(storage){
      searchFormAdults.value = storage.getItem("adults");
      searchFormChildren.value = storage.getItem("children");
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
