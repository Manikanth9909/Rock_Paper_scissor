let user=0;
let comp=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#message");
const us=document.querySelector("#user_score");
const cs=document.querySelector("#comp-score");


const gencomp=() =>
{
    const optns=['rock','paper','scissors'];
    const ind=Math.floor(Math.random()*3);
    return optns[ind];
}



const playGame=(userid)=>
{
    const cmpchoice=gencomp();

    console.log(userid);
    console.log(cmpchoice);
    

    if(userid==cmpchoice)
    {
        console.log("draw game");
        msg.innerText="game draw !! play again";
        msg.style.backgroundColor='white';
    }
    else
    {
        let userwin=true;
        if(userid==='rock')
        {
            userwin=cmpchoice==='paper'?false:true;
        }
        else if(userid==='paper')
            userwin=cmpchoice==='scissors'?false:true;
        else
        userwin=cmpchoice==='rock'?false:true;
    showWinner(userwin,userid,cmpchoice);
    }
}

const showWinner=(userwin,userid,cmpchoice)=>
{ 
    if(userwin)
    {
        msg.innerText=`you win!! your ${userid} beats ${cmpchoice}`;
        console.log("YOU WIN");
        msg.style.backgroundColor='green';
        user++;
        us.innerText=user;
    }
    else
    {
        msg.innerText=`you Loose!!  ${userid} beats your ${cmpchoice}`;
        msg.style.backgroundColor='red';
    console.log("YOU LOOSE");
    comp++;
    cs.innerText=comp;
    }
}




choices.forEach(
    (choice)=>
    {
       const userid= choice.getAttribute("id");
        choice.addEventListener("click",()=>
        {
            playGame(userid);
        }
        )
    }
)