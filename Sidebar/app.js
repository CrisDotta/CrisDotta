let close = document.getElementById("close");
let bars = document.getElementById("bars");
let sidebar = document.getElementById("nav-sidebar");
let socialIcons = document.getElementById("social-media-icons");
bars.addEventListener("click", () => {
    sidebar.classList.toggle("close-sidebar")
    socialIcons.classList.toggle("close-sidebar")
})
close.addEventListener("click",() => {
    sidebar.classList.toggle("close-sidebar")
    socialIcons.classList.toggle("close-sidebar")
})