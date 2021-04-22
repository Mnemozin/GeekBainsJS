//import Chesspiece from '/chesspiece.js';

function makeCell(i) {
  var cell = document.createElement('b');
  cell.style.display = 'flex';
  cell.style.alignItems = 'center';
  cell.style.justifyContent = 'center';
  cell.style.gridColumn = `${i}/span 1`;
  return cell;
}

var columnEnum = ['', '', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

function nameColumn(row, isRotated) {
  row.id = 'row_side';
  for (var i = 1; i <= 9; i++) {
    var cell = makeCell(i);
    cell.innerHTML = columnEnum[i];
    if (isRotated) {
      cell.style.transform = 'rotate(180deg)';
    }
    row.appendChild(cell);
  }
}

var figureArray = ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;'];

function populateRow(row, isWhite, isPawnRow) {
  var cells = row.children;
  for (var i = 1; i < cells.length - 1; ++i) {
    var cell = cells[i];
    if (isWhite) {
      cell.style.color = 'white';
    }
    if (isPawnRow) {
      cell.innerHTML = '&#9823;';
    } else {
      cell.innerHTML = figureArray[i - 1];
    }
  }
}

function populateBoard() {
  var isWhite = true;
  for (var i = 1; i <= 8; ++i) {
    if (i > 2) {
      isWhite = false;
    }
    if (i == 1 || i == 8) {
      var highRow = document.getElementById(`row${i}`);
      populateRow(highRow, isWhite);
    }
    if (i == 2 || i == 7) {
      var pawnRow = document.getElementById(`row${i}`);
      populateRow(pawnRow, isWhite, true);
    }
  }
}

function drawChessboard() {
  var board = document.createElement('div');
  board.style.display = 'grid';
  board.style.width = '500px';
  board.style.height = '500px';
  board.style.grid = 'repeat(10, 10%)/repeat(10, 10%)';

  var rowArray = [];

  for (var i = 9; i >= 0; --i) {
    var row = document.createElement('b');
    if (i != 9 && i != 0) {
      row.id = `row${i}`;
    }
    rowArray.push(row);
  }

  rowArray.forEach((row, index) => {
    row.style.display = 'inline-grid';
    row.style.gridTemplateColumns = 'repeat(10, 10%)';
    row.style.gridArea = `${index + 1}/1/${index + 1}/11`;
    switch (index) {
      case 0:
        nameColumn(row, true);
        break;
      case 9:
        nameColumn(row);
        break;
      default:
        for (var i = 1; i <= 10; ++i) {
          var cell = makeCell(i);
          var rowNumber = Math.abs(9 - index);
          switch (i) {
            case 1:
              cell.innerHTML = rowNumber;
              break;
            case 10:
              cell.innerHTML = rowNumber;
              cell.style.transform = 'rotate(180deg)';
              break;
            default:
              cell.style.fontSize = '30px';
              cell.id = `${columnEnum[i]}${rowNumber}`;
              if ((i + index) % 2 == 0) {
                cell.style.backgroundColor = 'rgb(69, 30, 2)';
              } else {
                cell.style.backgroundColor = 'rgb(181, 136, 55)';
              }
              break;
          }
          row.appendChild(cell);
        }
        break;
    }
    board.appendChild(row);
  });
  document.body.appendChild(board);
  populateBoard();
}
drawChessboard();
