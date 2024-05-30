var numSelected = null;
var tileSelected = null;

var errors = 0;
var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var soluction = [ 
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function() {
    setGame();
}

function setGame(){
    // Digits 1-9 Gli elementi che digito in basso 
    for( let i=1; i<=9; i++){
        //<div id="1" class="number">1</div>
        let  number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click",selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number)
    }

    // Board 9x9
    for(let row=0; row < 9; row++){
        for(let col=0; col<9; col++){
            let tile = document.createElement("div");
            tile.id = row.toString() + "-" + col.toString();
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){

}