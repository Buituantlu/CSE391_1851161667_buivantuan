$(document).ready(function(){
    $("div").remove();
    $("#number").change(function(){ 
        var e =  $(this).val();
        $("div").remove();
        for (var i = 0; i < e; i++){
            $("section").append("<div></div>");
        }   
    });
});