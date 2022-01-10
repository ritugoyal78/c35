var ball;
var database,positions;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var locnode=database.ref("Ball/Position")
    locnode.on("value",readOp,showerr)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function changePosition(x,y){
    database.ref("Ball/Position").set({
        x:ball.x+x,
        y:ball.y+y
    })
   // ball.x = ball.x + x;
   // ball.y = ball.y + y;
}

function readOp(data){
position=data.val();
ball.x=position.x
ball.y=position.y
}

function showerr(){
    console.log("error")
}