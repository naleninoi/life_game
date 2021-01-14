import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  @Input() cells;
  @Input() generation;

  constructor() { }

  ngOnInit() {
  }
    
  changeCellStatus (row: number, col: number, isAlive: boolean) {
    let selectedCell = this.cells[row][col];
    selectedCell.isAlive = !selectedCell.isAlive;
    console.log(selectedCell);
  }

}