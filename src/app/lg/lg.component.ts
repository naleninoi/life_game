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
    for (let i = 1; i <= rows; i++) {
      let row = [];
      for (let j = 1; j <= cols; j++) {
        let newCell = {row: i, col: j, isAlive: false};
        row.push(newCell);
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
    let currentGen = this.cells;
    // перебор всех клеток в игровом поле
    for (let i = 0; i <= this.tableRows - 1; i++) {
      for (let y = 0; y <= this.tableCols - 1; y++) {
        let currentCell = currentGen[i][y];
        // выбор соседних клеток для заданной клетки
        let currentCellNbrs = [currentGen[i-1][y-1], currentGen[i-1][y], currentGen[i-1][y+1], currentGen[i][y-1], currentGen[i][y+1], currentGen[i+1][y-1], currentGen[i+1][y], currentGen[i+1][y+1]];
        console.log(currentCellNbrs);

      }
    }
  }

}