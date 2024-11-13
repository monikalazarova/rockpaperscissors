function PlayNow(){
    var playerChoice=prompt("Please enter rock, paper, or scissors");// declare a var
        if (playerChoice){//if statement
            var playerOne=playerChoice.trim().toLowerCase();// romove any whitespace at the beginning and the end;covert all the characters in the string to lower case
                if(playerOne==="rock" || playerOne==="paper" || playerOne==="scissors"){// nested if for playerOne's choices
                    var computerChoice=Math.floor(Math.random()*3+1);//declare computerChoice variable, initialise with math.random method (), round down the numbers using the method math.floor()
                    var computer;// declare another var to replace the numbers 1-3 with a string; use another if-else statement
                    if (computerChoice===1){
                        computer="rock";
                    }
                    else if(computerChoice===2){
                        computer="paper";
                    }
                    else{
                        computer="scissors";
                    }
                    console.log(computer);// print the value of the computer variable, thus, checking if it works

                    var result;// variable for results depending on the condition - another if-else statement 
                    if (playerOne===computer){
                        result="Draw!";
                    }
                    else if (playerOne==="rock" && computer==="paper"){
                        result=`PlayerOne:${playerOne}\nComputer:${computer}\nComputer wins!`;
                    }
                    else if (playerOne==="paper" && computer==="scissors"){
                        result=`PlayerOne:${playerOne}\nComputer:${computer}\nComputer wins!`;
                    }
                    else if (playerOne==="scissors" && computer==="rock"){
                        result=`PlayerOne:${playerOne}\nComputer:${computer}\nComputer wins!`;
                    }
                    else{
                        result=`PlayerOne:${playerOne}\nComputer:${computer}\nPlayer wins!`;
                    }
                    alert (result);// show the results to the player
                }
                else{
                    alert("Incorrect input, please try again. Enter rock, paper, or scissors");//the message will be desplayed if anything else is written in the prompt and not 'rock, paper, or scissors'
                }
        }
    
}
