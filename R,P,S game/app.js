let userScore=0;
let compScore=0;
let user=document.querySelector("#user-score")
let comp=document.querySelector("#comp-score")


let msg=document.querySelector("#msg");

let genCompChoice=()=>{
    const option=["rock","paper","scissors"]
    const ranIdx=Math.floor(Math.random()*3)
    return option[ranIdx]
}

let drawGmae=()=>{
    console.log("the game was draw");
    msg.innerText="The Game Was Draw"
    msg.style.backgroundColor="#081b31"
}

let showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        console.log("You Win");
        msg.innerText=`YOU Win! your ${userChoice} Beats ${compChoice}`
        msg.style.backgroundColor="green"
        userScore++
        user.innerHTML=userScore
        
    }else{
        console.log("you Lose");
        msg.innerText=`YOU Lose! computer ${compChoice} Beats ${userChoice}`
        msg.style.backgroundColor="red"
        compScore++
        comp.innerHTML=compScore
        
    }
}

let playGame= (userChoice)=>{
    console.log("user choice = ",userChoice);

    const compChoice=genCompChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice===compChoice){
        drawGmae()
    }else{
        userwin=true
        if(userwin==="rock"){
            userwin= compChoice==="paper" ? false:true

        }else if(userwin==="paper"){
            userwin= compChoice==="scissors" ? false:true

        }else {
            userwin=compChoice==="rock" ? false:true
        }
        showWinner(userwin,userChoice,compChoice)
    }

}

const choices=document.querySelectorAll(".choice")
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    })
});