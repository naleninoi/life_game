import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lg',
  templateUrl: './lg.component.html',
  styleUrls: ['./lg.component.css']
})
export class LgComponent implements OnInit {

  tableRows:number;
  tableCols:number;
  cells: any;
  rows: number;

  constructor() { }

  ngOnInit(): void {
    this.tableRows = 12;
    this.tableCols = 12;
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
    this.tableRows = rows;
    this.tableCols = cols;
    this.cells = this.createBoard(this.tableRows, this.tableCols);
    return false;
  }

  changeCellStatus (row: number, col: number, isAlive: boolean) {
    let selectedCell = this.cells[row-1][col-1];
    selectedCell.isAlive = !selectedCell.isAlive;
  }

}