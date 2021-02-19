const number=Math.floor(Number((Math.random()*20)+1))
let context=document.querySelector(".message")
let guessedNumber=document.querySelector('.guess')
let scoreContext=document.querySelector(".score")
let highScoreContext=document.querySelector(".highscore")
let score=20;
document.querySelector(".check").addEventListener("click",function(){
    score--;
    if(score==0){
        document.querySelector("h1").textContent='You lost!!'
    }
    scoreContext.textContent=score
    highScoreContext.textContent=score
if(Number(guessedNumber.value)==number){
    context.textContent="You did it!"
    document.querySelector(".number").textContent=number
    document.querySelector("h1").textContent='Congragts You did it'
    document.querySelector("body").style.background="green"
    document.querySelector(".number").style.width="30rem"
}else if(Number(guessedNumber.value)>number){
    context.textContent="it is too high"
}else {
    context.textContent="It is too low!"
}
console.log(number+"---"+context.textContent+"---"+guessedNumber.value)
}
)
document.querySelector(".again").addEventListener("click",function(){
    score=20
    context.textContent="Start guessing..."
    guessedNumber.value=""
    scoreContext.textContent=score
    document.querySelector("h1").textContent="Guess My Number!"
    document.querySelector("body").style.background="#000000"
    document.querySelector(".number").textContent="?"
})