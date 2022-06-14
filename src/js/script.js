window.addEventListener("DOMContentLoaded", () => {

    //Hamburger
    const hamburger = document.querySelector(".hamburger"),
        menu = document.querySelector(".menu"),
        close = document.querySelector(".menu__close");

    hamburger.addEventListener("click", () => {
        menu.classList.add("active");
    });
    close.addEventListener("click", () => {
        menu.classList.remove("active");
    });

    //Scroll
    const sidepanel = document.querySelector(".sidepanel");
    window.addEventListener("scroll", () => {
        console.log(window.scrollY > 500);
    });

}); //---> DOMContentLoaded