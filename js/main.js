const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add Border to current tab
  this.classList.add("tab-border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

const removeBorder = () => {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
};

const removeShow = () => {
  tabContentItems.forEach((item) => item.classList.remove("show"));
};

// Listen for tab Click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
