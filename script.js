const sidebar = document.querySelector(".side-bar");
const menu = document.querySelector(".menu-icon");
const hide = document.querySelector(".close-icon");

function openSidebar(e) {
    e.preventDefault();
    sidebar.classList.add("active");
}

menu.addEventListener("click", openSidebar);

function hideSidebar(e) {
    e.preventDefault();
    sidebar.classList.remove("active");
};

hide.addEventListener("click", hideSidebar);