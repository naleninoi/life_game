import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lg',
  templateUrl: './lg.component.html',
  styleUrls: ['./lg.component.css']
})
export class LgComponent implements OnInit {

  tableRows: number = 20;
  tableCols: number = 20;
  cells: any;
  generation: number;
  isRules: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.cells = this.createBoard(this.tableRows, this.tableCols);
    this.generation = 1;
   }

  createBoard(rows:number, cols:number) {
    // создает игровое поле заданного размера
    let cells = [];
    let counter = 1;
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        let newCell = {id: counter, row: i, col: j, isAlive: false};
        row.push(newCell);
        counter++;
      }
      cells.push(row);
    }
  return cells;
  }

  setBoard(rows: any, cols: any) { 
    // устанавливает новое значение переменных, определяющих размер игрового поля,
    // перестраивает игровое поле
    this.tableRows = Number(rows);
    this.tableCols = Number(cols);
    this.cells = this.createBoard(this.tableRows, this.tableCols);
    this.generation = 1;
    return false;
  }

  showRules() { // изменяет статус кнопки Показать/Скрыть правила, видимость раздела с правилами
    this.isRules = !this.isRules;
  }

  seekNbrCells(currentCell) { // поиск всех соседних клеток для заданной клетки
    const lastRow = this.tableRows - 1;
    const lastCol = this.tableCols - 1;
    const i = currentCell.row;
    const j = currentCell.col;
    const cells = this.cells;
    let currentCellNbrs = [];

    if (i == 0) { // если клетка в первой строке
      if (j == 0) { // если клетка в первой колонке
        currentCellNbrs = [cells[lastRow][lastCol], cells[lastRow][j], cells[lastRow][j+1], 
        cells[i][lastCol], cells[i][j+1], 
        cells[i+1][lastCol], cells[i+1][j], cells[i+1][j+1]];
      }
      else if (j == lastCol) { // если клетка в последней колонке
        currentCellNbrs = [cells[lastRow][j-1], cells[lastRow][j], cells[lastRow][0], 
        cells[i][j-1], cells[i][0], 
        cells[i+1][j-1], cells[i+1][j], cells[i+1][0]];
      }
      else { // если клетка в колонке от 2-й до предпоследней
        currentCellNbrs = [cells[lastRow][j-1], cells[lastRow][j], cells[lastRow][j+1], 
        cells[i][j-1], cells[i][j+1], 
        cells[i+1][j-1], cells[i+1][j], cells[i+1][j+1]];
      }
    }
    
    else if (i == lastRow) { // если клетка в последней строке
      if (j == 0) { // если клетка в первой колонке
        currentCellNbrs = [cells[i-1][lastCol], cells[i-1][j], cells[i-1][j+1], 
        cells[i][lastCol], cells[i][j+1], 
        cells[0][lastCol], cells[0][j], cells[0][j+1]];
      }
      else if (j == lastCol) { // если клетка в последней колонке
        currentCellNbrs = [cells[i-1][j-1], cells[i-1][j], cells[i-1][0], 
        cells[i][j-1], cells[i][0], 
        cells[0][j-1], cells[0][j], cells[0][0]];
      }
      else { // если клетка в колонке от 2-й до предпоследней
        currentCellNbrs = [cells[i-1][j-1], cells[i-1][j], cells[i-1][j+1], 
        cells[i][j-1], cells[i][j+1], 
        cells[0][j-1], cells[0][j], cells[0][j+1]];
      }
    }

    else { // если клетка в строке от 2-й до предпоследней
      if (j == 0) { // если клетка в первой колонке
        currentCellNbrs = [cells[i-1][lastCol], cells[i-1][j], cells[i-1][j+1], 
        cells[i][lastCol], cells[i][j+1], 
        cells[i+1][lastCol], cells[i+1][j], cells[i+1][j+1]];
      }
      else if (j == lastCol) { // если клетка в последней колонке
        currentCellNbrs = [cells[i-1][j-1], cells[i-1][j], cells[i-1][0], 
        cells[i][j-1], cells[i][0], 
        cells[i+1][j-1], cells[i+1][j], cells[i+1][0]];
      }
      else { // если клетка в колонке от 2-й до предпоследней
        currentCellNbrs = [cells[i-1][j-1], cells[i-1][j], cells[i-1][j+1], 
        cells[i][j-1], cells[i][j+1], 
        cells[i+1][j-1], cells[i+1][j], cells[i+1][j+1]];
      }
    }      
    return currentCellNbrs;
  }

  countAliveCells(cellsGroup: any) { // подсчитывает кол-во живых клеток в заданной группе клеток
    let aliveCells = 0;
    for (let i = 0; i < cellsGroup.length; i++) {
      let cell = cellsGroup[i];
      if (cell.isAlive) {
        aliveCells++;
      }
    }
    return aliveCells
  }

  checkCellChange(cell, aliveNbrs) { // проверяет, изменится ли статус клетки в следующем ходе
    let cellChange = false;
    if (cell.isAlive) {
      if (aliveNbrs >= 2 && aliveNbrs <= 3) {
        cellChange = false;
      }
      else {
        cellChange = true;
      }
    }
    else {
      if(aliveNbrs != 3) {
        cellChange = false;
      }
      else {
        cellChange = true;
      }
    }
    return cellChange
  }

    makeNextGeneration(changedCells) { // изменяет статус клеток, к-рые выбраны для изменения в следующем ходе
    const lastRow = this.tableRows - 1;
    const lastCol = this.tableCols - 1;
    for (let i = 0; i <= lastRow; i++) {
      for (let j = 0; j <= lastCol; j++) {
        let currentCell = this.cells[i][j];
        if (changedCells.includes(currentCell.id)) {
          currentCell.isAlive = !currentCell.isAlive;
          }
      }
    }
  }

  makeNextMove() { // для каждой клетки на поле:
    const lastRow = this.tableRows - 1;
    const lastCol = this.tableCols - 1;
    let changedCells = [];
    for (let i = 0; i <= lastRow; i++) {
      for (let j = 0; j <= lastCol; j++) {
        let currentCell = this.cells[i][j];
        let nbrCells = this.seekNbrCells(currentCell); // поиск всех соседних клеток
        let aliveNbrs = this.countAliveCells(nbrCells); // подсчет живых клеток среди соседних
        let changeStatus = this.checkCellChange(currentCell, aliveNbrs); // отбор клеток для изменения в следующем ходе
        if (changeStatus) {
          changedCells.push(currentCell.id);
          }
      }
    }
    this.makeNextGeneration(changedCells); // изменение выбранных клеток
    this.generation++; // увеличение счетчика ходов
  }

}