let boxex=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let turnO=true;
let c = 0;
let flag = false;

const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
const playingGame = () => {
    boxex.forEach((box) => {
        box.addEventListener("click",() =>{
            
            console.log("box was clicked");
            if(turnO){
                box.innerText="O";
                turnO=false;
    
            }else{
                box.innerText="X";
                turnO=true;
            }
            box.disabled=true;
            checkWinner();
        });
    });
    }
if(!flag){
    console.log(flag);
    playingGame();
    console.log("HELLO");
}
else{
    console.log(flag);
    winnerFound();
}
const checkWinner =()=>{
    
    for(let pattern of winPatterns){
        let pos1=boxex[pattern[0]].innerText;
        let pos2=boxex[pattern[1]].innerText;
        let pos3=boxex[pattern[2]].innerText;
        
        if(pos1!="" && pos2!="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                if(turnO){
                    console.log("X winner");
                    flag=true;
                    
                    disableButtons();
                    announceWinner('X');
                }
                
                
                else{
                    console.log("O winner");
                    flag=true;
                    disableButtons();
                    announceWinner('O');
                }
                
            }
        }
        // if(flag==true) {
        //     disableButtons();
        // }
        
    }
};
const announceWinner=(junk)=>{
    document.querySelector(".result").classList.remove("hide");
    document.querySelector(".result").innerText=`Winner is ${junk}`
}
const disableButtons=()=>{
    boxex.forEach((box)=>{
        box.disabled=true;
    })
}
const winnerFound = () => {
    boxex.forEach((box) => {
        box.innerText = "";
    });

}
reset.addEventListener("click",()=>{
    clearText();
    playingGame();
})
const clearText=()=>{
    window.location.reload();
}


