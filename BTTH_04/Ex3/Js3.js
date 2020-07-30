$(document).ready(function(){
    $("#text").keypress(function(){ 
        var x = $("#text").val();
        $(".active").text(x);
    });
    $("#change").click(function(){ 
        var sValue = $("select").val();
        switch(parseInt(sValue)){
            case 1:
                $("p").removeClass();
                $("p").addClass("c1");
                break;
            case 2:
                $("p").removeClass();
                $("p").addClass("c2");
                break;
            case 3:
                $("p").removeClass();
                $("p").addClass("c3");
                break;
            case 4:
                $("p").removeClass();
                $("p").addClass("c4");
                break;
        }
    });
    $("#new").click(function(){ 
        $("p").removeClass("active");
        var $newp = $("<p/>")   
                 .addClass("active")  
                 .html("<p></p>");
        $("#story").append($newp);     
        $('#text').val('').change()   
    });
});