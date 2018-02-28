function lightsPlease() {

	let on = document.getElementById("on");
	let page = document.getElementById("page");
  let all = document.getElementById("all");
  let html = document.getElementById("html");

	page.addEventListener("click", function() {
  if (html.style.background == "white") {

    html.style.background = "black";
		html.style.color = "white";
    on.style.color = "white";
    off.style.color = "black"
    lights.style.color = "white";
    page.style.background = "white";

    }

  else {

    html.style.background = "white";
		html.style.color = "white";
    on.style.color = "white";
    off.style.color = "black";
    lights.style.color = "black";
    page.style.background = "black";


  }


})
}
lightsPlease();
