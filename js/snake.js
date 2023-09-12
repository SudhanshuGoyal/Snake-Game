
// Game variable

let inputDir={x: 0,y:0};
const foodsound= new Audio("../music/food.mp3");
const gameOverSound = new Audio("../music/gameOver.mp3");
const moveSound = new Audio("../music/move.mp3");
const musicSound = new Audio("../music/music.mp3");
let speed = 5
let lastPaintTime =0;
let snakeArr = [{x:13 , y: 15}]
let food = {x:6,y:7};
let scoreBox = document.getElementById('score');


//Game Functions
function main(ctime){
    window.requestAnimationFrame(main); // redering makes efficient as per the hardware and fps is maintained.
    
    // console.log(ctime);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();


} 

function isCollide(sarr){
    // If you bump into yourself
    for(let index = 1; index < snakeArr.length;i++){
    if(snake[i].x === snake[0].x && snake[i].x === snake[0].x )
    {
        return true;
    }
    if(snake[0].x >=18 || sanke[0].y <=0 || snake[0].y>=18 || snake[0].y<=0 ){
        return tyue;

    }
    }
}

function gameEngine(){
    // Part 1: Updating the snake array
    if(isCollide(snakeArr)){
        // gameOverSound.play();
        // musicSound.pause();
        inputDir={x:0,y:0};
        alert("Game Over. Press any key to start again!");
        // snakeArr=[{x:13,y:15}];
        // musicSound.play();
        score=0;
    }
        
   

    // If you eat the food

    if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){
        foodSound.play();
        score+=1; 
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore",JSON.stringify(hiscoreval));
            hiscoreBox.innerHTMl = "HighScore"+ hiscoreval;
        }

        scoreBox.innerHtml = score;
        snakeArr.unshift = ({x: snakeArr[0].x + inputDir.x , y: snakeArr[0].y + inputDir.y})
        let a = 2;
        let b= 16;
        food= {x:Math.round(a + (b-a)* Math.random()),y:Math.round(a + (b-a)* Math.random())}
    }
   
    // Moving the snake
    for(let i =snakeArr.length - 2; i>=0;i--){
        snakeArr[i+1]={...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;   
    snakeArr[0].y += inputDir.y;


    // Part 2: rendering sanke and Food
    board.innerHTMl = "";
    snakeArr.forEach((e,index)=>{
          snakeElement = document.createElement('div');
          snakeElement.style.gridRowStart = e.y;
          snakeElement.style.gridColumnStart = e.x;
         
          if(index === 0){
            snakeElement.classList.add('head');
          }
          else{
            snakeElement.classList.add('snake');
          }

          board.appendChild(snakeElement);
    });

    //Display the Food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}






// Main logic starts here
let hiscore = localStorage.getItem("hiscore",);

if(hiscore == null){
    hiscoreval = 0;
    localStorage.setItem("hiscore",JSON.stringify(hiscoreval));
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTMl= "HiScore:" + hiscoreval;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
     inputDir = {x:0,y:1} //start the game
    //  moveSound.play();
     switch(e.key){
        case "ArrowUp": 
            console.log("ArrowUp");
            inputDir.x= 0;
            inputDir.y= -1;
             break;
          
        case "ArrowDown": 
            console.log("ArrowDown");
            inputDir.x= 0;
            inputDir.y= 1;
            break; 
        
        case "ArrowLeft": 
            console.log("ArrowLeft");
            inputDir.x= -1;
            inputDir.y=  0;
            break; 

         case "ArrowRight": 
            console.log("ArrowRight");
            inputDir.x= 1;
            inputDir.y= 0;
            break; 
        default:
            break;




     }
})