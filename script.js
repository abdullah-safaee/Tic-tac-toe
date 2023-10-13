const controls = document.querySelector('.controls')
const winner = document.querySelector('#winner')
const chooseComputerButton = controls.querySelector('.playing-style button.vs-computer')
const choosePlayerButton = controls.querySelector('.playing-style button.vs-player')
const chooseXButton = controls.querySelector('.choose-marker button.x')
const chooseOButton = controls.querySelector('.choose-marker button.o')
const gameBoard = document.querySelector('.game-board')
const cells = gameBoard.querySelectorAll('.cell')
let currentMarker = controls.querySelector('.choose-marker button.selected').value

winner.querySelector('.close').addEventListener('click',function(){
    winner.close()
    resetBoard()
})

gameBoard.addEventListener('click',function(e){
    if(e.target.matches('.cell') && e.target.textContent === ''){
        if(controls.querySelector('.playing-style button.selected').value === 'computer')
        {
            placeMarker(e.target)

        }
        else{
            e.target.textContent = currentMarker
            if(checkWinner() === 'x'){
                congratulateX()
            }
            else if(checkWinner() ==='o'){
                congratulateO()
            }
            else{
                if(!checkDraw()){
                    declareDraw()
                }
                else{
                    switchPlayer()
                }
            }
        }
    }
})

chooseComputerButton.addEventListener('click',function(){
    if(controls.querySelector('.playing-style button.selected') !== this){
        choosePlayerButton.classList.toggle('selected')
        chooseComputerButton.classList.toggle('selected')
        resetBoard()
    }
})

choosePlayerButton.addEventListener('click',function(){
    if(controls.querySelector('.playing-style button.selected') !== this){
        choosePlayerButton.classList.toggle('selected')
        chooseComputerButton.classList.toggle('selected')
        resetBoard()
    }
})

chooseXButton.addEventListener('click',function(){
    if(controls.querySelector('.choose-marker button.selected') !== this){
        chooseOButton.classList.toggle('selected')
        chooseXButton.classList.toggle('selected')
        currentMarker = controls.querySelector('.choose-marker button.selected').value
        resetBoard()
    }
})

chooseOButton.addEventListener('click',function(){
    if(controls.querySelector('.choose-marker button.selected') !== this){
        chooseOButton.classList.toggle('selected')
        chooseXButton.classList.toggle('selected')
        currentMarker = controls.querySelector('.choose-marker button.selected').value
        resetBoard()
    }
})


function congratulateO(){
    winner.querySelector('.result').textContent = "O wins"
    winner.showModal()
}

function congratulateX() {
    winner.querySelector('.result').textContent = "X wins"
    winner.showModal()
}

function declareDraw(){
    winner.querySelector('.result').textContent = "it's a draw"
    winner.showModal()
}

function placeMarker(cell){
    cell.textContent = currentMarker
    if(checkWinner() === 'o'){
        congratulateO()
    }
    else if(checkWinner() === 'x'){
        congratulateX()
    }
    else{
        if(checkDraw() === true){
            switchPlayer()
            computerRandomChoice().textContent = currentMarker
            switchPlayer()
            if(checkWinner()==='x'){
                congratulateX()
            }
            else if(checkWinner()==='o'){
                congratulateO()
            }
            else{
                    if(checkDraw()=== false){
                    declareDraw()
                }
            }
        }
    }
}

function computerRandomChoice(){
    let emptyCells = Array.from(cells).filter(checkEmpty)

    function checkEmpty(cell){
        return cell.textContent === ''
    }

    let randomChoice = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    return randomChoice
}

function switchPlayer(){
    if(currentMarker === 'x'){
        currentMarker = 'o'
    }
    else if(currentMarker === 'o'){
        currentMarker = 'x'
    }
}

function resetBoard(){
    cells.forEach(item=>{
        item.textContent = ''
    })
    currentMarker = controls.querySelector('.choose-marker button.selected').value
}

function checkDraw(){
        for (const cell in Array.from(cells)) {
            if (Array.from(cells)[cell].textContent === '') {return true}
        }
        declareDraw()
        resetBoard()
}

function checkWinner(){
    if((
        gameBoard.querySelector('div.cell[data-cell="1-1"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="1-2"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="1-3"').textContent == 'x')
        ||
        (gameBoard.querySelector('div.cell[data-cell="2-1"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="2-2"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="2-3"').textContent == 'x')
        ||   
        (gameBoard.querySelector('div.cell[data-cell="3-1"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="3-2"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="3-3"').textContent == 'x')
        ||
        (gameBoard.querySelector('div.cell[data-cell="1-1"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="2-1"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="3-1"').textContent == 'x')
        ||
        (gameBoard.querySelector('div.cell[data-cell="1-2"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="2-2"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="3-2"').textContent == 'x')
        ||
        (gameBoard.querySelector('div.cell[data-cell="1-3"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="2-3"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="3-3"').textContent == 'x')
        ||
        (gameBoard.querySelector('div.cell[data-cell="1-1"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="2-2"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="3-3"').textContent == 'x')
        ||
        (gameBoard.querySelector('div.cell[data-cell="1-3"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="2-2"').textContent == 'x'
        &&gameBoard.querySelector('div.cell[data-cell="3-1"').textContent == 'x'))
        {
            return 'x'
        }else if((
        gameBoard.querySelector('div.cell[data-cell="1-1"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="1-2"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="1-3"').textContent == 'o')
        ||
        (gameBoard.querySelector('div.cell[data-cell="2-1"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="2-2"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="2-3"').textContent == 'o')
        ||   
        (gameBoard.querySelector('div.cell[data-cell="3-1"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="3-2"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="3-3"').textContent == 'o')
        ||
        (gameBoard.querySelector('div.cell[data-cell="1-1"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="2-1"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="3-1"').textContent == 'o')
        ||
        (gameBoard.querySelector('div.cell[data-cell="1-2"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="2-2"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="3-2"').textContent == 'o')
        ||
        (gameBoard.querySelector('div.cell[data-cell="1-3"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="2-3"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="3-3"').textContent == 'o')
        ||
        (gameBoard.querySelector('div.cell[data-cell="1-1"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="2-2"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="3-3"').textContent == 'o')
        ||
        (gameBoard.querySelector('div.cell[data-cell="1-3"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="2-2"').textContent == 'o'
        &&gameBoard.querySelector('div.cell[data-cell="3-1"').textContent == 'o'))
        {
            return 'o'
        }
        else{
        return 'none'
        }
}