$("header ul").on("click tap", "a", function(event) {
    event.preventDefault();
    let href = $(this).attr("href")
    document.querySelector(href).scrollIntoView({behavior: 'smooth'})
    
})

// Кнопка "Позвонить" в header
$("#header-contact").on("click tap", () => {
    document.getElementById("footer").scrollIntoView({behavior: 'smooth'});
})