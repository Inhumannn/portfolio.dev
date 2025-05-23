const barsMenu = document.querySelector("#bars");

barsMenu.addEventListener("click", () => {
  const ulMenu = document.querySelector("#res-menu-ul");
  ulMenu.style.display = ulMenu.style.display === "block" ? "none" : "block";
  const navMenu = document.querySelector("#res-menu-nav");
  navMenu.style.display = "flex";
  navMenu.style.gap = "15px";
});
