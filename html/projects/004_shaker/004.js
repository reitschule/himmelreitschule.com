$(document).ready(function(){
    
    $(".pip4").hide();
    $("#shaker").mousedown(function(){
        $(this).addClass("btn_down");
        $(this).removeClass("btn_up");
    });
    $("#shaker").mouseup(function(){
        $(this).removeClass("btn_down");
        $(this).addClass("btn_up");
    });
    $("#shaker").click(function(){
        $("h1").text("Shake, shake, shake ...");
        $("h1").addClass("shake");
        
        setTimeout(function(){
            
            var roll1 = makeDiceFace("#dice1");
            var roll2 = makeDiceFace("#dice2");
            
            $("h1").removeClass("shake");
            
            if (roll1 + roll2 == 2) {
                $("h1").text("Snake eyes!")
            } else {
                $("h1").text(roll1 + roll2);
            }
            
        },500);
    
    
    function makeDiceFace(dieId) {
        var roll = Math.floor(Math.random() * 6 + 1);
        var all = dieId + " .pip";
        var pip_1 = dieId + "_pip_1";
        var pip_2 = dieId + "_pip_2";
        var pip_3 = dieId + "_pip_3";
        var pip_4 = dieId + "_pip_4";
        var pip_5 = dieId + "_pip_5";
        var pip_6 = dieId + "_pip_6";
        var pip_7 = dieId + "_pip_7";
        
        
        if (roll == 1) {
            $(all).hide();
            $(pip_4).show();
        }
        if (roll == 2) {
            $(all).hide();
            $(pip_1).show();
            $(pip_7).show();
        }
        if (roll == 3) {
            $(all).hide();
            $(pip_4).show();
            $(pip_1).show();
            $(pip_7).show();
        }
        if (roll == 4) {
            $(all).hide();
            $(pip_1).show();
            $(pip_3).show();
            $(pip_5).show();
            $(pip_7).show();
        }
        if (roll == 5) {
            $(all).hide();
            $(pip_4).show();
            $(pip_1).show();
            $(pip_3).show();
            $(pip_5).show();
            $(pip_7).show();
        }
        if (roll == 6) {
            $(all).show();
            $(pip_4).hide();
        }
        return roll;
    }
    
    });
    

});


