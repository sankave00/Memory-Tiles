var level = 1;
var gscore = 0;
var timer = 40;
var result="You Won";
var mapval=["","","","","","","","","","","",""];
var chk=0;
var select1,select2;
function chkval(c){
    if(c==10)return '*'
    if(c==11)return '#';
    else return c;
}
function clearCards(){
    let t = document.getElementsByClassName("row");
            [...t].forEach(ele => {
                ele.style.display = "none";
                
            });
}
function endWorks(){
    document.getElementById("result").style.display = "block";
    document.getElementById("score").remove();
    document.getElementById("fscore").innerHTML = "Your Final Score : " + gscore;
    const para = document.createElement("p");
    para.innerText = "Thanks For Playing The Game";
    document.body.appendChild(para);
}
function cardset(card){
    var c1=Math.floor(Math.random()*(13));
    while(mapval[c1]!="")
            c1=Math.floor(Math.random()*(13));
    var c2=Math.floor(Math.random()*(13));
    while(mapval[c2]!=""||c2==c1)
            c2=Math.floor(Math.random()*(13));
    mapval[c1]=mapval[c2]=card;
    var ct=chkval(c1);
    var ct2=chkval(c2);
    const url="https://raw.githubusercontent.com/sankave00/Memory-Tiles/master/";
    document.getElementById("card"+ct).setAttribute("alt",url+card);
    document.getElementById("card"+ct2).setAttribute("alt",url+card);
}
function mainfunc(){
    document.getElementById("leveltab").style.display = "none";
    document.getElementById("game").style.display = "block";
    //var score=gscore;
    document.getElementById("l").innerHTML = "Level " +level;
    console.log(gscore);
    document.getElementById("score").innerHTML = "Your Score : " + gscore;
    cardset("aceheart");
    cardset("acediamond");
    cardset("acespade");
    cardset("aceclubs");
    cardset("joker");
    cardset("joker");
    console.log(mapval);
    timerfunc();

}

function timerfunc() {
    

    console.log(timer);
    var x = setInterval(function() {
        document.getElementById("demo").innerHTML = "Time left : " + timer;
        timer--;
        if(gscore==60)
        {
            result="You Won!";
            document.getElementById("res").innerHTML=result;
            gscore+=timer+1;
            clearCards();
            endWorks();
            clearInterval(x);
            
            
        }
        if (timer < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "Time Over";
            result="You lost";
            clearCards();
            document.getElementById("res").innerHTML=result;
            endWorks();
            
        }
    }, 1000);
    
}
function play(id)
{
        console.log(id);
        const eve=document.getElementById(id);
        var temp=id[4];
        if(temp=='*')temp=10;
        if(temp=='#')temp=11;
        if(chk==0)
        {
            eve.src=eve.alt+".png";
            select1=mapval[parseInt(temp)];
            prev=id[4];
            console.log(prev);
            chk=1;
        }
        else
        {
            console.log(prev);
            eve.src=eve.alt+".png";

            select2=mapval[parseInt(temp)];
            setTimeout(function() {
                if(select1==select2)
                {
                    eve.style.visibility="hidden";
                    document.getElementById("card"+prev).style.visibility="hidden";
                    gscore+=10;
                    document.getElementById("score").innerHTML = "Your Score : " + gscore;

                }
                else
                {
                    eve.src="https://raw.githubusercontent.com/sankave00/Memory-Tiles/master/back.png";
                    document.getElementById("card"+prev).src="https://raw.githubusercontent.com/sankave00/Memory-Tiles/master/back.png";
                }
              }, 1000);
              
            
            chk=0;
    
        }
    }


document.getElementById("lev1").addEventListener("click",function(){
    mainfunc();
});
document.getElementById("lev2").addEventListener("click", function(){
    level=2;
    timer=35;
    mainfunc();
});
document.getElementById("lev3").addEventListener("click",function(){
    level=3;
    timer=25;
    mainfunc();
});
document.getElementById("b").onload = function(){
    document.getElementById("game").style.display = "none";
    document.getElementById("result").style.display = "none";
};


