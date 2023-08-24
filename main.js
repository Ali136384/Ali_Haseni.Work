let icon = document.getElementById("icon");
let ul = document.getElementById("UlLinks");
let a = 0;

icon.onclick = () => {
  ul.style.display = "block";
  a++;
  if (a % 2 === 0) {
    ul.style.display = "none";
  }
};

window.addEventListener("load", function () {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
});
