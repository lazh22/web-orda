

console.log($(".circle").css("background-color"));
  $(".circle").css("background-color")
document.getElementsByClassName("circle")[0].style.backgroundColor;

$(".circle").css({
    "background-color": "orange",
    "border-radius": "15%"
});


$(".circle:nth-child(2n)").css({
    "background-color": "green",
});
$(".circle:nth-child(2n+1)").css({
    "background-color": "cyan",
});
$(".circle:nth-child(9)").css({
    "background-color": "black",
});
$(".circle:nth-child(1)").css({
    "background-color": "pink",
});

$(".circle").click(function(event) { 
    $(event.target).toggleClass("lime");
    
});
$(".circle:nth-child(2n+1)").click(function(event) { 
    $(event.target).toggleClass("odd");
    
});