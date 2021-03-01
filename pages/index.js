$(".order__carousel_type_top").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".order__carousel_type_bottom",
});
$(".order__carousel_type_bottom").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".order__carousel_type_top",
  dots: false,
  focusOnSelect: true,
  arrows: false,
});

$(".brends__carousel").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  focusOnSelect: true,
  arrows: false,
});

const accordionItems = Array.from(
  document.querySelectorAll(".ingredients__item")
);

const hideAllAccordionItem = (items) => {
  items.forEach((item) => {
    var text = item.querySelector(".ingredients__text");
    item.classList.remove("ingredients__item_active");
    text.style.maxHeight = null;
  });
};

const collapseAccordionItem = (item) => {
  var text = item.querySelector(".ingredients__text");
  if (!item.classList.contains("ingredients__item_active")) {
    item.classList.add("ingredients__item_active");
    text.style.maxHeight = text.scrollHeight + "px";
  } else {
    item.classList.remove("ingredients__item_active");
    text.style.maxHeight = null;
  }
};

accordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    hideAllAccordionItem(accordionItems);
    collapseAccordionItem(item);
  });
});

collapseAccordionItem(accordionItems[0]);

const timersSection = document.querySelector(".timers");
const timers = Array.from(timersSection.querySelectorAll(".timers__count"));

const timerPackage = timersSection.querySelector(".timer__count_type_package");
const timerCountries = timersSection.querySelector(
  ".timer__count_type_countries"
);
const timerCustomer = timersSection.querySelector(
  ".timer__count_type_customer"
);
const timerYear = timersSection.querySelector(".timer__count_type_year");
let startTimers = true;

const setTime = (element, value, interval, time, maxValue) => {
  let timer = setInterval(() => {
    value = value + interval;
    if (value >= maxValue) {
      clearInterval(timer);
    }
    element.textContent = value;
  }, time);
};

const btnUp = document.querySelector(".btn-up");

btnUp.addEventListener("click", () => {
  document.querySelector(".root").scrollIntoView({ behavior: "smooth" });
});

const header = document.querySelector(".header");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    header.classList.add("header_stick");
    btnUp.classList.add("btn-up_visible");
  } else {
    btnUp.classList.remove("btn-up_visible");
    header.classList.remove("header_stick");
  }

  const rect = timersSection.getBoundingClientRect();

  if (rect.y <= rect.height * 2.5) {
    if (startTimers) {
      setTime(timerPackage, 0, 10, 1, 3560);
      setTime(timerCountries, 0, 5, 40, 195);
      setTime(timerCustomer, 0, 5, 15, 445);
      setTime(timerYear, 0, 1, 15, 99);
      startTimers = false;
    }
  }
});

const tabs = Array.from(document.querySelectorAll(".tabs__tab"));

const hideAllTabsItem = (items) => {
  items.forEach((item) => {
    item.classList.remove("tabs__tab_active");
    const content = document.querySelector(`.${item.id}`);
    content.classList.remove(`${item.id}_active`);
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    hideAllTabsItem(tabs);
    const content = document.querySelector(`.${tab.id}`);
    if (!tab.classList.contains("tabs__tab_active")) {
      tab.classList.add("tabs__tab_active");
      content.classList.add(`${tab.id}_active`);
    } else {
      tab.classList.remove("tabs__tab_active");
      content.classList.remove(`${tab.id}_active`);
    }
  });
});

const btnSearch = document.querySelector(".header__link_type_search");
const popupSearch = document.querySelector(".popup_type_search");
const btnVideo = document.querySelector(".video__play");
const popupVideo = document.querySelector(".popup_type_video");

const root = document.querySelector(".root");

btnSearch.addEventListener("click", () => {
  popupSearch.classList.add("popup_show");
  root.classList.add("root_unscroll");
});

popupSearch.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    popupSearch.classList.remove("popup_show");
    root.classList.remove("root_unscroll");
  }
});

btnVideo.addEventListener("click", () => {
  root.classList.add("root_unscroll");
  popupVideo.classList.add("popup_show");
});

popupVideo.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("popup") ||
    e.target.classList.contains("popup__content") ||
    e.target.classList.contains("popup__btn-close")
  ) {
    popupVideo.classList.remove("popup_show");
    root.classList.remove("root_unscroll");
  }
});
