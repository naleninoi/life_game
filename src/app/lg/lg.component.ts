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

  constructor() { }

  ngOnInit(): void {
    this.tableRows = 20;
    this.tableCols = 20;
  }

  createBoard(n:number) {
    let items = [];
    for (let i = 1; i <= n; i++) {
      items.push(i);
  }
  return items;
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