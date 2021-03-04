// настрока слайдеров
$(".order__carousel_type_top").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".order__carousel_type_bottom",
});
$(".order__carousel_type_bottom").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".order__carousel_type_top",
  dots: false,
  focusOnSelect: true,
  arrows: false,
  mobileFirst: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".brends__carousel").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  arrows: false,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

// переменные
const accordionItems = Array.from(
  document.querySelectorAll(".ingredients__item")
);
const smoothLinks = document.querySelectorAll('a[href^="#"]');
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
const btnUp = document.querySelector(".btn-up");

const header = document.querySelector(".header");

const tabs = Array.from(document.querySelectorAll(".tabs__tab"));
const btnSearch = document.querySelector(".header__link_type_search");
const popupSearch = document.querySelector(".popup_type_search");
const btnVideo = document.querySelector(".video__play");
const popupVideo = document.querySelector(".popup_type_video");

const root = document.querySelector(".root");

const nav = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const burger = document.querySelector(".header__burger");
const menuCloseBtn = document.querySelector(".menu__close-btn");
const listMobileItem = Array.from(document.querySelectorAll(".menu__item"));

// функции
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

const setTime = (element, value, interval, time, maxValue) => {
  let timer = setInterval(() => {
    value = value + interval;
    if (value >= maxValue) {
      clearInterval(timer);
    }
    element.textContent = value;
  }, time);
};

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

burger.addEventListener("click", () => {
  overlay.classList.add("overlay_show");
  nav.classList.add("menu_show");
  root.classList.add("root_unscroll");
  menuCloseBtn.classList.add("menu__close-btn_rotate");
});

overlay.addEventListener("click", (e) => {
  overlay.classList.remove("overlay_show");
  nav.classList.remove("menu_show");
  root.classList.remove("root_unscroll");
  menuCloseBtn.classList.remove("menu__close-btn_rotate");
});

menuCloseBtn.addEventListener("click", (e) => {
  overlay.classList.remove("overlay_show");
  nav.classList.remove("menu_show");
  root.classList.remove("root_unscroll");
  menuCloseBtn.classList.remove("menu__close-btn_rotate");
});

listMobileItem.forEach((item) => {
  const btn = item.querySelector(".menu__drop-btn");
  const subMenu = item.querySelector(".menu__sub-list");
  if (btn) {
    btn.addEventListener("click", () => {
      subMenu.classList.toggle("menu__sub-list_show");
      btn.classList.toggle("menu__drop-btn_rotate");
    });
  }
});

// стартовые функции
if (window.scrollY >= 300) {
  header.classList.add("header_stick");
  btnUp.classList.add("btn-up_visible");
}

for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

collapseAccordionItem(accordionItems[0]);
