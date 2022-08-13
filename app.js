const bgImg = document.querySelector(".hero__header_bg img");
const bgTitle = document.querySelector(".hero__header_bg h1");
const object = document.querySelector(".hero__header_object");

document.addEventListener("scroll", () => {
  const yOff = window.pageYOffset;
  const END_OF_HERO_HEADER = 2000;

  if (yOff < END_OF_HERO_HEADER) {
    const percent = yOff / END_OF_HERO_HEADER;
    console.log(percent);

    bgImg.style.filter = `blur(${percent * 2}px)`;
    bgTitle.style.transform = `scale(${1 + percent * 0.3} , 1.3)`;
    object.style.transform = `scale(${1 + percent * 0.1})`;
  } else if (yOff > END_OF_HERO_HEADER) {
    bgImg.style.filter = `blur(2px)`;
    bgTitle.style.transform = `scale(1.3 , 2) translate(80px, 0) `;
    bgTitle.style.transition = `all .5s ease-out`;
    object.style.transform = `scale(1.08)`;
  }
});
