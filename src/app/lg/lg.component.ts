import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lg',
  templateUrl: './lg.component.html',
  styleUrls: ['./lg.component.css']
})
export class LgComponent implements OnInit {

  tableRows:number;
  tableCols:number;
  status: boolean = true;
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
      for (let y = 1; y <= cols; y++) {
        row.push(false);
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

  changeStatus() {
    this.status = !this.status;
  }

}