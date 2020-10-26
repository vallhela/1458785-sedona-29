const searchButton = document.querySelector(".index-hotel-search-button");
const searchForm = document.querySelector(".index-search-hotel-form");
const searchHormHideClass = "index-search-hotel-form-hide";

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle(searchHormHideClass);
});

searchForm.classList.add(searchHormHideClass);
