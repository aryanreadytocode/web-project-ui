
// $("button").click(function() {
//     $("h1").css("color", "purple")
// })

// $("input").keypress(function(event) {
//     console.log(event.key);
// })

// $(document).keypress(function(event) {
//     $("h1").text(event.key)
// })

// $("h1").on("mouseover", function() {
    // $("h1").css("color", "purple")
// })

// $("button").on("click", function() {
//     $("h1").hide();
// })

// $("button").on("click", function() {
//     $("h1").toggle();
// })

// $("button").on("click", function() {
//     $("h1").fadeToggle();
// })

// $("button").on("click", function() {
//     $("h1").slideToggle();
// })

// $("button").on("click", function() {
//     $("h1").animate({opacity: 0.5})
// })

// $("button").on("click", function() {
    // $("h1").animate({margin: "20%"})
// })

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
})