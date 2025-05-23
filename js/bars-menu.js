const barsMenu = document.querySelector("#bars");

barsMenu.addEventListener("click", () => {
  const ulMenu = document.querySelector("#res-menu-ul");
  ulMenu.style.display = ulMenu.style.display === "flex" ? "none" : "flex";
  ulMenu.style.position = "absolute";
  ulMenu.style.background = "white";
  ulMenu.style.left = "clamp(15px, 2vw, 80px)";
  ulMenu.style.top = "clamp(10px, 1vh, 40px)";
  ulMenu.style.padding = "12px 0";
  ulMenu.style.gap = "20px";

  const navMenu = document.querySelector("#res-menu-nav");
  navMenu.style.display = "flex";
  navMenu.style.gap = "15px";
});
