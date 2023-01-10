const el = document.getElementById("container");

el.addEventListener("click", (e) => {
    e.target.style.width == "300px" ? e.target.style.width = "600px" : e.target.style.width = "300px"
}, false);