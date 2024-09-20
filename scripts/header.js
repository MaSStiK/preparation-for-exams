// Переопределение функции перехода по якорной ссылке, что бы не оставался путь в ссылке
$("header ul").on("click tap", "a", function(event) {
    event.preventDefault();
    let href = $(this).attr("href")
    document.querySelector(href).scrollIntoView({behavior: "smooth"})
})

// Кнопка "Позвонить" в header, прокрутка страницы до нижней формы
$("#header-contact").on("click tap", function() {
    document.getElementById("footer").scrollIntoView({behavior: "smooth"});
})

// Открытие навигации на телефоне
$("#open-menu").on("click tap", function() {
    console.log("open-menu");
})