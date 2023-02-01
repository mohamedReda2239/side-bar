let sideBar = document.querySelector("#sidebar");



// toggle menu
let toggleIcon = document.querySelector(".burger-icon");

toggleIcon.addEventListener("click", function () {
    sideBar.classList.toggle("show-sidebar")
})



// exit button
let exitButton = document.querySelector(".exit-button");

exitButton.addEventListener("click", function () {
    sideBar.classList.remove("show-sidebar");
})




console.log(exitButton);
