var used = [];
var usedSymbol = [];
var symbol = false;
var symboll = "O";
var game = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
var firstround = true;

function win(){
    setTimeout(function(){
        alert('The Player who has played "' + symboll + '" has won!');
        location.reload();
     }, 150);
}

function addSymbol(pos){
    if(pos >=0 && pos <=3){
        game [0][pos-1] = symboll;
    }
    if(pos >3 && pos <=6){
        game [1][pos-4] = symboll; //place X or O in table game
    }
    if(pos >6 && pos <=9){
        game [2][pos-7] = symboll;
    }
}

function logic(){
    let counterX = 0;
    let counterO = 0;
    console.log(game)
    for(let i = 0;i<3;i++){
        if(counterX == 3 || counterO){
            win();
        }
        for(let j = 0;j<3;j++){
            if(game[i][j] == "X"){
                counterX++;
            }else {
                counterX= 0;
                break;
            }
        }
        for(let j = 0;j<3;j++){
            if(game[i][j] == "O"){
                counterO++;
            }else {
                counterO= 0;
                break;
            }
        }
    }
    counterX= 0;
    counterO= 0;
    for(let i = 0;i<3;i++){
        if(counterX == 3 || counterO){
            win();
        }
        for(let j = 0;j<3;j++){
            if(game[j][i] == "X"){
                counterX++;
            }else {
                counterX= 0;
                break;
            }
        }
        for(let j = 0;j<3;j++){
            if(game[j][i] == "O"){
                counterO++;
            }else {
                counterO= 0;
                break;
            }
        }
    }
    if(game[0][0] == "X" && game[1][1] == "X" && game[2][2] == "X"){
        win();
    }
    if(game[0][0] == "O" && game[1][1] == "O" && game[2][2] == "O"){
        win();
    }
    if(game[0][2] == "X" && game[1][1] == "X" && game[2][0] == "X"){
        win();
    }
    if(game[0][2] == "O" && game[1][1] == "O" && game[2][0] == "O"){
        win();
    }
}

function butClick(id){
    id = id.id
    let usedId = false;
    for(i in used){
        if(firstround == true) {
            break;
        }
        if(used[i] == id){return usedId = true;} //if button was clicked
    }
    firstround = false;
    if(usedId == false){ // if buttton not clicked play
    used.push(id); // add clicked buttons to used list if used it cannot be clicked anymore
    var elem = document.createElement("img"); // create img item
    if(symboll == "O"){// if symbol X img is X
        elem.src= "X.png"
        document.getElementById(id).appendChild(elem);
    }
    if(symboll == "X"){// if symbol O img is O
        elem.src= "O.webp"
        document.getElementById(id).appendChild(elem);
    }
    elem.style.width = "281px"//img widht
    elem.style.width = "202px"// img height
    }
    if(symbol == false){ // if X make O
        symbol = true
        symboll = "X";

    }else{// if O make X
        symboll = "O";
        symbol = false;
    }
    var s = JSON.stringify(id);
    strID = s.replace("b","");  //change id name to int(b1 to 1 b3 to 3)
    var d = JSON.parse(strID);
    addSymbol(d);

    logic();
}