var gamestarted=false;
var score=0;
var user;
function startgame(){
    gamestarted=true;
    var elements=document.getElementsByClassName("boundary");
    
    for (let index = 0; index < elements.length; index++) {
        const x = elements[index];
        x.style.backgroundColor='#eeeeee';
    }
}

function touchboundary(){
    if(gamestarted){
        gamestarted=false;
        score-=10;
        localStorage.setItem(user,score)
        document.getElementById("status").innerHTML="You Lost!";
        var elements=document.getElementsByClassName("boundary");
        for (let index = 0; index < elements.length; index++) {
            const x = elements[index];
            x.style.backgroundColor='red';
        }
        document.getElementById("score").innerHTML=user+" your score: "+score;
    }
}
function touchfinishline(){
    if(gamestarted){
        //player won
        gamestarted=false;
        score+=5;
        localStorage.setItem(user,score)
        document.getElementById("status").innerHTML="You Won!";
        document.getElementById("score").innerHTML=user+" your score: "+score;
    }
}
function makeprompt(){
    user = prompt("What is you username");
    if(user in localStorage){
        score=localStorage.getItem(user);
    }else{
        localStorage.setItem(user,0);
    }
    document.getElementById("score").innerHTML=user+" your score: "+score;
    
}