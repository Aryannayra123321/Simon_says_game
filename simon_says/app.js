let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];



let started=false;
let level=0;
let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});

function btnflash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },350);

}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
   
    //random button choose

    let randidx=Math.floor(Math.random()*4);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}

function checkans(ind){
    //console.log("curr level :",level);
   // let ind=level-1;
    if(userseq[ind]==gameseq[ind]){
        //console.log("same value");
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b><br> Press any key to start`;
        document.body.style.backgroundColor = "red";
        setTimeout(function() {
            document.body.style.backgroundColor = "white";
        }, 150);
        
        
        reset();
    }
}

function btnpress(){
    let btn=this;//jo btn hai wo idhar record hojayega
    btnflash(btn);

    let usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkans(userseq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
