// Переопределение функции перехода по якорной ссылке, что бы не оставался путь в ссылке
$("header ul").on("click tap", "a", function(event) {
    event.preventDefault()

    // Возвращаем прокрутку и скрываем меню
    $("body").css("overflow", "auto")
    $(".nav-bg").removeClass("opened")

    // Прокручиваем страницу до нужной секции
    let href = $(this).attr("href")
    document.querySelector(href).scrollIntoView({behavior: "smooth"})
})

// Кнопка "Позвонить" в header, прокрутка страницы до нижней формы
$("#header-contact").on("click tap", function() {
    document.querySelector("#feedback").scrollIntoView({behavior: "smooth"})
})

// Открытие навигации на телефоне
$("#open-menu").on("click tap", function() {
    // Убираем прокрутку и показываем меню
    $("body").css("overflow", "hidden")
    $(".nav-bg").addClass("opened")

    // Клик вне навигации закрывает
    $(document).on("click tap", (event) => {
        if ($(event.target).is(".nav-bg")) {
            // Закрываем меню
            $("body").css("overflow", "auto")
            $(".nav-bg").removeClass("opened")
            $(document).off("click tap");
        }
    })
})