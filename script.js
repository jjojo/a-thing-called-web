/*  Welcome to javaScript! ...and the rest of your life...
    Just kidding, you don't have to program the rest of your lifeb ut here is a start at least.

    In this JavaScript file we define all logic for the tic tac toe game. The variables, 
    functions and objects in this file will all help keep track of the game state. */


/*  var is used to declare a variable. Here we declare: 
    var xCharacter = '&#9587'
    this means xCaracter now contains the value '&#9587'
    '&#9587' = X , '&#9587' is a special character looking like an X (but prettier).
    Read more about special characters here: https://www.w3schools.com/charsets/ref_utf_box.asp */
var xCharacter = '&#9587'
var oCharacter = '&#9711'


/*  Once again we use var to declare a variable. This time though our variable is an object.
    You can recognise objects by their curly braces {}. Objects contain key: value pairs. 
    This means we can use keys like currentPlayer, board, winner, etc. The nice thing about 
    objects is that we can keep everything in one pace and access the values easy with the help of the keys.
    object.key = value.
    null is an other new thing here, it is a data type for basically nothing. null is just null, like zero is just zero. */

var state = {
    // currentPlayer will keep track of who's turn it is.
    currentPlayer: null,
    /*  board will keep track of the figures placed on the bord. 
        We will do this by using an array with three arrays in it.
        Arrays are just like lists and we can access them by index,
        array[2] will return the third value of the list 
        (arrays [and most languages] start counting on zero). 
        When we use arrays in arrays we get matrixes and can easily access them by rox and column:
        matrix[2][1] would return the element on the third row in coulum two. */
    board: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
}

/*  Alright here we go, our first function!
    functions can be written in many different ways, what you should use is up to you.
    Here we will show you some different styles that all work fine and are quite common.

    Style 1 (declare a function using the function keyword):
    function nameOfFunction(parameter1, parameter2, etc) {
        *** Body of the function ***
    }

    Style 2 (Store an anonymous function in a variable which you name):
    const nameOfFunction = function(parameter1, parameter2, etc) {
        *** Body of the function *** 
    }

    Style 3 (Arrow function, same idea as above but using '=>' as a shorthand instead of 
    the function keyword. Arrow functions has some other diffrences as well but you'll have 
    to read up on thet by yourself.):
    const nameOfFunction = (parameter1, parameter2, etc) => {
        *** Body of the function *** 
    } 
*/

function startGame() {
    let message = document.getElementById('game-message')
    message.innerHTML = "Game is on!"
}

/*  Arrow function alternative. When written on one line without {} the return is included.
    const getCurrentPlayer = () => state.currentPlayer  */
function getCurrentPlayer() {
    return state.currentPlayer
}

function placeMark( clickedElementId, row, col ) {
    const square = document.getElementById(clickedElementId)
    square.innerHTML = xCharacter
    state.board[row][col] = 'X'
    
    // debug: logs the board state to the console so we can inspect it
    console.log('Debug : state : board : ', state.board)
}

// special character X => &#9587;
// special character O => &#9711;