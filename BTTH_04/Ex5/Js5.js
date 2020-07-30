$(document).ready(function(){
    var color=[
        "red",
        "green",
        "gray",
        "black",
        "blue",
        "pink",
        "orange",
        "yellow",
        "steelblue"
];
    $("#row").children().hover(function(){
        $(this).css("transition", "height 2s");
        $(this).css("height", "200px");
        }, 
        function(){
            $(this).css("transition", "height 2s");
            $(this).css("height", "50px");
        }
    );
});