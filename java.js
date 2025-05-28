let btn = document.getElementById("btn");
let ck = document.getElementById("check");
let custom = document.getElementById("custom");
let body = document.getElementsByTagName("body")[0];
// let
ck.addEventListener("change", function () {
  if (ck.checked) {
    body.setAttribute("data", "dark");
    custom.style.marginLeft = "20px";
    document.getElementById("logo").src = "imags/Logo2.png";
  }
  if (!ck.checked) {
    custom.style.marginLeft = "0px";
    document.getElementById("logo").src = "imags/Logo.png";
    body.setAttribute("data", "");
  }
});
