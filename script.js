let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");//to access all the choices
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>
{
    //rock,paper,scissors;
    const option=["rock","paper","scissors"];
    const randInd=Math.floor(Math.random()*3);//to generate random choices by computer
    return option[randInd];

}
const drawGame=()=>{
    // console.log("Draw Game");
    msg.innerText="Game was Draw ! Play Again!!";
    msg.style.backgroundColor="rgb(21, 23, 59)";
}
const showWinner=(userwin,userchoice,compchoice)=>
{
    if(userwin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        // console.log("You Win");
        msg.innerText=`You Win ! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        // console.log("You Lose");
        msg.innerText=`You Lose ! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userchoice)=>
{
    // console.log("User choice =",userchoice);
    //generate comp choice-->modular
    const compchoice=genCompChoice();
    // console.log("Comp choice =",compchoice);
    if(userchoice===compchoice)
    {
        //draw
        drawGame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock")
        {
            //paper,scissors
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper")
        {
            //scissors,rock
            userwin=compchoice==="scissors"?false:true;
        }
        else
        {
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);

    }
};
choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
        const userchoice=choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
});
