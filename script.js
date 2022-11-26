/*     Menu    */
((d) => {
  const $btnmenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnmenu.addEventListener("click", (e) => {
    $btnmenu.firstElementChild.classList.toggle("none");
    $btnmenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnmenu.firstElementChild.classList.remove("none");
    $btnmenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);
