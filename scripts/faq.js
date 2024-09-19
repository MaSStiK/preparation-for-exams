$(".question button").on("click tap", (event) => {
    $(event.target).parent().siblings().removeClass("opened");
    $(event.target).parent().toggleClass("opened");
})