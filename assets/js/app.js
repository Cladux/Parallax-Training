/* ------ Hero Header Parallax function ------ */
/* ---- Hero Header variables ---- */
const header = document.querySelector("header");
const bgImg = document.querySelector(".hero__header_bg img");
const bgTitle = document.querySelector(".hero__header_bg h1");
const object = document.querySelector(".hero__header_object");
const main = document.querySelector("main");
/* ----------------------- */
document.addEventListener("scroll", () => {
  const yOff = window.pageYOffset;
  const END_OF_HERO_HEADER = 2000;
  header.style.position = `fixed`;
  main.style.opacity = `0`;

  if (yOff < END_OF_HERO_HEADER) {
    const percent = yOff / END_OF_HERO_HEADER;
    header.style.transform = `translate3d(0, 0, 0)`;

    bgImg.style.filter = `blur(${percent * 2}px)`;
    bgTitle.style.transform = `scale(${1 + percent * 0.3} , 1.3)`;
    object.style.transform = `scale(${1 + percent * 0.1})`;
  } else if (yOff > END_OF_HERO_HEADER) {
    const offset = yOff - END_OF_HERO_HEADER;

    bgImg.style.filter = `blur(2px)`;
    bgTitle.style.transform = `scale(1.3 , 1.3)`;
    object.style.transform = `scale(1.1)`;
    header.style.transform = `translate3d(0, -${offset}px, 0)`;
    if (offset > 360) {
      main.style.opacity = `1`;
    }
  }
});
/* ------------------------------------------ */
/* ---------- Burger Menu function ---------- */
/* ---- Burger variables ---- */
const burger = document.querySelector(".burger__menu_button");
const navMenu = document.querySelector(".main__nav_menu");
const listItems = document.querySelectorAll(".main__nav_menu li a");
/* ---------------------- */
burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  navMenu.classList.toggle("menu--active");
});
listItems.forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("burger--active");
    navMenu.classList.remove("menu--active");
  })
);
/* ----------------------------------------- */
/* ------------ Main Hover Card ------------ */
/* ---- Hover Card variables ---- */
const cardWrapper = document.querySelector(".main__section__hover");
const cardItem = document.querySelectorAll(".main__section__hover_card");
/* ---------------------- */
cardItem.forEach((items, index) =>
  items.addEventListener("mouseover", function () {
    cardItem[1].classList.remove("hover_card--active");
    cardItem[index].classList.remove("hover_card--active");
    cardItem[index].classList.add("hover_card--active");
  })
);
cardItem.forEach((items, index) =>
  items.addEventListener("mouseout", () => {
    if (index == 1) {
      cardItem[index].classList.add("hover_card--active");
    } else {
      cardItem[1].classList.add("hover_card--active");
      cardItem[index].classList.add("hover_card--active");
      cardItem[index].classList.remove("hover_card--active");
    }
  })
);

/* ----------------------------------------- */
