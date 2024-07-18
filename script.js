document.addEventListener("DOMContentLoaded", function() {
    const supportButton = document.querySelector(".primary");
    const moreInfoButton = document.querySelector(".secondary");

    supportButton.addEventListener("click", function() {
        alert("Спасибо за поддержку шахматной мысли!");
    });

    moreInfoButton.addEventListener("click", function() {
        alert("Подробнее о турнире вы можете узнать на нашем сайте.");
    });
});
