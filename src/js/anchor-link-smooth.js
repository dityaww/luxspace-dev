const smoothScrollAnchor = document.querySelectorAll("a[href^='#']");

for (let index = 0; index < smoothScrollAnchor.length; index++) {
  const e = smoothScrollAnchor[index];

  e.addEventListener("click", (ev) => {
    ev.preventDefault();
    let href = e.getAttribute("href");

    if (document.getElementById(href.replace("#", ""))) {
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
}
