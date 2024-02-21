// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".filter-item").forEach(function (item) {
        item.addEventListener("click", function () {
            const value = this.getAttribute("data-filter");
            if (value == "all") {
                document.querySelectorAll(".post-box").forEach(function (box) {
                    box.style.display = "block";
                });
            } else {
                document.querySelectorAll(".post-box").forEach(function (box) {
                    if (!box.classList.contains(value)) {
                        box.style.display = "none";
                    } else {
                        box.style.display = "block";
                    }
                });
            }
            // Add or remove active class
            this.classList.add("active-filter");
            const siblings = this.parentNode.children;
            for (let i = 0; i < siblings.length; i++) {
                if (siblings[i] !== this) {
                    siblings[i].classList.remove("active-filter");
                }
            }
        });
    });
});