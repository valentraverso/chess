const piecesActive = document.querySelector('#tablero');
piecesActive.addEventListener('click', actionOnBoard);

function actionOnBoard(event){
    if(event.target.matches('.piece')){
        let position = event.target.parentElement.className;
        rigthMovements(position, event.target);
    }
}

function rigthMovements(position, actualPiece){
  pieceWithoutNumber = actualPiece.id.replace(/[0-9]/, '');

  switch(pieceWithoutNumber){
    case "pawn":
      pawnMove(position, "pawn");
      break;
  }
}

function pawnMove(position, piece){
  row = position.charAt(0);

  let allowRow;
  switch(row){
    case 'b':
      allowRow = 'c';
      break;
    case 'c':
      allowRow = 'd';
      break;
    case 'd':
      allowRow = 'e';
      break;
    case 'e':
      allowRow = 'f';
      break;
    case 'f':
      allowRow = 'g';
      break;
    case 'g':
      allowRow = 'h';
      break;
  }

  column = position.charAt(1);

  let allowColumn;
  switch(column){
    case '1':
      allowColumn = [2];
      break;
    case '2':
      allowColumn = [1, 3]
      break;
    case '3':
      allowColumn = [2, 4];
      break;
    case '4': 
      allowColumn = [3, 5];
      break;
    case '5':
      allowColumn = [4, 6];
      break;
    case '6':
      allowColumn = [5, 7];
      break;
    case '7':
      allowColumn = [6, 8];
      break;
    case '8':
      allowColumn = [7];
      break;
  }

   allowColumn.forEach(function(move){
    allowMovement = document.querySelector(`.${allowRow}${move}`);

    allowMovement.style.border = '1px solid #000';
   }
   )
}

