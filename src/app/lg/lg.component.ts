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
    this.tableRows = 8;
    this.tableCols = 8;
    this.cells = this.createBoard(this.tableRows, this.tableCols)
    this.rows = this.cells.length
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

  setRows(rows: any) {
    this.tableRows = rows;
    return false;
  }

  setCols(cols: any) {
    this.tableCols = cols;
    return false;
  }

  changeCellStatus (row: number, col: number, isAlive: boolean) {
    let selectedCell = this.cells[row-1][col-1];
    selectedCell.isAlive = !selectedCell.isAlive;
  }

}