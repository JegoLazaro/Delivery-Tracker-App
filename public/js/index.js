$(document).ready(function () {

    // place your code here
    var name = document.getElementById("name");
    var number = document.getElementById("number");
    var num_size = number.length;
    
    $("#submit").click(function(){
        get_deets(name, number, num_size);

    });
    function get_deets(name, number, num_size){
        name = name.value;
        number = number.value;
        num_size = number.length;
        if (name == ""){
            $('#error').text("Name field is empty.");
            $('#name').css({"background-color":"#FF0000"});
            if(name == ""){
                $('#name').on("mouseenter", function(){
                    $('#name').css({"background-color":"#E3E3E3"});
                });
                $('#name').on("mouseleave", function(){
                    $('#name').css({"background-color":"#FF0000"});
                });
            }
        }
        else if(number == "" || num_size != 10){
            $('#error').text("Invalid number. Must have exactly 10 digits.");
            $('#number').css({"background-color":"#FF0000"});
            if(name == "" || num_size != 10){
                $('#number').on("mouseover", function(){
                    $('#number').css({"background-color":"#E3E3E3"});
                });
                
            }
        }
        else if(name != ""){
            $('#error').text("");
            $('#name').css({"background-color":"#E3E3E3"});
        }
        else if(number != "" && num_size == 10){
            $('#error').text("");
            $('#number').css({"background-color":"#E3E3E3"});
        }
        submit_deets(num_size);
    }
    function submit_deets(num_size){
        var name = $('#name').val();
        var number = $('#number').val();
        var region = $('#region').val();

        if (region == "luzon" && name != "" && (number != "" && num_size == 10)){
            var delivery_info = $('<div class="order luzon luzDELIVERY" id=""><img src="public/images/icon.webp" style="margin-right: 3%;"><h2 class="info text"> ' + name + '<br>'+ number + '</h2><button type="button" class="remove">X</button></div>');
            
            $("#orders").append(delivery_info);
            $(".remove").on('click', function(){
                delivery_info.remove();
            });
            $("#name").val("");
            $("#number").val("");
            $("#region").val("luzon");
        }
        if (region == "visayas" && name != "" && (number != "" && num_size == 10)){
            var delivery_info = $('<div class="order visayas visDELIVERY" id=""><img src="public/images/icon.webp" style="margin-right: 3%;"><h2 class="info text"> ' + name + '<br>'+ number + '</h2><button type="button" class="remove">X</button></div>');
            $("#orders").append(delivery_info);
            $(".remove").on('click', function(){
                delivery_info.remove();
            });
            $("#name").val("");
            $("#number").val("");
            $("#region").val("visayas");
        }
        if (region == "mindanao" && name != "" && (number != "" && num_size == 10)){
            var delivery_info = $('<div class="order mindanao minDELIVERY" id=""><img src="public/images/icon.webp" style="margin-right: 3%;"><h2 class="info text"> ' + name + '<br>'+ number + '</h2><button type="button" class="remove">X</button></div>');
            $("#orders").append(delivery_info);
            $(".remove").on('click', function(){
                delivery_info.remove();
            });
            $("#name").val("");
            $("#number").val("");
            $("#region").val("mindanao");
        }
    }
    
})
