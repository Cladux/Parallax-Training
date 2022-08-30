/* ---- Hero header var ---- */
const header = document.querySelector("header");
const bgImg = document.querySelector(".hero__header_bg img");
const bgTitle = document.querySelector(".hero__header_bg h1");
const object = document.querySelector(".hero__header_object");
/* ------------------------ */
/* ---- Hero header function ---- */
document.addEventListener("scroll", () => {
  const yOff = window.pageYOffset;
  const END_OF_HERO_HEADER = 2000;
  header.style.position = `fixed`;

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
  }
});
/* ------------------------ */
