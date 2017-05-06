$(document).ready(function(){

    
    $("form").submit(function(event){
        event.preventDefault();
        
        var birthday = $("#bday").val();
        var months = ["Jan", "Feb", 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
        var today = new Date();
        
        
        if(birthday == 0) {
            $("#bdayBanner").text("You were never born ... ");
        } else {
            
            if(birthday.indexOf("/") >= 0 ) {
                birthday = birthday.split("/");
                var year  = birthday[2];
				var month = (birthday[0])-1;
                var day   = birthday[1];
					
            } else {
				birthday = birthday.split('-');   
                var year  = birthday[0];
                var month = (birthday[1])-1;
                var day   = birthday[2];		
            };
            
            
            
            var bday = new Date(year, month, day);
            
            if (today.getMonth() == bday.getMonth() && today.getDate() == bday.getDate()) {
                $("#bdayBanner").text("Today's your birthday?!");
                
                if(bday.getMonth() + 1 == "1" &&　bday.getDate() == "10") {
                    $("#happyBday").text("叔叔生日快樂!!!");
                }　else if (bday.getMonth() + 1 == "3" &&　bday.getDate() == "8") {
                    $("#happyBday").text("皓皓生日快樂!!!");
                } else if (bday.getMonth() + 1 == "6" &&　bday.getDate() == "3") {
                    $("#happyBday").text("鈣鈣生日快樂!!!");
                } else if (bday.getMonth() + 1 == "8" &&　bday.getDate() == "27") {
                    $("#happyBday").text("俊俊生日快樂!!!");
                } else if (bday.getMonth() + 1 == "7" &&　bday.getDate() == "7") {
                    $("#happyBday").text("阿雪生日快樂!!!");
                } else if (bday.getMonth() + 1 == "8" &&　bday.getDate() == "3") {
                    $("#happyBday").text("玄如生日快樂!!!");
                }
                
                else {
                    $("#happyBday").text("Happy Birthday!!!");
                };
                
                
            } else {
                $("#bdayBanner").text("Your birthday is " + months[month] + " " + day + ".");
                
                if(bday.getMonth() + 1 == "1" &&　bday.getDate() == "10") {
                    $("#happyBday").text("You are Shaune's boyfriend!");
                }　else if (bday.getMonth() + 1 == "3" &&　bday.getDate() == "8") {
                    $("#happyBday").text("景皓是你");
                } else if (bday.getMonth() + 1 == "6" &&　bday.getDate() == "3") {
                    $("#happyBday").text("Mary, you are a nice 鈣.");
                } else if (bday.getMonth() + 1 == "8" &&　bday.getDate() == "27") {
                    $("#happyBday").text("創辦人，是你嗎?!!!");
                } else if (bday.getMonth() + 1 == "7" &&　bday.getDate() == "7") {
                    $("#happyBday").text("I guess you are 雪菁.");
                } else if (bday.getMonth() + 1 == "8" &&　bday.getDate() == "3") {
                    $("#happyBday").text("You are Andy's girlfriend!");
                } else if (bday.getMonth() + 1 == "11" &&　bday.getDate() == "16") {
                    $("#happyBday").text("It'a been a long time.");
                    $("#bdayBanner").text("Hey, Sunny!");
                } else {
                    $("#happyBday").text("Today is not your birthday.");
                };
            };
        };

    });
    


});


