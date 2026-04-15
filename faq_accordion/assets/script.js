const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    
    const body = header.nextElementSibling;
    const icon = header.querySelector(".icon");

    
    body.classList.toggle("active");

    
    if (body.classList.contains("active")) {
      icon.src = "images/icon-minus.svg";
    } else {
      icon.src = "images/icon-plus.svg";
    }
  });
});