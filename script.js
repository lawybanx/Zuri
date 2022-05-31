const showOnPx = 300;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);

const onClick = () => {
  const navbar = document.querySelector(".dropdown-menu");
  const dropdown = document.querySelector("#menu");

  navbar.classList.toggle("toggle");
  dropdown.classList.toggle("fa-times");
};

