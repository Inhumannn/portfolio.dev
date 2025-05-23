const barsMenu = document.querySelector("#bars");

barsMenu.addEventListener("click", () => {
  const ulMenu = document.querySelector("#res-menu-ul");
  ulMenu.style.display = ulMenu.style.display === "flex" ? "none" : "flex";
  ulMenu.style.position = "absolute";
  ulMenu.style.background = "white";
  ulMenu.style.margin = "-12px -86%";
  ulMenu.style.padding = "12px 0";
  ulMenu.style.gap = "20px";

  const navMenu = document.querySelector("#res-menu-nav");
  navMenu.style.display = "flex";
  navMenu.style.gap = "15px";
});
