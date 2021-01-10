import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lg',
  templateUrl: './lg.component.html',
  styleUrls: ['./lg.component.css']
})
export class LgComponent implements OnInit {

  tableRows:number;
  tableCols:number;

  constructor() { }

  ngOnInit(): void {
    this.tableRows = 5;
    this.tableCols = 5;
  }

  createBoard(number) {
    let items = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
  }
  return items;
  }

}