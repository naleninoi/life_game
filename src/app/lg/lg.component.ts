import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lg',
  templateUrl: './lg.component.html',
  styleUrls: ['./lg.component.css']
})
export class LgComponent implements OnInit {

  tableRows: number = 15;
  tableCols: number = 15;
  cells: any;
  generation: number = 1;
  isRules: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // this.tableRows = 15;
    // this.tableCols = 15;
    this.cells = this.createBoard(this.tableRows, this.tableCols);
   }

  createBoard(rows:number, cols:number) {
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
    this.tableRows = Number(rows);
    this.tableCols = Number(cols);
    this.cells = this.createBoard(this.tableRows, this.tableCols);
    return false;
  }

  showRules() {
    this.isRules = !this.isRules;
  }

  makeNextGen() {
  //   let currentGen = this.cells;
  //   // перебор всех клеток в игровом поле
  //   for (let i = 0; i <= this.tableRows - 1; i++) {
  //     for (let y = 0; y <= this.tableCols - 1; y++) {
  //       let currentCell = currentGen[i][y];
  //       // выбор соседних клеток для заданной клетки
  //       let currentCellNbrs = [currentGen[i-1][y-1], currentGen[i-1][y], currentGen[i-1][y+1], currentGen[i][y-1], currentGen[i][y+1], currentGen[i+1][y-1], currentGen[i+1][y], currentGen[i+1][y+1]];
  //       console.log(currentCellNbrs);

  }

  seekNbrCells() {
    // перебор всех клеток в игровом поле
    const lastRow = this.tableRows - 1;
    const lastCol = this.tableRows - 1;
    let cells = this.cells;
    for (let i = 0; i <= lastRow; i++) {
      for (let y = 0; y < lastCol; y++) {
        let currentCell = this.cells[i][y];
        if (i == 0) {
          if (y == 0) {
            let currentCellNbrs = [cells[lastRow][lastCol], cells[lastRow][y], cells[lastRow][y+1], 
            cells[i][lastCol], cells[i][y+1], 
            cells[i+1][lastCol], cells[i+1][y], cells[i+1][y+1]]
          }
          else if (y == lastCol) {
            let currentCellNbrs = [cells[lastRow][y-1], cells[lastRow][y], cells[lastRow][0], 
            cells[i][y-1], cells[i][0], 
            cells[i+1][y-1], cells[i+1][y], cells[i+1][0]]
          }
          else {
            let currentCellNbrs = [cells[lastRow][y-1], cells[lastRow][y], cells[lastRow][y+1], 
            cells[i][y-1], cells[i][y+1], 
            cells[i+1][y-1], cells[i+1][y], cells[i+1][y+1]]
          }

        }
        else if (i == lastRow) {
          if (y == 0) {

          }
          else if (y == lastCol) {

          }
          else {
            
          }

        }
        else {
          if (y == 0) {

          }
          else if (y == lastCol) {

          }
          else {
            
          }

        }
                // выбор соседних клеток для заданной клетки 
      }
  }
  }

}