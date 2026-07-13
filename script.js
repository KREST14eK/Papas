function toggleMenu() {
    const menu = document.getElementById("menu");
    const profile = document.getElementById("profileMenu");

    menu.classList.toggle("active");
    profile.classList.remove("active");
}

function toggleProfile() {
    const menu = document.getElementById("menu");
    const profile = document.getElementById("profileMenu");

    profile.classList.toggle("active");
    menu.classList.remove("active");
}

// Закрытие при клике вне меню
document.addEventListener("click", function(event) {
    const menu = document.getElementById("menu");
    const profile = document.getElementById("profileMenu");

    if (!event.target.closest(".menu") && !event.target.closest(".burger")) {
        menu.classList.remove("active");
    }

    if (!event.target.closest(".profile-menu") && !event.target.closest(".profile")) {
        profile.classList.remove("active");
    }
});

// Заглушки
function openRegister() {
    alert("Регистрация будет позже");
}

function openLogin() {
    alert("Логин будет позже");
}