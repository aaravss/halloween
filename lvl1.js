var canvas = new fabric.Canvas("myCanvas");
var x = document.getElementById("music");
var y = document.getElementById("yay");

player_x = 20;
player_y = 40;

var player_object="";

function play(){
    x.play();
fabric.Image.fromURL("maze1.png",function(Img){
maze_object = Img; 
maze_object.scaleToWidth(2000); 
maze_object.scaleToHeight(1000);
//set x and y coordinates
maze_object.set({
top:-250,
left:-190
});
canvas.add(maze_object);
    
});
}


function player_update(){
    fabric.Image.fromURL("tom.png",function(Img){
        canvas.remove(player_object);
        player_object = Img; 
        player_object.scaleToWidth(80); 
        player_object.scaleToHeight(80);
        //set x and y coordinates
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38' || keyPressed == '87'){
        up();
        console.log("Up");
        
    }
    if(keyPressed=='40' || keyPressed == '83'){
        down();
        console.log("Down");
    }
    if(keyPressed=='37' || keyPressed == '65'){
         left();
         console.log("Left");
     }
     if(keyPressed=='39' || keyPressed == '68'){
         right();
         console.log("Right");
     }
    }

    function up(){
        if(player_y >=0){
    player_y = player_y - 10;
    console.log(player_x);
    console.log(player_y);
    canvas.remove(player_object);
    player_update(); 
    
        }
        if(player_y < 40 && player_x > -20 && player_x < 1100){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
        if(player_y > 45 && player_x > -20 && player_x < 500){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
        if(player_y < 160 && player_x > 510 && player_x < 1100){
            player_x = 20;
            player_y = 40;
            player_update();
        }
        if(player_y > 165 && player_x > 490 && player_x < 830){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
        if(player_x > 870){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
        if(player_x == 860 && player_y == 290){
            document.getElementById("button1").style.display = "inline-block";
            x.pause();
            y.play();
         }
         if(player_x == 870 && player_y == 290){
            document.getElementById("button1").style.display = "inline-block";
            x.pause();
            y.play();
         }
    }
    
    function down(){
        if(player_y <=400){
    player_y = player_y + 10;
    console.log(player_x);
    console.log(player_y);
    canvas.remove(player_object);
    player_update(); 
    
        }
        if(player_y < 40 && player_x > -20 && player_x < 1100){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
        if(player_y > 45 && player_x > -20 && player_x < 500){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
        if(player_y < 160 && player_x > 510 && player_x < 1100){
            player_x = 20;
            player_y = 40;
            player_update();
        }
        if(player_y > 165 && player_x > 490 && player_x < 830){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
        if(player_x > 870){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
        if(player_x == 860 && player_y == 290){
            document.getElementById("button1").style.display = "inline-block";
            x.pause();
            y.play();
         }
         if(player_x == 870 && player_y == 290){
            document.getElementById("button1").style.display = "inline-block";
            x.pause();
            y.play();
         }
    }
    
    function left(){
        if(player_x >=0){
    player_x = player_x - 10;
    console.log(player_x);
    console.log(player_y);
    canvas.remove(player_object);
    player_update(); 
    
        }
        if(player_y < 40 && player_x > -20 && player_x < 1100){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
        if(player_y > 45 && player_x > -20 && player_x < 500){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
        if(player_y < 160 && player_x > 510 && player_x < 1100){
            player_x = 20;
            player_y = 40;
            player_update();
        }
        if(player_y > 165 && player_x > 490 && player_x < 830){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
        if(player_x > 870){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
        if(player_x == 860 && player_y == 290){
            document.getElementById("button1").style.display = "inline-block";
            x.pause();
            y.play();
         }
         if(player_x == 870 && player_y == 290){
            document.getElementById("button1").style.display = "inline-block";
            x.pause();
            y.play();
         }
    }
    
    function right(){
        if(player_x <=1000){
    player_x = player_x + 10;
    console.log(player_x);
    console.log(player_y);
    canvas.remove(player_object);
    player_update(); 
    
        }
        if(player_y < 40 && player_x > -20 && player_x < 1100){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
        if(player_y > 45 && player_x > -20 && player_x < 500){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
        if(player_y < 160 && player_x > 510 && player_x < 1100){
            player_x = 20;
            player_y = 40;
            player_update();
        }
        if(player_y > 165 && player_x > 490 && player_x < 830){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
        if(player_x > 870){
            player_x = 20;
            player_y = 40;
            player_update();
            
        }
 if(player_x == 860 && player_y == 290){
    document.getElementById("button1").style.display = "inline-block";
    x.pause();
    y.play();
    
 }
 if(player_x == 870 && player_y == 290){
    document.getElementById("button1").style.display = "inline-block";
    x.pause();
    y.play();
 }
        
    }
