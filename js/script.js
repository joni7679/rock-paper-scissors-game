let userScroed=0;
let comScroed =0;

let msg = document.querySelector("#msg");
let user= document.querySelector("#user")
let comp= document.querySelector("#comp")


let choices = document.querySelectorAll(".choice");


//draw game function 

function  drawGame(){
    console.log("game was a draw")
    msg.innerText="game was a draw  plz play again";
    msg.style.backgroundColor="#000";
    
}


//show winner function 

function  showWinner(userWin,userChoice,compChoice){
    
    if (userWin) {
        
        console.log("you win")
    msg.innerText=` congratulations you win ${userChoice} beats computerchoice     ${compChoice}`;
    msg.style.backgroundColor="green";
    userScroed++
    
    user.innerText= userScroed;
    
        
    }
    else{
         console.log("you lost"); msg.innerText=`you lose  ${compChoice}  beats  userchoice ${userChoice}`;
    msg.style.backgroundColor="red";
   comScroed++
   comp.innerText= comScroed;
    
    }
}


//gencomputer choice function 

function genComputerChice(){
    let option =["rock","paper","scissors"];
   let randIndex = Math.floor(Math.random()*3) ;
  // console.log(randIndex)
 return option[randIndex];  
}

//playgame function 
function playGame(userChoice){
    console.log("user choice",userChoice)
    //computer choice 
    let compChoice = genComputerChice();
    console.log("comp choice",compChoice)
    if ( userChoice ===compChoice) {
        
        //draw game 
        drawGame()
    }
    else {
        
        let userWin= true;
        if (userChoice==="rock") {
           //paper , scissors
            userWin = compChoice ==="paper"? false: true;
        }
        
         else if (userChoice==="paper"){
         //rock scissors
         userWin = compChoice ==="scissors"? false: true  
        }
        
        else {
            userWin = compChoice ==="rock"? false: true   
        }
        
        showWinner(userWin,userChoice,compChoice)
        
}
    
}

choices.forEach( (choice)=>{
    console.log(choice)
   choice.addEventListener("click", ()=>{
   let userChoice = choice.getAttribute("id")
       playGame(userChoice);
   })
    
})
