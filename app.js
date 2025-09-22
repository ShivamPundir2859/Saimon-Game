let gameSeq =[];
let userSeq =[];

let btns =["red", "yellow","green","purple"]

let started = false;
let level = 0;
let h2 = document.querySelector("h2")

document.addEventListener("keypress" , function(){
    if (started == false){
        console.log("game is started");
        started = true;
        levelup();
    }
})


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    } , 200);
}


function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash")
    } , 200);
}


function levelup(){
    userSeq= [];
    level++;
    h2.innerText = `Level ${level}`

    //random choose
    let randIdx = Math.floor(Math.random() *4);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`)
    gameSeq.push(randcolor);
    
    gameFlash(randBtn);
    
}

function checkAns(idx){
    // console.log("curr level is :", level);
    // let idx = level - 1;
    if(userSeq[idx] === gameSeq[idx]){
        if( userSeq.length == gameSeq.length){
            setTimeout(levelup ,1000);
        }
    }else {
        h2.innerHTML = `Game Over ,Your score is <b>${level}</b> <br> Press any key to start.`
        reset();
    }
    
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".btn");
for( btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;

}