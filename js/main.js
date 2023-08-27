const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
const work = document.querySelector(".part__work");
const blog = document.querySelector(".part__blog");
const about = document.querySelector(".part__about");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

[work, blog, about].forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    cursorDot.classList.add("active-link");
    cursorOutline.classList.add("active-link");
  });
  link.addEventListener("mouseleave", (e) => {
    cursorDot.classList.remove("active-link");
    cursorOutline.classList.remove("active-link");
  });
});
